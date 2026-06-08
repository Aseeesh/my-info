// src/types/css.d.ts
declare module "*.css" {
  interface CSSModule {
    [className: string]: string;
  }
  const content: CSSModule;
  export default content;
}

declare module "react-pdf/dist/Page/AnnotationLayer.css" {
  const content: { readonly [className: string]: string };
  export default content;
}

declare module "react-pdf/dist/Page/TextLayer.css" {
  const content: { readonly [className: string]: string };
  export default content;
}
