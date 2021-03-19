import { Component, OnChanges } from '@angular/core';
import { FromService } from '../app/FromService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'TonyHomeWorkAngular';
  public items: any[] = [
    { value: SurroundingsEnum.Test, text: SurroundingsEnum[SurroundingsEnum.Test] }
    ,{ value: SurroundingsEnum.Prod, text: SurroundingsEnum[SurroundingsEnum.Prod] }
  ]
  constructor(public service: FromService) { 
    service.getList(SurroundingsEnum[SurroundingsEnum.Test]);
  }
  onChange(newValue:Event) {
    let tg:HTMLSelectElement = <HTMLSelectElement>newValue.target;
    console.log(tg.value);
    this.service.getList(tg.value);
  }
}
enum SurroundingsEnum {
  Test = 1,
  Prod = 2
}