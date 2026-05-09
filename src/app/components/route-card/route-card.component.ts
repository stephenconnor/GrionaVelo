import { Component, Input } from '@angular/core';

import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { PanelModule } from 'primeng/panel';
import { Route } from '../../models/route.model';

@Component({
  selector: 'app-route-card',
  standalone: true,
  imports: [CardModule, DialogModule, PanelModule],
  templateUrl: './route-card.component.html',
  styleUrl: './route-card.component.less',
})
export class RouteCardComponent {
  @Input({ required: true }) route!: Route;

  previewVisible = false;
  previewImage = '';
  previewAlt = '';
  previewTitle = '';

  openImagePreview(image: string, alt: string, title: string) {
    this.previewImage = image;
    this.previewAlt = alt;
    this.previewTitle = title;
    this.previewVisible = true;
  }
}
