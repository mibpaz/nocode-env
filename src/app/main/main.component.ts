import { Component, viewChild } from '@angular/core';
import { Container } from '../../models/container.model';
import { ContainerComponent } from '../../shared/container/container.component';
import { Sidebar } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-main',
  imports: [Sidebar, ContainerComponent],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {
  containers: Container[] = [];
  canvas = viewChild<HTMLDivElement>('canvas');
  currentCoords: [number, number] = [0, 0];
  gap = 8;
  bounds: [number, number] = [0, 0];
  baseColor: [number, number, number] = [84, 0, 59];

  ngAfterViewInit() {
    const el = this.canvas();
    if (el) {
      this.bounds = [el.clientWidth, el.clientHeight];
      console.log(`Bounds: ${JSON.stringify(this.bounds)}`);
    }
  }

  onAddContainer(value: string | null) {
    const coords = this.getNextCoords([100, 100]);
    console.log(`Coords: ${JSON.stringify(coords)}`);

    const container = new Container(this.containers.length + 1, value ?? '', coords);
    console.log(`Adding container ${container.id}`);

    this.currentCoords = coords[0];
    this.containers.push(container);
    console.log(`Containers: ${JSON.stringify(this.containers)}`);
  }

  onClickContainer(id: number) {
    const container = this.containers.find((container) => container.id === id);
    if (!container) return;
    console.log(container.coords);
  }

  private getNextCoords(size: [number, number]): [[number, number], [number, number]] {
    // the x coordinate will increase as longs as it is less than the bounds. it must be calculated based on the width of the container plus the gap
    // If the x coordinate is greater than the bounds, the y coordinate will increase by the gap

    let x0 = this.currentCoords[0] + this.gap + (this.currentCoords[0] === 0 ? 0 : size[0]);
    let x1 = x0 + size[0];

    let y0 = this.currentCoords[1];
    let y1 = y0 + size[1]
    if (x1 > this.bounds[0]) {
      console.log(`Candidate for x0 (${x0}) exceeds the bounds (${this.bounds[0]})`)
      x0 = this.gap;
      x1 = x0 + size[0];
      y0 = y0 + size[1] + this.gap;
      y1 = y0 + size[1]
      return [
        [x0, y0],
        [x1, y1],
      ];
    }

    return [[x0, y0], [x1, y1]];
  }
}
