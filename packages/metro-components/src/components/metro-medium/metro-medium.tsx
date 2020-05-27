import { Component, ComponentInterface,  h } from '@stencil/core';

@Component({
  tag: 'metro-medium',
  styleUrl: 'metro-medium.css',
  shadow: true,
})
export class MetroMedium implements ComponentInterface {

  render() {
    return (
      <metro-text class={'text'}>
        <slot></slot>
      </metro-text>
    );
  }

}
