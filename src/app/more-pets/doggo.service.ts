import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class DoggoService {
    constructor(public httpClient: HttpClient) {}

    fetchDoggos(): Observable<any> {
        return this.httpClient.get("https://dog.ceo/api/breeds/image/random");
        // dog.ceo/dog-api
    }



    
}