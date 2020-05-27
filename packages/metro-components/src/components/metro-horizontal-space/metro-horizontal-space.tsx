import { Component,Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'metro-horizontal-space',
  shadow: true,
})
export class MetroHorizontalSpace {

  @Prop() space:number

  render() {
    console.log(this.space)
    return (
      <Host style={{height: '100%', width: `${this.space}px`}}/>
    );
  }
}
