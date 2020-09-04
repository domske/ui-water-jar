import { newSpecPage } from '@stencil/core/testing';
import { WaterJarComponent } from './water-jar';

describe('ui-water-jar', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [WaterJarComponent],
      html: '<ui-water-jar></ui-water-jar>',
    });
    expect(root).toEqualLightHtml(`
      <ui-water-jar></ui-water-jar>
    `);
  });
});
