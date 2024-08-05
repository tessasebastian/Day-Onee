import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DepartmentComponent } from './pages/department/department.component';
import { AccordionComponent } from './units/accordion/accordion.component';
import { CarouselComponent } from './units/carousel/carousel.component';
import { CardsComponent } from './units/cards/cards.component';
import { HomeComponent } from './pages/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomeComponent,DepartmentComponent,AccordionComponent,CarouselComponent,CardsComponent],
  templateUrl:'./app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
