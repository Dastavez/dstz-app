export const DEFAULT_IMAGE_SIZE = "small2x";
export const IMG_SIZES = {
    SMALL: "small",
    SMALL2X: "small2x",
    LARGE: "large",
    LARGE2X: "large2x",
};

export const SNACK_BAR_AUTO_HIDE_DURATION = 2000;

export const OOS_INFO_TOAST_MESSAGE_DELAY = 2000;

export const BG_IMAGE_OFFSET = 0;
export const BG_IMAGE_COUNT = 26;

export const STATUS_BAR_COLORS = {
    LOGIN: "#E6E6E6",
    HOME: "#52C2BB",
    MODAL: "#222222",
    DEFAULT: "#FFFFFF",
};

export const USE_RIPPLE_EFFECT = false;

export const DONT_SHOW_CALENDAR_MESSAGE_KEY = "dontShowCalendarInitMessage";

export const ADD_PRODUCT_ANALYTICS_TRACK_EVENT_KEY = "add_product_track_event";

export const NO_OF_UNFOLDABLE_CATEGORIES_COUNT_KEY =
    "no_of_unfoldable_categories_count_key";

export const NEW_USER_KEY = "is_new_user";

export const OUT_OF_DELIVERY_AREA_NAME = "OUT OF DELIVERY AREA";

export const DEBOUNCE_TIMES = {
    ADD_MONEY: 50,
    TEXT_INPUT_MODAL: 100,
    SEARCH: 300,
    PROFILE: 200,
};

export const CURRENCY = {
    INR: "INR",
};

export const FRESH_CHAT_RESTORE_ID_KEY = "freshchat_restoreId";

export const IS_CREATE_ADDRESS_FLOW = "is_create_address_flow";

export const FEEDBACK = {
    TEXTS: {
        NEVER_ASK_AGAIN: "Never ask me again",
        SUBMIT: "SUBMIT",
        NOT_NOW: "NOT NOW",
        SURE: "SURE",
        ARE_YOU_ENJOYING_HEADER: "Are you enjoying your SuprDaily experience?",
    },
    SECTIONS: {
        RATING_OPTION_LIST: "rating_option_list_modal",
        RATING_THANK_YOU: "rating_thank_you_modal",
        FEEDBACK_PAGE: "feedback",
    },
    INPUT_TYPE: {
        RADIO_BUTTON: "radio-button",
        CHECKBOX_BUTTON: "checkbox-button",
    },
    ACTIONS: {
        REMIND_ME_LATER: "REMIND_ME_LATER",
        NEVER_ASK_AGAIN: "NEVER_ASK_AGAIN",
        OKAY: "OKAY",
    },
};

export const ANIMATE_ACTION_KEYS = {
    CREATE_ADDON: "CREATE_ADDON",
    CREATE_SUBSCRIPTION: "CREATE_SUBSCRIPTION",
    UPDATE_SUBSCRIPTION: "UPDATE_SUBSCRIPTION",
    RECHARGE_SUBSCRIPTION: "RECHARGE_SUBSCRIPTION",
    UPDATE_SUBSCRIPTION_INSTRUCTION: "UPDATE_SUBSCRIPTION_INSTRUCTION",
};

export const APP_DATA_KEYS = {
    IS_LOGGED_IN: "isLoggedIn",
    CUSTOMER_CITY: "customerCity",
};

export const APPS_TRACKING_INFO_SENT = "appsTrackingInfoSent";

export const SKU_UNITS = {
    box: {
        singular: "box",
        plural: "boxes",
    },
    cup: {
        singular: "cup",
        plural: "cups",
    },
    bottle: {
        singular: "bottle",
        plural: "bottles",
    },
    jar: {
        singular: "jar",
        plural: "jars",
    },
    pouch: {
        singular: "pouch",
        plural: "pouches",
    },
    years: {
        singular: "year",
        plural: "years",
    },
    months: {
        singular: "month",
        plural: "months",
    },
    l: {
        singular: "l",
        plural: "ltrs",
    },
    pcs: {
        singular: "pc",
        plural: "pcs",
    },
    pkt: {
        singular: "pkt",
        plural: "pkts",
    },
    kg: {
        singular: "kg",
        plural: "kgs",
    },
    dzn: {
        singular: "dzn",
        plural: "dzns",
    },
};

export const DEVICE_UUID_DB_KEY = "deviceUuid";

export const MAX_TEXT_INPUT_LIMIT = 9999;

export const BANNER_TEXTS = {
    T_PLUS_ONE: {
        TITLE: "Earliest available delivery date",
        SUBTITLE:
            "We need 1 day to confirm your address so you can enjoy hassle-free daily deliveries!",
        AVAILABLE_AFTER_FIRST_DELIVERY: "( Available after first delivery )",
    },
};

export const OUT_OF_STOCK_ENABLED = true;
export const OUT_OF_STOCK_TEXT = "Out of stock";

export const DEVICE_WIDTHS = {
    375: 375,
    360: 360,
};

export const SKU_OOS_NOTIFY_TOAST_TEXT = {
    NOTIFY: "We will alert you via SMS/ Push, when it’s back in stock.",
    OOS: "Sorry, this item is out of stock, check again later.",
};

export const SKU_OOS_TEXTS = {
    GET_AN_ALERT: "Get an alert if this item is available earlier",
    WILL_NOTIFY_YOU: "We will notify you",
};

export enum OOS_INFO_STATES {
    ADD = "add",
    OOS = "oos",
    NOTIFY = "notify",
    UNNOTIFY = "unNotify",
    NOTIFYSL = "notifySl",
}
