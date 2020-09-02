import { ProgressSpinnerModule } from "primeng/progressspinner";
import { firebaseConfig } from "./../../../environments/environment.prod";
import { RegisterationComponent } from "./../registeration/registeration.component";
import { LoginComponent } from "./../login/login.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuthRoutingModule } from "./auth-routing.module";
import { MoviesRoutingModule } from "../../movies/movies-routing.module";

// 1. Import the libs you need
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { AngularFireAuthModule } from "@angular/fire/auth";

let SHARED = [LoginComponent, RegisterationComponent];

@NgModule({
  declarations: [...SHARED],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    MoviesRoutingModule,

    // 3. Initialize
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage

    ProgressSpinnerModule,
  ],
  exports: [...SHARED],
})
export class AuthModule {}
