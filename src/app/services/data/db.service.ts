import { Storage } from "@ionic/storage";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root",
})
export class DbService {
    private localData: object = {};

    constructor(private storage: Storage) {}

    setData(key: string, value: any): Promise<any> {
        return this.storage.set(key, value);
    }

    getData(key: string): Promise<any> {
        return this.storage.get(key);
    }

    clearData(key: string): Promise<any> {
        return this.storage.remove(key);
    }

    // Clears the whole DB
    clearDB(): Promise<void> {
        return this.storage.clear();
    }

    setLocalData(key: string, value: any): void {
        this.localData[key] = value;
    }

    getLocalData(key: string): any {
        return this.localData[key];
    }

    clearLocalData(key: string): void {
        delete this.localData[key];
    }

    clearLocalState() {
        this.localData = {};
    }
}
