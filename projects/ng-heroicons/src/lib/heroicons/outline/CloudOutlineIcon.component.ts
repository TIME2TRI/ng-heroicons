import { Component } from '@angular/core';

import { BaseOutlineIconComponent } from '../../../components/base-outline-icon.component';

@Component({
  selector: 'cloud-outline-icon',
  template: `<svg [style]="style" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 15a4 4 0 0 0 4 4h9a5 5 0 1 0-.1-9.999 5.002 5.002 0 1 0-9.78 2.096A4.001 4.001 0 0 0 3 15z" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/></svg>`,
})
export class CloudOutlineIconComponent extends BaseOutlineIconComponent { }