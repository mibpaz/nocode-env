import { Component, input } from '@angular/core';
import { NgIcon } from '@ng-icons/core';

/**
 * Shared icon component. Register icons globally in app.config.ts with provideIcons().
 * Import this component in any template that uses <app-icon>.
 */
@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [NgIcon],
  template: `@if (size(); as s) {
    <ng-icon [name]="name()" [size]="s" [class]="class()" />
  } @else {
    <ng-icon [name]="name()" [class]="class()" />
  }`,
})
export class Icon {
  readonly name = input.required<string>();
  readonly size = input<string>();
  readonly class = input<string>();
}
