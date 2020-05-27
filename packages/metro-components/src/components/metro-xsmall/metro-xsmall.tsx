import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'metro-xsmall',
  styleUrl: 'metro-xsmall.css',
  shadow: true,
})
export class MetroXsmall implements ComponentInterface {

  render() {
    return (
      <metro-text class={'text'}>
        <slot></slot>
      </metro-text>
    );
  }

}
