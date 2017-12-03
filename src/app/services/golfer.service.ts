import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { AuthHttp, tokenNotExpired } from 'angular2-jwt';
import { IGolfer } from './../models/golfer';
import { ConfigurationService } from './configuration.service';
import { AdalService } from '../services/adal.service';

@Injectable()
export class GolferService {

    headers: Headers;
    options: RequestOptions;

    errormsg: string;

    constructor(private http: Http,
        private adalService: AdalService,
        private configService: ConfigurationService,
        private authhttp: AuthHttp) {
        this.headers = new Headers({ 'Content-Type': 'application/json' });
        this.options = new RequestOptions({ headers: this.headers });
    }

      getGolfers(): Observable<IGolfer[]> {
        console.log('Calling ' + this.configService.getConfiguration.serviceUrl );
        if (tokenNotExpired()) {
            console.log('Token is not expired - calling API');
            return this.authhttp.get(this.configService.getConfiguration.serviceUrl, this.options)
            .map((response: Response) => response.json())
            .catch(this.handleError);
        }
    }

    private handleError(error: any) {
      console.error('server error:', error);
      if (error instanceof Response) {
        let errMessage = '';
        try {
          errMessage = error.json().error;
        } catch (err) {
          errMessage = error.statusText;
        }
        return Observable.throw(errMessage);
      }
      return Observable.throw(error);
  }

}
