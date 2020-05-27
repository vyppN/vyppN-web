import { newE2EPage } from '@stencil/core/testing';

describe('metro-image', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<metro-image></metro-image>');

    const element = await page.find('metro-image');
    expect(element).toHaveClass('hydrated');
  });
});
