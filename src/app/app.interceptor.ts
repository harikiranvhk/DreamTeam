import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AppInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log(req);
        console.log("request intercepted");
        let token=sessionStorage.getItem('token');
        const headers = req.headers.set('Authorization', token);
        const authReq = req.clone({ headers });
        return next.handle(authReq);
    }
}