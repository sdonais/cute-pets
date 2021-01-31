import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class KittyService {
    constructor(public httpClient: HttpClient) {}

    fetchKitties() {
        return this.httpClient.get("https://aws.random.cat/meow");
    }
}