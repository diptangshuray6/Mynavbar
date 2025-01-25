import { Component } from '@angular/core';
import { RouterOutlet ,RouterLink} from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { NgModule } from '@angular/core';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}


