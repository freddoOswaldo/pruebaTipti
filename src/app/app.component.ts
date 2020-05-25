import { Component } from '@angular/core';
import { InfoService } from './service/info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prueba';
  info:any;
  constructor(private service:InfoService){
    this.getInfo();
  }

  getInfo(){
    this.service.getInfo().subscribe((value:any)=>{
      console.log(value.results)
      this.info=value.results
        });
  }
}
