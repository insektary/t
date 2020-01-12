import {Injectable} from '@angular/core';
import {HttpClient, HttpEventType} from '@angular/common/http';
import {Store} from '@ngrx/store';
import {LoaderService} from './loader.service';
import {AppState} from './interfaces/store';
import {putAuthorsToStore} from './store/actions/authors';
import {AuthorType} from './interfaces/course';

@Injectable({
    providedIn: 'root'
})
export class AuthorsService {

    constructor(private http: HttpClient, public loaderService: LoaderService, public store: Store<AppState>) { }

    fetchData(): void {
        this.http.get('api/authors')
            .subscribe((data: AuthorType[]) => {
                this.store.dispatch(putAuthorsToStore({payload: data.map((item) => {
                    const name = item.name.split(' ');

                    return {
                        ...item,
                        name: name[0],
                        lastName: name[1]
                    };
                })}));
            });
    }
}
