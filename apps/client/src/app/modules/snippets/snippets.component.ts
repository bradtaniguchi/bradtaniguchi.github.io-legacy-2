import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'bt-snippets',
  templateUrl: './snippets.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SnippetsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
