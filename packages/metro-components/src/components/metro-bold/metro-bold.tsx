import { Component, ComponentInterface,  h } from '@stencil/core';

@Component({
  tag: 'metro-bold',
  styleUrl: 'metro-bold.css',
  shadow: true,
})
export class MetroBold implements ComponentInterface {

  render() {
    return (
      <span class={'text'}>
        <slot></slot>
      </span>
    );
  }

}
