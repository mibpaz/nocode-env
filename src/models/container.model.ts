export class Container {

  element: HTMLDivElement;

  constructor(public id: number, public content: string, public coords: [[number, number], [number, number]]) {
    this.id = id;
    this.content = content;
    this.coords = coords;
    this.element = this.createContainerElement();
  }

  static fromJson(json: any): Container {
    return new Container(json.id, json.content, json.coords);
  }

  toJson(): any {
    return {
      id: this.id,
      content: this.content,
      coords: this.coords,
    };
  }

  createContainerElement(): HTMLDivElement {
    const element = document.createElement('div');
    const sizes = {
      width: this.coords[1][0] - this.coords[0][0],
      height: this.coords[1][1] - this.coords[0][1],
      left: this.coords[0][0],
      top: this.coords[0][1],
    }

    console.log(`Sizes: ${JSON.stringify(sizes)}`);

    const styles = {
      width: `${sizes.width}px`,
      height: `${sizes.height}px`,
      position: 'absolute',
      transform: `translate3d(${this.coords[0][0]}px, ${this.coords[0][1]}px, 0)`,
      backgroundColor: this.getRandomColor(),
      padding: '10px',
      zIndex: 10,
      resize: 'both',
    } as any;

    Object.assign(element.style, styles);

    element.innerHTML = this.content;

    return element;
  }

  private getRandomColor(): string {
    return `hsl(${Math.floor(Math.random() * 360)}, ${Math.max(
      Math.floor(Math.random() * 100),
      50
    )}%, ${Math.max(Math.floor(Math.random() * 100), 50)}%)`;
  }

  resize(event: MouseEvent) {
    const target = event.target as HTMLDivElement;
    this.coords[1][0] = target.offsetLeft + target.offsetWidth;
    this.coords[1][1] = target.offsetTop + target.offsetHeight;
    this.element.style.width = `${this.coords[1][0] - this.coords[0][0]}px`;
    this.element.style.height = `${this.coords[1][1] - this.coords[0][1]}px`;
    this.element.style.transform = `translate3d(${this.coords[0][0]}px, ${this.coords[0][1]}px, 0)`;
  }
}