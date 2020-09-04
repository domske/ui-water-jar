import { newE2EPage } from '@stencil/core/testing';

describe('ui-water-jar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ui-water-jar></ui-water-jar>');
    const element = await page.find('ui-water-jar');
    expect(element).toHaveClass('hydrated');
  });
});
