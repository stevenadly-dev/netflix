import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireAuth } from "@angular/fire/auth";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  loggedSubject = new Subject<boolean>();
  constructor(
    private db: AngularFirestore,
    private fireAuth: AngularFireAuth
  ) {}

  registeration(regForm: any) {
    return this.fireAuth.createUserWithEmailAndPassword(
      regForm.value.email,
      regForm.value.password
    );
  }

  login(loginForm: any) {
    return this.fireAuth
      .signInWithEmailAndPassword(
        loginForm.value.email,
        loginForm.value.password
      )
      .finally(() => {
        this.loggedSubject.next(true);
      });
  }

  setUID(uid: string) {
    localStorage.setItem("netflixUID", uid);
  }

  logout() {
    this.loggedSubject.next(false);
    localStorage.removeItem("netflixUID");
  }

  checkLocalStorage() {
    this.loggedSubject.next(localStorage.getItem("netflixUID") ? true : false);
    return localStorage.getItem("netflixUID") ? true : false;
  }
}
