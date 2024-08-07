import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { ProductsComponent } from './pages/products/products.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BrandsComponent } from './pages/brands/brands.component';
import { NykafashionComponent } from './pages/nykafashion/nykafashion.component';
import { LuxeComponent } from './pages/luxe/luxe.component';
import { BeautyComponent } from './pages/beauty/beauty.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent,AboutComponent,BeautyComponent,RouterOutlet,BrandsComponent,ProductsComponent,AboutComponent,HomeComponent,NykafashionComponent,LuxeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project';
}
