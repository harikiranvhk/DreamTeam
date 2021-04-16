import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {  map, catchError } from 'rxjs/operators';

@Injectable()
export class AppInterceptor implements HttpInterceptor {
    constructor() {}

   
   
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log(req);
        console.log("request intercepted");
        let token=sessionStorage.getItem('token');
        const headers = req.headers.set('Authorization', token);
        const authReq = req.clone({ headers });
        return next.handle(authReq).pipe(
            map((event: any)=>{
                if(event instanceof HttpResponse) {
                    console.log(event);
                }
                return event;
            }), catchError((error: HttpErrorResponse) => {
                // if (error) {
                console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@', error);
                // }
                return throwError(error);
            })
        )
    }
}