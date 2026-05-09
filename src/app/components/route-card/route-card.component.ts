import { Component, Input } from '@angular/core';

import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { Route } from '../../models/route.model';

@Component({
  selector: 'app-route-card',
  standalone: true,
  imports: [CardModule, PanelModule],
  templateUrl: './route-card.component.html',
  styleUrl: './route-card.component.less',
})
export class RouteCardComponent {
  @Input({ required: true }) route!: Route;
}
