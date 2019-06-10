declare module '*.scss' {
    const content: { [className: string]: string };
    export = content;
}

declare module '*.component.svg' {
    const content: any;
    export default content;
}
