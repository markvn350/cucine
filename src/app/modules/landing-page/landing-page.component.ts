import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderBlocksComponent } from "../../shared/modules/header-blocks/header-blocks.component";
import { NosotrosComponent } from "../../shared/modules/nosotros/nosotros.component";
import { ProximosCursosComponent } from "../../shared/modules/proximos-cursos/proximos-cursos.component";
import { EscuelaComponent } from "../../shared/modules/escuela/escuela.component";

@Component({
    selector: 'app-landing-page',
    standalone: true,
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.scss'],
    imports: [CommonModule, HeaderBlocksComponent, NosotrosComponent, ProximosCursosComponent, EscuelaComponent]
})
export class LandingPageComponent {

}
