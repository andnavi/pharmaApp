import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { NbAuthService } from '@nebular/auth';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class HttpTokenInterceptor implements HttpInterceptor {

    private baseUrl: string = 'http://localhost:5000/api/';

    constructor(private authService: NbAuthService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        request = request.clone({
            url: `${this.baseUrl}${request.url}`,
            setHeaders: {
                Authorization: ''
            }
        });
        return next.handle(request);
    }
}