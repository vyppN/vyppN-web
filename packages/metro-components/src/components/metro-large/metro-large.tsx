import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'metro-large',
  styleUrl: 'metro-large.css',
  shadow: true,
})
export class MetroLarge implements ComponentInterface {

  render() {
    return (
      <metro-text class={'text'}>
        <slot></slot>
      </metro-text>
    );
  }

}
