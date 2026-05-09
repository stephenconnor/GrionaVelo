import { Component, OnInit, inject } from '@angular/core';

import { TabsModule } from 'primeng/tabs';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { RoutesService } from '../../services/routes.service';
import { RouteCardComponent } from '../../components/route-card/route-card.component';
import { RouteCategory } from '../../models/route.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TabsModule, ProgressSpinnerModule, RouteCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less',
})
export class HomeComponent implements OnInit {
  private routesService = inject(RoutesService);

  categories: RouteCategory[] = [];
  loading = true;
  error: string | null = null;

  ngOnInit() {
    this.routesService.getRoutes().subscribe({
      next: (data) => {
        this.categories = data.categories;
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to load routes. Please try refreshing.';
        this.loading = false;
      },
    });
  }
}
