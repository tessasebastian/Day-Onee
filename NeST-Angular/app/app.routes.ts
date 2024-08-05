import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductsComponent } from './pages/products/products.component';
import { AboutComponent } from './pages/about/about.component';
import { TimelineComponent } from './pages/timeline/timeline.component';
import { NewsComponent } from './pages/news/news.component';
import { AerospaceComponent } from './pages/aerospace/aerospace.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    { path:'contact',component:ContactComponent },
    {path:'products',component:ProductsComponent },
    {path:'about',component:AboutComponent},
    {path:'timeline' ,component:TimelineComponent},
    {path:'news' ,component:NewsComponent},
    {path:'aerospace', component:AerospaceComponent}


];
