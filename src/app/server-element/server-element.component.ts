import { Component, OnInit, Input } from '@angular/core';
import { Element } from './element.model';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {

  // With the Input decorator, we can now use this element in another component
  @Input() element: Element;

  constructor() { }

  ngOnInit() {
  }

}
