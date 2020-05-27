import { Component,Prop,Host, h } from '@stencil/core';
import {setDirection} from '../../utils/layouts/flex-direction'

@Component({
  tag: 'metro-row',
  shadow: true,
})
export class MetroRow {

  @Prop() padding?:string|number
  @Prop() justify?:string
  @Prop() align?:string

  render() {
    return (
        <Host style={{...setDirection('row', this)}}>
          <slot></slot>
        </Host>
    );
  }

}
