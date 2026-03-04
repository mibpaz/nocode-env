import { Icon } from '@/shared/icon';
import { Component, input, output, signal } from '@angular/core';
import { GridsterItem as GridsterItemComponent, GridsterItemConfig } from 'angular-gridster2';

@Component({
  selector: 'app-grid-item',
  imports: [GridsterItemComponent, Icon],
  templateUrl: './grid-item.html',
})
export class GridItem {
  readonly item = input.required<GridsterItemConfig>();
  readonly removeItem = output<GridsterItemConfig>();
  showOptions = signal(false);

  toggleOptions(): void {
    this.showOptions.set(!this.showOptions());
  }

  onRemoveItem(event: MouseEvent | TouchEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.removeItem.emit(this.item());
  }

  get itemContent(): string {
    return this.item()['content'];
  }
}
