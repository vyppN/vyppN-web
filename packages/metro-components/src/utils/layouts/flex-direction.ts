import {getPadding} from './layout'

type Direction = 'row' | 'column'

export const setDirection = (direction:Direction,props:any) => {
  const {padding,justify,align} = props
  return {
    display:'flex',
    flexDirection:direction,
    padding:getPadding(padding).toString(),
    justifyContent: justify ? justify : 'flex-start',
    alignItems:align?align:'flex-start'
  }
}
