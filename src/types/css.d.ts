// Allow importing CSS files as side-effect imports in TypeScript
declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}

// Also allow importing CSS modules with named class mappings
declare module "*.module.css" {
  const classes: { readonly [key: string]: string };
  export default classes;
}
