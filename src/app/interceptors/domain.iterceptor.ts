import { Injectable } from '@angular/core';
import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

import { environment } from 'environment';

@Injectable()
export class DomainInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    const domainRequest = request.clone({
      url: environment.serverUrl + request.url
    });

    return next.handle(domainRequest);
  }
}
  