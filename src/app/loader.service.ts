import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LoaderService {

    requestsCounter: number;

    constructor() {
        this.requestsCounter = 0;
    }

    requestIsStarted() {
        this.requestsCounter++;
    }

    requestIsFinished() {
        this.requestsCounter--;
    }

    get showLoader() {
        return this.requestsCounter;
    }
}
