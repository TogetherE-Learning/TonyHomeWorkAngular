import { Component } from '@angular/core';
import { FromService } from '../app/FromService';
import { FromModel } from '../app/FromModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
  //,styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'TonyHomeWorkAngular';
  public items: any[] = [
    { value: "test", text: "測試" }
    ,{ value: "pord", text: "正式" }
  ]
  constructor(public service: FromService) { 
    service.getList();
  }
}
