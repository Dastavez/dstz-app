export const API_TIMEOUT_TIME = 60 * 1000; // 15 sec

export const ERROR_CODES = {
    NO_INTERNET: 100,
    API_ERROR: 500,
    TIMEOUT_ERROR: 504,
    GENERIC_ERROR: 999,
};

export const ERROR_TEXTS = {
    NO_INTERNET: {
        TITLE:
            "Whoops! Looks like your device is not connected to the internet.",
        SUB_TITLE:
            "You are offline. Please check your network connection or try again.",
        ACTION_TEXT: "Try Again",
    },

    TIMEOUT: {
        TITLE: "Oops, server is taking too long!",
        SUB_TITLE:
            "Don't worry, we're looking into this. Please try again in a few minutes!",
        ACTION_TEXT: "Okay, Got It",
    },

    API_ERROR: {
        TITLE: "Request Not Completed",
        SUB_TITLE: "Something unexpected happened",
        ACTION_TEXT: "Okay, Got It",
    },

    GENERIC_ERROR: {
        TITLE: "Oops, something went wrong!",
        SUB_TITLE:
            "Don't worry, we're looking into this. Please try again in a few minutes!",
        ACTION_TEXT: "Okay, Got It",
    },
};

export const INTERNET_TEXTS = {
    ONLINE: "We’re back online! :)",
    OFFLINE: "Your device isn’t connected to the internet.",
};
