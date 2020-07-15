import { environment } from "@environments/environment";

export const DB_STORAGE_CONFIG = {
    name: "suprdaily" + (environment.production ? "-prod" : "-dev"),
    driverOrder: ["sqlite", "indexeddb", "websql", "localstorage"],
};

export const LOCAL_DB_DATA_KEYS = {
    IS_LOGGED_IN: "isLoggedIn",
    CUSTOMER_CITY: "customerCity",
    FAQ_LIST_DATA: "faqListData",
    USER_DATA: "userData",
    FRESH_CHAT_RESTORE_ID_KEY: "freshchat_restoreId",
    REDIRECT_TO_CART: "redirectToCart",
    AUTO_CHECKOUT: "autoCheckout",
    LAUNCH_DONE: "launchDone",
    SCHEDULE_NUX_SHOWN: "scheduleNuxShown",
    ADDRESS_SKIP_IMPRESSION_V1: "addressSkipImpressionV1",
    ADDRESS_REDIRECTION: "addressRedirection",
    POPULAR_PREMISE_SEARCH_LIST: "popuplarPremiseSearchList",
    PREMISE_SEARCH_LIST: "premiseSearchList",
    PREMISE_SEARCH_PARAMS: "premiseSearchParams",
    PAST_ORDER_SKU_LIST: "pastOrderSkuList",
    SUPR_CREDITS_ONBOARDING_DONE: "suprCreditsOnboardingDone",
    ORDER_SUCCESS_AD_MODAL_IMPRESSION: "orderSuccessADModal",
    ORDER_SUCCESS_WHATSAPP_IMPRESSION: "orderSuccessWhatsappModal",
};

export const STORAGE_DB_DATA_KEYS = {
    AUTH_TOKEN: "authToken",
    CART: "cart",
    APP_UPDATE_INFO: "appUpdateInfo",
    NUDGE_DISPLAY: "nudgeDisplay",
    APPS_TRACKING_VERSION: "appsTrackingVersion",
    SEGMENT_SESSION_DATA: "segmentSessionData",
    SUPR_ACCESS_REMOVAL_FROM_CART_INFO: "suprAccessRemovalFromCartInfo",
    SUCCESSFUL_REFERRALS_COUNT: "successfulReferralCount",
};
