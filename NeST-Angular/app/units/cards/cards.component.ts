import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {

  department=[
    {
      id:1,
    Title:"BFS",
    Image:"../../../assets/240_F_723149335_tA0Fo8zefrHzYlSgXRMYHmBQk7CuWrRd.jpg",
    description:"Horse flying"
    },
    {
      id:2,
      Title:"HBU",
      Image:"../../../assets/1000_F_540085480_WN26Tz5VOFRwdPsLmK73JXNuSYsi2luw.jpg",
      description:"something"
    },
    {
      id:3,
      Title:"hujj",
      Image:"../../../assets/1000_F_558510531_gSTh9KHlEhlmGStD931WlORItQjCkbCh.jpg",
      description:"a bridge"
    }
  ]
}
 