import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { CustomDirectivesComponent } from "./custom-directives/custom-directives.component";
import { HighlightDirectiveDirective } from "./highlight-directive.directive";

@NgModule({
    declarations:[CustomDirectivesComponent,HighlightDirectiveDirective],
    imports:[CommonModule],
    exports:[CustomDirectivesComponent,HighlightDirectiveDirective]
})
export class DirectivesModule{

}