import { Component } from "@angular/core";
import { Observer, Observable } from "rxjs";

@Component({
  selector: 'app-roott',
  templateUrl: './test.component.html'
})
export class TestComponent {

  time = new Observable<string>((observer: Observer<string>) => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });

  
}