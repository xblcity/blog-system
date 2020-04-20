declare interface PlainObj {
  [props: string]: any
}

declare module '*.png' {
  const content: any
  export = content
}