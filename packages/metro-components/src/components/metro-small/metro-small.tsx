import { Component, ComponentInterface,  h } from '@stencil/core';

@Component({
  tag: 'metro-small',
  styleUrl: 'metro-small.css',
  shadow: true,
})
export class MetroSmall implements ComponentInterface {

  render() {
    return (
      <metro-text class={'text'}>
        <slot></slot>
      </metro-text>
    );
  }

}
