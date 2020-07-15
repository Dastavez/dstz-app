import { Pipe, PipeTransform } from "@angular/core";
import { SafeHtml } from "@angular/platform-browser";

@Pipe({ name: "highlightText" })
export class HighlightPipe implements PipeTransform {
    /* use this for single match search */
    static SINGLE_MATCH = "Single-Match";
    /* use this for single match search with a restriction that target should start with search string */
    static SINGLE_AND_STARTS_WITH_MATCH = "Single-And-StartsWith-Match";
    /* use this for global search */
    static MULTI_MATCH = "Multi-Match";

    transform(
        contentString: string = null,
        stringToHighlight: string = null,
        option: string = "Single-And-StartsWith-Match",
        caseSensitive: boolean = false,
        highlightStyleName: string = "searchHighlight"
    ): SafeHtml {
        if (stringToHighlight && contentString && option) {
            let regex: any = "";
            const caseFlag: string = !caseSensitive ? "i" : "";
            switch (option) {
                case "Single-Match": {
                    regex = new RegExp(stringToHighlight, caseFlag);
                    break;
                }
                case "Single-And-StartsWith-Match": {
                    regex = new RegExp("^" + stringToHighlight, caseFlag);
                    break;
                }
                case "Multi-Match": {
                    regex = new RegExp(stringToHighlight, "g" + caseFlag);
                    break;
                }
                default: {
                    // default will be a global case-insensitive match
                    regex = new RegExp(stringToHighlight, "gi");
                }
            }
            const replaced = contentString.replace(
                regex,
                (match) => `<span class="${highlightStyleName}">${match}</span>`
            );
            return replaced;
        } else {
            return contentString;
        }
    }
}
