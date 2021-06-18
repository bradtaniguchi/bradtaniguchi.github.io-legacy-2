import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'bt-link-box',
  templateUrl: './link-box.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LinkBoxComponent {
  @Input() title?: string;
  @Input() link?: string;
}
