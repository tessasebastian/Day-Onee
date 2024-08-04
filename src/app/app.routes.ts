import { Routes } from '@angular/router';
import { BrandsComponent } from './pages/brands/brands.component';
import { NykafashionComponent } from './pages/nykafashion/nykafashion.component';
import { LuxeComponent } from './pages/luxe/luxe.component';
import { BeautyComponent } from './pages/beauty/beauty.component';
import { NavbarComponent } from './pages/navbar/navbar.component';

export const routes: Routes = [
    {path:"nykafashion",component:NykafashionComponent},
    {path:"luxe",component:LuxeComponent},
    {path:"beauty",component:BeautyComponent},
    {path:"brands",component:BrandsComponent},
    {path:"navbar",component:NavbarComponent}
];
