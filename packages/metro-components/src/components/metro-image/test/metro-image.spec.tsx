import { newSpecPage } from '@stencil/core/testing';
import { MetroImage } from './metro-image';

describe('metro-image', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MetroImage],
      html: `<metro-image></metro-image>`,
    });
    expect(page.root).toEqualHtml(`
      <metro-image>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </metro-image>
    `);
  });
});
