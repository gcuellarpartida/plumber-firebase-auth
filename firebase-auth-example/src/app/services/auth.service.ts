import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { User } from '@angular/fire/auth/firebase';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

    fullPollResults = new Subject<any>();
    public currentUser: firebase.User | null = null;
    constructor(private http: HttpClient, private auth: AngularFireAuth) {}

    initAuthListener() {
        this.auth.authState.subscribe(user => {
            console.log("Auth updated")
            console.log(user);
            if (user) {
                this.currentUser = user;
            } else {
                this.currentUser = null;
            }
        });
    }

    loginGoogle() {
        this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
      }
    
    logout() {
        console.log("logout")
        this.auth.signOut();
    }


    // getFullResults() {
    //     return this.http.get(`${this.API_ENDPOINT}/poll-results`).subscribe(pollResults => {
    //         this.pollResults = pollResults;
    //         this.fullPollResults.next(pollResults)
    //     })
    // }

    // updateResults(lastestVote: any) {
    //     this.pollResults = this.pollResults.map((e:any) => {
    //         if(e.color == lastestVote) {
    //             e.votes++
    //         }
    //         return e
    //     })
    //     this.fullPollResults.next(this.pollResults)
    // }


}