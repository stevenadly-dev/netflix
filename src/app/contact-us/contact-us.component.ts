import { errorMsg } from "./../shared/animations/animations";
import { ContactUsService } from "./contact-us.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-contact-us",
  templateUrl: "./contact-us.component.html",
  styleUrls: ["./contact-us.component.scss"],
  animations: [errorMsg],
})
export class ContactUsComponent implements OnInit {
  totalError: string;
  success: string;
  constructor(private ContactUsService: ContactUsService) {}

  submitContactUs(contactForm) {
    this.ContactUsService.submitContactUs(contactForm.value)
      .catch(() => {
        this.totalError = "there is an error in your message";
        setTimeout(() => {
          this.totalError = null;
        }, 2000);
      })
      .then(() => {
        this.success = "your message was sent successfully";
        contactForm.reset();
        setTimeout(() => {
          this.success = null;
        }, 2000);
      });
  }
  ngOnInit(): void {}
}
