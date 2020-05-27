import { newE2EPage } from '@stencil/core/testing';

describe('vyppn-header', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<vyppn-header></vyppn-header>');

    const element = await page.find('vyppn-header');
    expect(element).toHaveClass('hydrated');
  });
});
