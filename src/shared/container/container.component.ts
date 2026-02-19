import { Component, input, output, viewChild } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.html',
  host: {
    '(mousemove)': 'onMouseMove($event)',
  },
  styleUrl: './container.css',
})
export class ContainerComponent {
  id = input.required<number>();
  content = input.required<string>();
  coords = input.required<[[number, number], [number, number]]>();
  readonly resize = output<MouseEvent>();
  containerElement = viewChild<HTMLDivElement>('containerElement');

  get containerColor(): string {
    const idVal = this.id();
    if (idVal == null) return 'hsl(270, 50%, 60%)';
    const hue = (idVal * 137) % 360;
    return `hsl(${hue}, 60%, 65%)`;
  }

  onMouseMove(event: MouseEvent) {
    this.resize.emit(event);
  }
}