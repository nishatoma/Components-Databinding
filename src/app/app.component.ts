import { Component, Input } from '@angular/core';
import { Element } from './server-element/element.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements: Element[] = [];

  onServerAdded(element: Element) {
    this.serverElements.push(element);
  }

  onBlueprintAdded(element: Element) {
    this.serverElements.push(element);
  }

  onChangeFirst() {
    if (this.serverElements.length > 0) {
      this.serverElements[0].name = 'Changed!';
    }
  }

  destroyElement() {
    this.serverElements.pop();
  }


}
