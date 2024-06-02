declare module 'jquery.ripples' {
  interface RipplesOptions {
    resolution?: number;
    perturbance?: number;
    interactive?: boolean;
    crossOrigin?: string;
    imageUrl?: string | null;
  }

  interface JQuery {
    ripples(options?: RipplesOptions): JQuery;
    ripples(command: 'destroy' | 'show' | 'hide' | 'pause' | 'play'): void;
    ripples(command: 'drop', x: number, y: number, radius: number, strength: number): void;
    ripples(command: 'updateSize'): void;
  }

  interface JQueryStatic {
    ripples: JQuery;
  }
}
  