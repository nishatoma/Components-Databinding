import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { Element } from '../server-element/element.model';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<Element>();
  @Output() blueprintCreated = new EventEmitter<Element>();;


  // This method manipulates the DOM to access the form input element referenced
  // by 'serverContentInput' tag.
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAddServer(element: HTMLInputElement) {
    this.serverCreated.emit(new Element(element.value, this.serverContentInput.nativeElement.value, "server"));
  }

  onAddBlueprint(element: HTMLInputElement) {
    this.blueprintCreated.emit(new Element(element.value, this.serverContentInput.nativeElement.value, "blueprint"));
  }

}
