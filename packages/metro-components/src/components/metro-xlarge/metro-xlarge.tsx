import { Component, ComponentInterface,  h } from '@stencil/core';

@Component({
  tag: 'metro-xlarge',
  styleUrl: 'metro-xlarge.css',
  shadow: true,
})
export class MetroXlarge implements ComponentInterface {

  render() {
    return (
      <metro-text class={'text'}>
        <slot></slot>
      </metro-text>
    );
  }

}
