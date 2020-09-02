import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: "root",
})
export class ContactUsService {
  constructor(private db: AngularFirestore) {}

  submitContactUs(contactForm: any) {
    return this.db.collection("contactus").add({
      name: contactForm.uEmail,
      email: contactForm.uname,
      msg: contactForm.userMsg,
    });
  }
}
