import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {

  alarm:any[] = [
    {showproperty : false ,day:"السبت" },
    {showproperty : true ,day:"الاحد" },
    {showproperty : true ,day:"الاثنين" },
    {showproperty : true ,day:"الثلاثاء" },
    {showproperty : true ,day:"الاربع" },
    {showproperty : true ,day:"الخميس" },
    {showproperty : false ,day:"الجمعة" },

  ];

  counter = 0;

  addInput(id:any){
    const findDay = this.alarm.find(dayObj =>
      dayObj.day == id
    )
      if(findDay){

        if(findDay.addInput){
          findDay.addInput.push(0)

        }else{
          findDay.addInput = [0]
        }
      }
  }

  removInput(id:any){
    const findDay = this.alarm.find(dayObj =>
      dayObj.day == id
    )
      if(findDay.addInput){
        findDay.addInput.pop()
      }

  }
}

// interface days {
//   day: string;
//   showproperty: boolean;
// }



