// for scss modules to work
// https://github.com/zeit/next-plugins/issues/91#issuecomment-372089878
declare module '*.scss' {
    const content: {[className: string]: string};
    export = content;
}

// for png images
declare module '*.png'

// for font
declare module '*.ttf'
