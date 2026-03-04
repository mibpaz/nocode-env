import { gridOptions } from '@/config/grid';
import { GridItem } from '@/shared/grid-item/grid-item';
import { Component } from '@angular/core';
import { Gridster, GridsterApi, GridsterConfig, GridsterItemConfig } from 'angular-gridster2';
import { Sidebar } from '../sidebar/sidebar';

@Component({
  selector: 'app-main',
  imports: [Sidebar, Gridster, GridItem],
  templateUrl: './main.html',
})
export class Main {
  items: GridsterItemConfig[] = [];
  options: GridsterConfig = {
    ...gridOptions,
    initCallback: (_, gridsterApi) => (this.gridApi = gridsterApi)
  };
  gridApi!: GridsterApi;

  changedOptions(): void {
    this.options = Object.assign({}, this.options);
  }

  removeItem(item: GridsterItemConfig): void {
    this.items.splice(this.items.indexOf(item), 1);
    this.gridApi.calculateLayout();
  }

  onAddContainer(content: string | null): void {
    const container: GridsterItemConfig = {
      id: this.items.length + 1,
      cols: 1,
      rows: 1,
      x: 0,
      y: 0,
    };

    if (content) container['content'] = content;
    this.items.push(container);
  }

  exportSetup(): void {
    const setup = new Blob([JSON.stringify(this.items)], { type: 'application/json' });
    const url = URL.createObjectURL(setup);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'setup.json';
    a.click();
    URL.revokeObjectURL(url);
  }

  importSetup(setup: string): void {
    const items = JSON.parse(setup);
    this.items = items;
    this.gridApi.calculateLayout();
  }
}
