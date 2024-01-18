import {HttpErrorResponse, HttpInterceptorFn} from '@angular/common/http';
import {catchError, throwError} from "rxjs";

export const tokenAuthInterceptor: HttpInterceptorFn = (req, next) => {
  const token = JSON.parse(localStorage.getItem('token_access')!);
  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    console.log('TokenAuthInterceptor: ', token);
  }

  return next(req).pipe(catchError((error: HttpErrorResponse) => {
    let errorMessage = ""

    if(error.error instanceof ErrorEvent){
      errorMessage = `Error: ${error.error.message}`
    }else{
      errorMessage = `Error code: ${error.status}, message: ${error.message}`
    }

    return throwError(() => errorMessage)
  }))
};
