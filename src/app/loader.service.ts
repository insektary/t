import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LoaderService {

    isLoading: boolean;

    constructor() {
        this.isLoading = false;
    }

    showLoader() {
        this.isLoading = true;
    }

    hideLoader = () => {
        this.isLoading = false;
    }
}
