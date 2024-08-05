import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
 product=[
  {
    id:1,
    Title:"Aerospace & Defence",
    Image:"https://imgs.search.brave.com/ieUHQW-j1R8v6z-BK2zJBLduJO-5iohBlnKOwp6iUBg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTU1/NDM5MzE1L3Bob3Rv/L3Bhc3Nlbmdlci1h/aXJwbGFuZS1mbHlp/bmctYWJvdmUtY2xv/dWRzLWR1cmluZy1z/dW5zZXQuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPUxKV2Fk/YnMzQi1qU0dKQlZ5/OXMwZjhnWk1IaTJO/dldGWGEzVkoybEZj/TDA9",
    description:"Aerospace & Defence involves applying science and engineering to develop and"
  },

  {
    id:2,
    Title:"Banking & Finance",
    Image:"https://imgs.search.brave.com/XgeMm-_rtnXhdoPkImGktN9_84m9Xmr3jlV8vnH5oFw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTUw/MzM3MTI0NS9waG90/by9wZXJjZW50YWdl/LXNpZ24tb24tdG9w/LW9mLWNvaW4tc3Rh/Y2tzLWJlZm9yZS1i/bHVlLWZpbmFuY2lh/bC1ncmFwaC53ZWJw/P2I9MSZzPTE3MDY2/N2Emdz0wJms9MjAm/Yz1pTU5UNUJkVy12/LWhpMXN5OU1wa3hk/RmxsaDNBYjJRcV9O/UWhaM1pRZHpjPQ",
    description:"Banking and finance refer to the systems and institutions that facilitate the flow of money and credit within an economy."
  },

  {
    id:3,
    Title:"Healthcare",
    Image:"https://imgs.search.brave.com/teJnJiLekUfqLicjPbJwkOXK0QL7rhk1jxjXI4alS6M/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vY2RuLXBy/b2QubWVkaWNhbG5l/d3N0b2RheS5jb20v/Y29udGVudC9pbWFn/ZXMvYXJ0aWNsZXMv/MzIzLzMyMzY3OS9h/LWNsaW5pY2lhbi13/b3Jrcy13aXRoLXBh/dGllbnRzLWluLWEt/aGVhbHRoLXNldHRp/bmcuanBnP3c9MTE1/NSZoPTE1NDE",
    description:"Healthcare refers to efforts made to maintain, restore, or promote physical, mental, or emotional well-being, typically performed by trained and licensed professionals. "
  },

  {
    id:4,
    Title:"Insurance",
    Image:"https://imgs.search.brave.com/N6aW4gw_i74DMaW1FbPH0r8p8RANbEZdnFm0VPzahEQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aW52ZXN0b3BlZGlh/LmNvbS90aG1iL2Rh/N2VuUjIyMGlmcXcw/MEhXcVZGZFJ6bWVy/VT0vNzM0NHg0OTAx/L2ZpbHRlcnM6bm9f/dXBzY2FsZSgpOm1h/eF9ieXRlcygxNTAw/MDApOnN0cmlwX2lj/YygpL1doYXRJc2Fu/SW5zdXJhbmNlU2Nv/cmVEZWZpbml0aW9u/UHVycG9zZWFuZEV4/YW1wbGUtZDQyODcy/ODU5MjBjNDJjOTk4/MzNhY2U5M2VlMTU2/MGMuanBn",
    description:"Insurance is a means of protection from financial loss, where an individual or entity (policyholder) pays a premium to an insurer in exchange for coverage against a specified risk or uncertain event."
  },

  {
    id:5,
    Title:"Locomotive",
    Image:"https://imgs.search.brave.com/Kov51fMNQvIqgRM5vrF3a41wnrI912plg_VC4ZUwVuo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9yZXMu/Y2xvdWRpbmFyeS5j/b20vaG5wYjQ3ZWp0/L2ltYWdlL3VwbG9h/ZC92MTY4OTk2OTAw/Mi95aW5qZmJ1Yndl/YmIzMWhkOWNsOC5q/cGc",
    description:"A locomotive is a self-propelled railway vehicle that provides the motive power for a train."
  }

  

 ]
}
