import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiService } from '../../api.service';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { AboutComponent } from '../about/about.component';
import { BeautyComponent } from '../beauty/beauty.component';
import { BrandsComponent } from '../brands/brands.component';
import { LuxeComponent } from '../luxe/luxe.component';
import { NykafashionComponent } from '../nykafashion/nykafashion.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,AboutComponent,BeautyComponent,BrandsComponent,LuxeComponent,NykafashionComponent,ContactComponent],
  templateUrl : './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  constructor(private api:ApiService){}
  products:any=""
  ngOnInit()
  {
    this.api.getProducts().subscribe((data:any)=>{this.products=data})
  }
}