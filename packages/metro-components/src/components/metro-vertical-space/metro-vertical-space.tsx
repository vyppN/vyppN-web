import { Component,Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'metro-vertical-space',
  shadow: true,
})
export class MetroVerticalSpace {

  @Prop() space:number

  render() {
    return (
      <Host style={{width: '100%', height: `${this.space}px`}}/>
    );
  }

}
