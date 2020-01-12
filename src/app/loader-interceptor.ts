import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {finalize} from 'rxjs/operators';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import {LoaderService} from './loader.service';

const EXEPTION_URLS = ['api/authors'];

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

    constructor(private loaderService: LoaderService) {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!EXEPTION_URLS.includes(req.url)) {
            this.loaderService.requestIsStarted();

            return next.handle(req).pipe(
                finalize(() => this.loaderService.requestIsFinished())
            );
        } else {
            return next.handle(req);
        }
    }
}
