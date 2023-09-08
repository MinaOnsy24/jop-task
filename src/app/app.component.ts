import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'task-for-job';
  changeDir:boolean = false
  rtl:string = "RtL"

  changeDirection(){
    if(this.rtl=="RtL"){
      this.rtl="LtR"
      this.changeDir= true
    }
    else{
      this.rtl="RtL"
      this.changeDir= false

    }
  }


}
