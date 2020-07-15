import {
    Injectable,
    ComponentFactoryResolver,
    ApplicationRef,
    Injector,
    EmbeddedViewRef,
    ComponentRef,
} from "@angular/core";

export enum ELEMENT_SELECTOR_TYPES {
    ID = "ID",
    CLASS = "CLASS",
    BODY = "BODY",
    TAG = "TAG",
    NAME = "NAME",
}

export interface ElementConfig {
    selector?: string;
    type: string;
}

@Injectable({
    providedIn: "root",
})
export class DomService {
    private childComponentRef: any;

    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private appRef: ApplicationRef,
        private injector: Injector
    ) {}

    public appendComponentTo(
        parentElConfig: ElementConfig,
        childComponent: any,
        childConfig?: object
    ): ComponentRef<any> {
        // Get the parent selector and proceed to create if its avbl
        const parentSelector = this.getDomSelector(parentElConfig);
        if (!parentSelector) {
            return;
        }

        // Create a component reference from the component
        const childComponentRef = this.componentFactoryResolver
            .resolveComponentFactory(childComponent)
            .create(this.injector);

        // Attach the config to the child (inputs and outputs)
        this.attachConfig(childComponentRef, childConfig);

        // Save the child component ref to instance variable
        this.childComponentRef = childComponentRef;

        // Attach component to the appRef so that it's inside the ng component tree
        this.appRef.attachView(childComponentRef.hostView);

        // Get DOM element from component
        const childDomElem = (childComponentRef.hostView as EmbeddedViewRef<
            any
        >).rootNodes[0] as HTMLElement;

        // Append DOM element to the parent selector
        parentSelector.appendChild(childDomElem);

        return childComponentRef;
    }

    public removeComponent(): void {
        this.appRef.detachView(this.childComponentRef.hostView);
        this.childComponentRef.destroy();
    }

    // public hideComponent(): void {
    //     if (this.childComponentRef) {
    //         this.renderer.addClass()
    //     }
    // }

    private attachConfig(componentRef: ComponentRef<any>, config = {}): void {
        Object.keys(config).forEach(
            (key: string): void => (componentRef.instance[key] = config[key])
        );
    }

    private getDomSelector(elementConf: ElementConfig): HTMLElement | null {
        switch (elementConf.type.toUpperCase()) {
            case ELEMENT_SELECTOR_TYPES.ID:
                return document.getElementById(elementConf.selector);
            case ELEMENT_SELECTOR_TYPES.CLASS:
                return document.getElementsByClassName(
                    elementConf.selector
                )[0] as HTMLElement;
            case ELEMENT_SELECTOR_TYPES.TAG:
                return document.getElementsByTagName(
                    elementConf.selector
                )[0] as HTMLElement;
            case ELEMENT_SELECTOR_TYPES.NAME:
                return document.getElementsByName(
                    elementConf.selector
                )[0] as HTMLElement;
            case ELEMENT_SELECTOR_TYPES.BODY:
                return document.body;
            default:
                return null;
        }
    }
}
