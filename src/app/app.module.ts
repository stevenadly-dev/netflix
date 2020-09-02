import { HttpClientModule } from "@angular/common/http";
import { FooterComponent } from "./shared/components/footer/footer.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./shared/components/header/header.component";
import { HomeContainerComponent } from "./shared/components/home-container/home-container.component";

import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from "primeng/button";

// =============================================================== lazy loading
import { AuthModule } from "./auth/auth/auth.module";
import { MoviesModule } from "./movies/movies.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { LoaderComponent } from "./shared/components/loader/loader.component";
import { ProgressSpinnerModule } from "primeng/progressspinner";

// import { MatProgressSpinnerModule } from "@angular/";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactUsComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,

    FormsModule,
    ReactiveFormsModule,

    InputTextModule,
    ButtonModule,

    AuthModule,
    MoviesModule,

    HttpClientModule,

    ProgressSpinnerModule,

    // MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
