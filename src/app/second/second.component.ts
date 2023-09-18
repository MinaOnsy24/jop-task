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
          findDay.addInput.push(Date.now())

        }else{
          findDay.addInput = [Date.now()]
        }
      }
  }

  // removInput(id:any,input:any){
  //   const findDay = this.alarm.find(dayObj =>
  //     dayObj.day == id
  //   )

  //     if(findDay.addInput){
  //       let index = findDay.addInput.findIndex((id:any)=>id==input)
  //       if(index>=0){
  //         findDay.addInput.splice(index,1)
  //       }
  //     }
  // }
  removInput(e:any){
    e.target.parentElement.parentElement.remove()
  }

}

// interface days {
//   day: string;
//   showproperty: boolean;
// }



