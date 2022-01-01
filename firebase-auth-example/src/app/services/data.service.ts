import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})
export class DataService {

    API_ENDPOINT = environment.API_ENDPOINT;
    probability = new Subject<any>();
    constructor(private http: HttpClient, private authService: AuthService, private sb: MatSnackBar) {}

    async getProbability(dataParams: any) {
        let httpOptions = {};
        if(this.authService.currentUser) { //Allow the request even not authenticated to show what happens
            const token = await this.authService.currentUser?.getIdToken();
            httpOptions = {
                headers: new HttpHeaders({
                    'Authorization': token
                })
            };
        } 
        this.http.post(`${this.API_ENDPOINT}/probability`, dataParams, httpOptions).subscribe((res: any) => {
            this.probability.next(res[0]);
        }, err => {
            this.showMessage(err.statusText)
        });
            
    }

    showMessage(message: string) {
        this.sb.open(message, 'close', {
            duration: 3000
        });
    }



}