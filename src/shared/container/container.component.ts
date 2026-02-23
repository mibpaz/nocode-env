import { Component, ElementRef, input, output, viewChild } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.html',
  host: {
    '(mouseup)': 'onResizeEnd()',
  },
  styleUrl: './container.css',
})
export class ContainerComponent {
  id = input.required<number>();
  content = input.required<string>();
  coords = input.required<[[number, number], [number, number]]>();
  readonly resized = output<{ width: number; height: number }>();
  containerElement = viewChild<ElementRef<HTMLDivElement>>('containerElement');

  get containerColor(): string {
    const idVal = this.id();
    if (idVal == null) return 'hsl(270, 50%, 60%)';
    const hue = (idVal * 137) % 360;
    return `hsl(${hue}, 60%, 65%)`;
  }

  onResizeEnd() {
    const element = this.containerElement()?.nativeElement;

    if (!element) {
      return;
    }

    const currentWidth = this.coords()[1][0] - this.coords()[0][0];
    const currentHeight = this.coords()[1][1] - this.coords()[0][1];

    if (element.offsetWidth !== currentWidth || element.offsetHeight !== currentHeight) {
      this.resized.emit({ width: element.offsetWidth, height: element.offsetHeight });
    }
  }
}
