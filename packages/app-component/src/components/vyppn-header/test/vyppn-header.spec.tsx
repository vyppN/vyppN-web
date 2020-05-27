import { newSpecPage } from '@stencil/core/testing';
import { VyppnHeader } from './vyppn-header';

describe('vyppn-header', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VyppnHeader],
      html: `<vyppn-header></vyppn-header>`,
    });
    expect(page.root).toEqualHtml(`
      <vyppn-header>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </vyppn-header>
    `);
  });
});
