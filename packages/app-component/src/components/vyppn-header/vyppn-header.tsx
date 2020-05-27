import { Component,  h } from '@stencil/core';

@Component({
  tag: 'vyppn-header',
  styleUrl: 'vyppn-header.css',
  shadow: true,
})
export class VyppnHeader {

  render() {
    return (
      <metro-row align={'center'}>
        <h1>NC</h1>
        <metro-horizontal-space space={10} />
        <metro-column>
          <metro-xlarge>Nattapol Chitinsiyanon</metro-xlarge>
          <metro-medium>Full stack developer</metro-medium>
        </metro-column>
      </metro-row>
    );
  }

}
