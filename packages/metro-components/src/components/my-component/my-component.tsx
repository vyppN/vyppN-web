import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css'
})
export class MyComponent {
  render() {
    return (
      <metro-column>
        <metro-xsmall>ไก่กับไข่อะไรเกิดก่อน</metro-xsmall>
        <metro-small>ไก่กับไข่อะไรเกิดก่อน</metro-small>
        <metro-medium>ไก่กับไข่อะไรเกิดก่อน</metro-medium>
        <metro-text>ไก่กับไข่อะไรเกิดก่อน</metro-text>
        <metro-text>
          <metro-bold>ไก่กับไข่อะไรเกิดก่อน</metro-bold>
        </metro-text>
        <metro-large>ไก่กับไข่อะไรเกิดก่อน</metro-large>
        <metro-larger>ไก่กับไข่อะไรเกิดก่อน</metro-larger>
        <metro-xlarge>ไก่กับไข่อะไรเกิดก่อน</metro-xlarge>
        <metro-image source={'http://dsfad.xdf/image.png'} errorImage={'http://dsfad.com/image.png'} width={40}/>
      </metro-column>
    )
  }
}
