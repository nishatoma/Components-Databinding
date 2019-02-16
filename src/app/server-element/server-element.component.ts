import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef, ContentChild } from '@angular/core';
import { Element } from './element.model';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
// Make sure you always import the hook you wanna use
// like OnInit, OnChanges, etc.
export class ServerElementComponent implements OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  // With the Input decorator, we can now use this element in another component
  @Input() element: Element;
  @Input() name: string;
  @ViewChild('heading') heading: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() {
    console.log('Server Element Constructor called!');
  }

  // This hook requires argument!
  ngOnChanges(changes: SimpleChanges) {
    console.log('Server Element NgOnChanges called!');
    console.log(changes);
  }

  ngOnInit() {
    console.log('Server Element NgOnInit called!');
    // Is heading lement available on init?
    // This will be an empty space.
    console.log('Heading content: ' + this.heading.nativeElement.textContent);
    // What about content child paragraph?
    console.log('Content Child: ' + this.paragraph.nativeElement.textContent);
  }

  // Runs everytime there is change detection run
  ngDoCheck() {
    console.log("Server Element ngDoCheck called!");
  }

  ngAfterContentInit() {
    console.log('Server Element ngAfterContentInit called');
    // Can cotent child show up after content init?
    console.log('Content Child: ' + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    console.log('Server Element ngAfterContentChecked called');
  }

  ngAfterViewInit() {
    console.log('Server Element ngAfterViewInit called');
    // What about after the view has initialized?
    // This will print empty string still.
    console.log(this.heading.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log('Server Element ngAfterViewChecked called');
  }

  ngOnDestroy() {
    console.log('Server Element ngOnDestroy called');
  }
  
}
