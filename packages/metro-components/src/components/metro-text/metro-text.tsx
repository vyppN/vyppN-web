import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'metro-text',
  styleUrl: 'metro-text.css',
  shadow: true,
})
export class MetroText {

  render() {
    return (
      <Host>
        <p class={'text'}>
          <slot></slot>
        </p>
      </Host>
    );
  }

}
