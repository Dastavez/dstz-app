export const CLODUINARY_IMAGE_SIZE = {
    DEFAULT: {
        WIDTH: 200,
        HEIGHT: 200,
    },
    FEATURED: {
        WIDTH: 480,
        HEIGHT: 444,
    },
    PREVIEW: {
        WIDTH: 400,
        HEIGHT: 400,
    },
    HERO_GRID: {
        VERTICAL_IMAGE: {
            WIDTH: 254,
            HEIGHT: 424,
        },
        GRID_IMAGE: {
            WIDTH: 232,
            HEIGHT: 204,
        },
    },
    SINGLE_CARD_COLLECTION: {
        WIDTH: 680,
        HEIGHT: 680,
    },
    CAMPAIGN_POPUP: {
        WIDTH: 600,
        HEIGHT: 600,
    },
    FEATURED_V2: {
        V2: 2,
        IMG_WIDTH: 540,
        IMG_HEIGHT: 312,
        V2_CLASSNAME: "v2",
    },
    CHECKOUT_DISABLED: {
        WIDTH: 330,
    },
    NUDGE_FULL_WIDTH_IMAGE: {
        WIDTH: 680,
    },
};

export const CLOUDINARY_BASE_URL =
    "https://res.cloudinary.com/suprdaily/image/fetch/";

export const CLOUDINARY_DEFAULT_TRANSFORMATIONS = [
    "fl_lossy",
    "f_auto",
    "q_auto",
];
export const CLOUDINARY_TRANSFORMATIONS = {
    centerScale: "c_scale",
    trim: "e_trim",
    grayscale: "e_grayscale",
    fill: "c_fill",
    transparent: "e_make_transparent",
    fit: "c_fit",
    pad: "c_pad",
};

export const SUPR_PROXY_IMAGE_SRC = "assets/images/app/supr-proxy-image.png";

export interface Image {
    fullUrl: string;
    path?: string;
    bgColor?: string;
    compressed_url?: {
        "200_200"?: {
            fullUrl: string;
        };
        "400_400"?: {
            fullUrl: string;
        };
    };
}

export interface CloudinaryOptions {
    imgHeight?: number;
    imgWidth?: number;
    centerScale?: string;
    trim?: string;
    grayscale?: string;
    fill?: string;
    transparent?: string;
    fit?: string;
}
