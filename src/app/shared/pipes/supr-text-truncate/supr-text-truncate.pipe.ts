import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "textTruncate",
})
export class TextTruncatePipe implements PipeTransform {
    transform(value: string, requiredLength: number = 25): string {
        if (value) {
            const suffix = value.length >= requiredLength ? "..." : "";
            return `${value.slice(0, requiredLength - 3)}${suffix}`;
        }
        return "";
    }
}
