import { TextTruncatePipe } from "./supr-text-truncate.pipe";

describe("TextTruncatePipe", () => {
    let truncatePipe: TextTruncatePipe;

    beforeEach(() => {
        truncatePipe = new TextTruncatePipe();
    });

    it("#truncates text properly", () => {
        const stringToTruncate = "I had a dream, We were sipping whiskey neat";
        const truncatedString = "I had a dream...";
        expect(truncatePipe.transform(stringToTruncate, 16)).toBe(
            truncatedString
        );
    });
});
