export const getPadding = (padding:string|number):string|number => {
  if(!padding) return 0
  if(typeof padding === 'string'){
    return padding.split(' ').map(pad=>`${pad}px`).join(' ')
  }else{
    return padding
  }
}
