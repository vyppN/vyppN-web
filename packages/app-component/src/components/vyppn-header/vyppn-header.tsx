import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'vyppn-header',
  styleUrl: 'vyppn-header.css',
  shadow: true,
})
export class VyppnHeader {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
