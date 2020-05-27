import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'metro-larger',
  styleUrl: 'metro-larger.css',
  shadow: true,
})
export class MetroLarger implements ComponentInterface {

  render() {
    return (
      <metro-text class={'text'}>
          <slot></slot>
      </metro-text>
    );
  }

}
