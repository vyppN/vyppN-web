import { Component,Prop,State,Host,  h } from '@stencil/core';

@Component({
  tag: 'metro-image',
  styleUrl:'metro-image.css',
  shadow:true
})
export class MetroImage {

  @Prop() source:string
  @Prop() errorImage:string
  @Prop() width:string|number
  @Prop() height:string|number


  @State() state={
    image:this.source
  }

  onLoadError = (error) => {
    if(error) this.state = {...this.state,image: this.errorImage}
  }

  getWH = (dimension:string|number):string => {
    if(typeof dimension === 'string') return dimension as string
    else return `${dimension}px`
  }

  render() {
    return (
          <Host style={{width:this.getWH(this.width),height:this.getWH(this.height)}}>
            <img src={this.state.image} onError={this.onLoadError} />
          </Host>
    );
  }

}
