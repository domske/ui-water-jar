import { Component, Prop, h, ComponentInterface, Host } from '@stencil/core';
import { clamp } from '../../utils/math';

@Component({
  tag: 'ui-water-jar',
  styleUrl: 'water-jar.scss',
  shadow: true,
})
export class WaterJarComponent implements ComponentInterface {
  @Prop() value = 0;
  @Prop() color = '#488aff';
  @Prop() shape = 'circle';

  private getValidShape(): string {
    switch (this.shape) {
      default:
      case 'circle':
      case 'round':
        return 'circle';
      case 'rect':
      case 'square':
        return 'rect';
    }
  }

  render() {
    const value = clamp(this.value, 0, 100);
    const color = this.color;
    const shape = this.getValidShape();

    return (
      <Host>
        <svg viewBox="0 0 100 100" width="100%" height="100%">
          <defs>
            <mask id="mask-circle">
              <circle fill="white" r="50" cx="50" cy="50"></circle>
            </mask>
            <mask id="mask-rect">
              <rect fill="white" x="0" y="0" width="100" height="100"></rect>
            </mask>
            <symbol id="water">
              <path d="M200,109.992l-200,0.008l0,-110.016c16.668,0.001 33.334,5.016 50,5.016c16.666,0 33.333,-5.015 50,-5.016c16.668,0.001 33.334,5.016 50,5.016c16.665,0 33.333,-5.015 50,-5.016l0,110.008Z" />
            </symbol>
          </defs>
          <g mask={'url(#mask-' + shape + ')'}>
            <rect fill="gray" fill-opacity="0.1" x="0" y="0" width="100" height="100"></rect>
            <g class="water" transform={'translate(0,' + (100 - value * 1.05) + ')'}>
              <use href="#water" fill={color} fill-opacity="0.5" width="200" height="110">
                <animate attributeType="XML" attributeName="x" from="0" to="-100" dur="1.4s" repeatCount="indefinite" />
              </use>
              <use href="#water" fill={color} width="200" height="110">
                <animate attributeType="XML" attributeName="x" from="-100" to="0" dur="0.7s" repeatCount="indefinite" />
              </use>
            </g>
          </g>
        </svg>
      </Host>
    );
  }
}
