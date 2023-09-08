import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {

  counter :number = 0
  showTime: boolean = true;
  showNumber:boolean = true;

  increases(){
    this.counter += 1
  }

  decreases(){
    if(this.counter >0){
      this.counter -= 1
    }
  }

}
