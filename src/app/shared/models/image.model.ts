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
