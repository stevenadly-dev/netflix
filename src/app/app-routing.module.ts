import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { HomeContainerComponent } from "./shared/components/home-container/home-container.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";

const routes: Routes = [
  { path: "", component: HomeContainerComponent },
  {
    path: "auth",
    loadChildren: () =>
      import("./auth/auth/auth.module").then((m) => m.AuthModule),
  },
  {
    path: "shows",
    loadChildren: () =>
      import("./movies/movies.module").then((m) => m.MoviesModule),
  },

  {
    path: "contactUs",
    component: ContactUsComponent,
  },
  { path: "**", redirectTo: "/" },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
