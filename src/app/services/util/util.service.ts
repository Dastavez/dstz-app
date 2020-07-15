import { Injectable, ElementRef } from "@angular/core";

import * as uuid from "uuid";

@Injectable({
    providedIn: "root",
})
export class UtilService {
    // ======================
    // Public methods
    // ======================

    getNestedValue(object: any, propertyName: string, defaultValue?: any) {
        const value = propertyName.split(".").reduce(this.getValue, object);
        return value !== undefined ? value : defaultValue;
    }

    chunkArray(arr: Array<any>, n: number): Array<any> {
        return arr.reduce((all, cur, i) => {
            const ch = Math.floor(i / n);
            all[ch] = [].concat(all[ch] || [], cur);
            return all;
        }, []);
    }

    isValidEmail(email: string): boolean {
        const pattern = /^[a-z0-9._'%+-]{1,64}@(?:[a-z0-9-]{1,63}\.){1,125}[a-z]{2,63}$/;

        return pattern.test(email.toLowerCase());
    }

    isValidName(name: string): boolean {
        const pattern = /^[a-z 0-9_ ,.'-]+$/i;
        return pattern.test(name.toUpperCase());
    }

    getValue(object: any, propertyName: string): any {
        if (!propertyName) {
            throw new Error("Impossible to set null property");
        }
        return object === null || typeof object === "undefined"
            ? undefined
            : object[propertyName];
    }

    capitalizeFirstLetter(string = ""): string {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    capitalizeOnlyFirstLetter(string = ""): string {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }

    isNumber(obj: any) {
        return obj !== undefined && typeof obj === "number" && !isNaN(obj);
    }

    isEmpty(value: any): boolean {
        switch (typeof value) {
            case "string":
                return value.length === 0;
            case "number":
            case "boolean":
                return !value;
            case "undefined":
                return true;
            case "object":
                return value === null || Object.keys(value).length === 0
                    ? true
                    : false; // handling for null.
            case "function":
                return false;
            default:
                return !value ? true : false;
        }
    }

    toValue(num: string | number, decimals = 2): number {
        if (num === undefined || num === null) {
            return NaN;
        }

        const value = typeof num === "string" ? Number(num) : num;
        return this.round(value, decimals);
    }

    getUrlData(url: string): any {
        const parser = document.createElement("a");
        parser.href = url;

        const queryString = parser.search.substring(1);
        const queryParamsCollection =
            queryString.length > 1 && queryString.split("&");
        const queryParams = {};

        if (Array.isArray(queryParamsCollection)) {
            for (let i = 0; i < queryParamsCollection.length; i++) {
                const pair = queryParamsCollection[i].split("=");
                queryParams[pair[0]] = decodeURIComponent(pair[1]);
            }
        }

        return {
            path: parser.pathname,
            queryParams,
        };
    }

    round(value: number, decimals = 0) {
        const roundedValue = Math.round(Number(`${value}e${decimals}`));
        return Number(`${roundedValue}e-${decimals}`);
    }

    perfNow(): number {
        if (
            window &&
            window.performance !== undefined &&
            window.performance.now !== undefined
        ) {
            return performance.now();
        }

        return Date.now();
    }

    createPerformanceMark(name: string) {
        if (
            window &&
            window.performance !== undefined &&
            window.performance.mark !== undefined
        ) {
            window.performance.mark(name);
        }
    }

    debounce(delay: number, callback: Function) {
        let timeout = null;
        const debounced = function () {
            const context = this;
            const args = arguments;

            //
            // if a timeout has been registered before then
            // cancel it so that we can setup a fresh timeout
            //
            if (timeout !== null) {
                clearTimeout(timeout);
            }

            timeout = setTimeout(function () {
                callback.apply(context, args);
                timeout = null;
            }, delay);
        };

        debounced.cancel = function () {
            clearTimeout(timeout);
            timeout = null;
        };

        return debounced;
    }

    uuid(): string {
        return uuid.v4();
    }

    getQueryParams(object: any): string {
        if (this.isEmpty(object)) {
            return "";
        }

        return Object.keys(object)
            .map((key) => {
                return (
                    encodeURIComponent(key) +
                    "=" +
                    encodeURIComponent(object[key])
                );
            })
            .join("&");
    }

    toTitleCase(input: string): string {
        const words = input.toLowerCase().split(" ");
        const final = [];

        for (const word of words) {
            final.push(word.charAt(0).toUpperCase() + word.slice(1));
        }

        return final.join(" ");
    }

    isLengthyArray(item): boolean {
        return Array.isArray(item) && item.length > 0;
    }

    setStyles(data: any, styleList: any[], wrapperEl: ElementRef) {
        styleList.forEach((styleAttribute) => {
            const attributeValue = this.getStyleAttributeValue(
                data,
                styleAttribute.attributeName
            );

            if (attributeValue) {
                this.setStyleAttribute(
                    wrapperEl,
                    styleAttribute.attributeStyleVariableName,
                    attributeValue
                );
            }
        });
    }

    isElementInViewport(el: any): boolean {
        if (!el) {
            return false;
        }

        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <=
                (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <=
                (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    setStyleAttribute(
        wrapperElementReference: ElementRef,
        styleVariableName: string,
        styleVariableValue: string
    ) {
        if (styleVariableName && styleVariableValue) {
            wrapperElementReference.nativeElement.style.setProperty(
                styleVariableName,
                styleVariableValue
            );
        }
    }

    private getStyleAttributeValue(
        attributeMap: any,
        attributeName: string
    ): string {
        if (attributeName) {
            return this.getNestedValue(attributeMap, attributeName, null);
        }

        return null;
    }
}
