export interface PageRoute {
    NAME: string;
    PATH: string;
    BASE?: string;
    CHILDREN?: PageRoutes;
}

export interface PageRoutes {
    [key: string]: PageRoute;
}

export interface PageNames {
    [url: string]: string;
}

export const PAGE_ROUTES: PageRoutes = {
    HOME: {
        NAME: "HOME",
        PATH: "home",
    },
    CATEGORY: {
        NAME: "CATEGORY",
        PATH: "category/:categoryId",
        CHILDREN: {
            ESSENTIALS: {
                NAME: "CATEGORY_ESSENTIALS",
                PATH: "essentials",
            },
            FILTER: {
                NAME: "CATEGORY_FILTER",
                PATH: "filter/:filterId",
            },
        },
    },
    CATEGORY_ESSENTIALS: {
        NAME: "CATEGORY_ESSENTIALS",
        PATH: "category/:categoryId/essentials",
    },
    SUB_CATEGORY: {
        NAME: "SUB_CATEGORY",
        PATH: "category/:categoryId/filter/:filterId",
    },
    COLLECTION: {
        NAME: "COLLECTION",
        PATH: "collection/:viewId",
    },
    SUBSCRIPTION_CREATE: {
        NAME: "SUBSCRIPTION_CREATE",
        PATH: "subscription/create",
    },
    SUBSCRIPTION_LIST_V2: {
        NAME: "SUBSCRIPTION_LIST_v2",
        PATH: "subscription/list/v2",
    },
    SUBSCRIPTION_DETAILS_V2: {
        NAME: "SUBSCRIPTION_DETAILS_v2",
        PATH: "subscription/details/v2/:subscriptionId",
        BASE: "subscription/details/v2",
    },
    SUBSCRIPTION_SUMMARY: {
        NAME: "SUBSCRIPTION_SUMMARY",
        PATH: "subscription/summary/:subscriptionId",
        BASE: "subscription/summary",
    },
    SUBSCRIPTION_RECHARGE: {
        NAME: "SUBSCRIPTION_RECHARGE",
        PATH: "subscription/recharge/:subscriptionId",
    },
    SUBSCRIPTION_SCHEDULE: {
        NAME: "SUBSCRIPTION_SCHEDULE",
        PATH: "subscription/schedule/:subscriptionId",
    },
    WALLET: {
        NAME: "WALLET",
        PATH: "wallet",
        CHILDREN: {
            TRANSACTIONS: {
                NAME: "WALLET_TRANSACTIONS",
                PATH: "transactions",
            },
            TRANSACTIONS_V2: {
                NAME: "WALLET_TRANSACTIONS",
                PATH: "transactions-v2",
            },
            THANK_YOU: {
                NAME: "WALLET_RECHARGE_THAK_YOU",
                PATH: "thankyou",
            },
        },
    },
    PROFILE: {
        NAME: "PROFILE",
        PATH: "profile",
    },
    REGISTER: {
        NAME: "REGISTER",
        PATH: "register",
    },
    ADDRESS: {
        NAME: "ADDRESS",
        PATH: "address",
        CHILDREN: {
            FORM: {
                NAME: "ADDRESS_FORM",
                PATH: "form",
            },
            MAP: {
                NAME: "ADDRESS_MAP",
                PATH: "map",
            },
            MAP_EDIT: {
                NAME: "ADDRESS_MAP_EDIT",
                PATH: "map/edit",
            },
            ADDRESS_SEARCH: {
                NAME: "ADDRESS_SEARCH",
                PATH: "search/address",
            },
            SOCIETY_SEARCH: {
                NAME: "SOCIETY_SEARCH",
                PATH: "search/society",
            },
            SOCIETY_DETAILS_SEARCH: {
                NAME: "SOCIETY_DETAILS_SEARCH",
                PATH: "search/society/details",
            },
        },
    },
    SEARCH: {
        NAME: "SEARCH",
        PATH: "search",
    },
    CITY_SELECTION: {
        NAME: "CITY_SELECTION",
        PATH: "cityselection",
    },
    AUTH: {
        NAME: "AUTH",
        PATH: "auth",
        CHILDREN: {
            LOGIN: {
                NAME: "AUTH_LOGIN",
                PATH: "login",
            },
            OTP: {
                NAME: "AUTH_OTP",
                PATH: "otp",
            },
        },
    },
    LOGIN: {
        NAME: "LOGIN",
        PATH: "/auth/login",
    },
    PASSWORD: {
        NAME: "PASSWORD",
        PATH: "/auth/otp",
    },
    VACATION: {
        NAME: "VACATION",
        PATH: "vacation",
    },
    CART: {
        NAME: "CART",
        PATH: "cart",
    },
    SCHEDULE: {
        NAME: "SCHEDULE",
        PATH: "schedule",
        CHILDREN: {
            PAUSE: {
                NAME: "PAUSE_ORDERS",
                PATH: "pause-orders",
            },
        },
    },
    SUPPORT: {
        NAME: "SUPPORT",
        PATH: "support",
        CHILDREN: {
            FAQ: {
                NAME: "FAQ",
                PATH: "faq",
            },
        },
    },
    LANDING: {
        NAME: "APP_LANDING",
        PATH: "landing",
    },
    THANKYOU: {
        NAME: "THANKYOU",
        PATH: "thankyou",
    },
    SUPER_CREDITS_ONBOARDING: {
        NAME: "SUPER_CREDITS_ONBOARDING",
        PATH: "supr-credits-onboarding",
    },
    OOS_ALTERNATES: {
        NAME: "OOS_ALTERNATES",
        PATH: "products/similar/:skuId",
        BASE: "products/similar",
    },
    SUPR_PASS: {
        NAME: "SUPR_PASS",
        PATH: "supr-pass",
        CHILDREN: {
            FAQ: {
                NAME: "FAQ",
                PATH: "faq",
            },
            ACTIVITY: {
                NAME: "ACTIVITY",
                PATH: "activity",
            },
        },
    },
    REFERRAL: {
        NAME: "REFERRAL",
        PATH: "referral",
        CHILDREN: {
            FAQ: {
                NAME: "FAQ",
                PATH: "faq",
            },
            REWARDS: {
                NAME: "REWARDS",
                PATH: "rewards",
            },
        },
    },
    COMPLAINTS: {
        NAME: "COMPLAINTS",
        PATH: "complaints",
    },
    DELIVERY_PROOF: {
        NAME: "DELIVERY_PROOF",
        PATH: "delivery-proof",
    },
};

export const EXIT_PATHS = [
    PAGE_ROUTES.HOME.PATH,
    PAGE_ROUTES.LOGIN.PATH,
    PAGE_ROUTES.LANDING.PATH,
    PAGE_ROUTES.CITY_SELECTION.PATH,
    PAGE_ROUTES.REGISTER.PATH,
];
