import { Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';
import { ResizeEvent } from 'angular-resizable-element';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  viewportWidth: number | undefined;
  viewportHeight!: number;
  shouldZoomOut: boolean = false; // Flag to determine if zoom-out is needed

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  onResizeEnd(event: ResizeEvent): void {
    console.log('Element was resized', event);
  }



}
