import { NgModule } from "@angular/core";
import { UserComponentComponent } from "./user-component/user-component.component";
import { NavbarComponentComponent } from './navbar-component/navbar-component.component';

import { CommonModule } from "@angular/common";
import { HomeComponentComponent } from './home-component/home-component.component';
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "../app-routing.module";


@NgModule({
    declarations:[ UserComponentComponent,NavbarComponentComponent, HomeComponentComponent ],
    imports:[CommonModule,RouterModule],
    exports:[UserComponentComponent,NavbarComponentComponent,HomeComponentComponent]
})
export class ComponentsModule{

}