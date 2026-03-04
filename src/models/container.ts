import { GridsterItemConfig } from "angular-gridster2";

export class Container implements GridsterItemConfig {
  id: number;
  content: string;
  cols: number;
  rows: number;
  x: number;
  y: number;
  hasContent: boolean = false;
  className: string = '';

  constructor(options: GridsterItemConfig) {
    this.id = options['id'];
    this.content = options['content'];
    this.cols = options['cols'];
    this.rows = options['rows'];
    this.x = options['x'];
    this.y = options['y'];
    if (this.content) {
      this.hasContent = true;
    }
    if (options['className']) {
      this.className = options['className'];
    }
  }

  static fromJson(json: any): Container {
    return new Container({
      id: json['id'],
      content: json['content'],
      cols: json['cols'],
      rows: json['rows'],
      x: json['x'],
      y: json['y'],
      hasContent: json['hasContent'] || false,
      className: json['className'] || '',
    });
  }

  toJson(): any {
    return {
      id: this.id,
      content: this.content,
      cols: this.cols,
      rows: this.rows,
      x: this.x,
      y: this.y,
      hasContent: this.hasContent,
      className: this.className,
    };
  }

  get options(): GridsterItemConfig {
    return {
      id: this.id,
      content: this.content,
      cols: this.cols,
      rows: this.rows,
      x: this.x,
      y: this.y,
      hasContent: this.hasContent,
      className: this.className,
    };
  }

}