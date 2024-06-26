import { Component } from '@angular/core';
import { HomeComponent } from "./home/home.component";
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from "./footer/footer.component";
import { CardComponent } from './card/card.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [HomeComponent, NavbarComponent, FooterComponent, CardComponent]
})
export class AppComponent {
  title = 'Challenge6';
}
