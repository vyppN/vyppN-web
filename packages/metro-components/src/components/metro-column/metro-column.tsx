import { Component,Prop, Host, h } from '@stencil/core';
import {setDirection} from '../../utils/layouts/flex-direction'

@Component({
  tag: 'metro-column',
  shadow: true,
})
export class MetroColumn {
  @Prop() padding?:string|number
  @Prop() justify?:string
  @Prop() align?:string


  render() {
    return (
      <Host style={{...setDirection('column', this)}}>
        <slot></slot>
      </Host>
    );
  }

}
