import { ButtonComponent } from "./supr-button/supr-button.component";

import { IconComponent } from "./supr-icon/supr-icon.component";
import { InputComponent } from "./supr-input/supr-input.component";

import { ImageComponent } from "./supr-image/supr-image.component";

import { TextComponent } from "./supr-text/supr-text.component";
import { TextHighlightComponent } from "./supr-text/supr-text-highlight.component";

import { SuprLoaderComponent } from "./supr-loader/supr-loader.component";

import { errorComponents } from "./supr-error";

export const sharedComponents = [
    ButtonComponent,

    IconComponent,
    InputComponent,

    ImageComponent,

    TextComponent,
    TextHighlightComponent,

    SuprLoaderComponent,
    ...errorComponents,
];
