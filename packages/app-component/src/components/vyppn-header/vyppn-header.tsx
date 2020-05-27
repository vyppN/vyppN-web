import { Component,Prop,  h } from '@stencil/core';

@Component({
  tag: 'vyppn-header',
  styleUrl: 'vyppn-header.css',
  shadow: true,
})
export class VyppnHeader {

  @Prop() source:string
  @Prop() errorImage:string


  render() {
    return (
      <metro-row align={'flex-start'}>
        <h1 style={{padding:'0',margin:'0'}}>NC</h1>
        <metro-horizontal-space space={10} />
        <metro-column>
          <metro-xlarge>Nattapol Chitinsiyanon</metro-xlarge>
          <metro-medium>Full stack developer</metro-medium>
          <metro-image source={this.source} errorImage={this.errorImage} width={140} height={140} />
        </metro-column>
      </metro-row>
    );
  }

}
