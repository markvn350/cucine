import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from "../navigation/navigation.component";
import { HeaderBlocksComponent } from "../header-blocks/header-blocks.component";
import { NavegacionService } from '../../services/navegacion.service';

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    imports: [CommonModule, NavigationComponent, HeaderBlocksComponent]
})
export class HeaderComponent {
    _nav = inject(NavegacionService);
}
