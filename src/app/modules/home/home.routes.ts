import { Routes } from "@angular/router";
import { HomeComponent } from "./home.component";
import { LandingPageComponent } from "../landing-page/landing-page.component";
import { NosotrosComponent } from "src/app/shared/modules/nosotros/nosotros.component";


export const homeRoutes: Routes = [
    {
        path: "",
        component: LandingPageComponent,
    },
    {
        path: "nosotros",
        component: NosotrosComponent,
    }
];