declare interface PlainObj {
  [props: string]: any
}

declare module '*.png' {
  const content: any
  export = content
}

declare module 'highlight' {
  const content: any
  export = content
}

declare module 'moment' {
  const content: any
  export = content
}

// declare module 'antd' {
//   const content: any
//   export = content
// }