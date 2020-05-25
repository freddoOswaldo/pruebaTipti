import { Component } from '@angular/core';
import { InfoService } from './service/info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prueba';

  constructor(private service:InfoService){
  }

  getInfo(){
    this.service.getInfo();
  }
}
