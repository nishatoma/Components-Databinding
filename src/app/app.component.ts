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
}
