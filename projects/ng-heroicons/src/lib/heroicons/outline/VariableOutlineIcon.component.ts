import { Component } from '@angular/core';

import { BaseOutlineIconComponent } from '../../../components/base-outline-icon.component';

@Component({
  selector: 'variable-outline-icon',
  template: `<svg [style]="style" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.871 4A17.926 17.926 0 0 0 3 12c0 2.874.673 5.59 1.871 8m14.13 0a17.926 17.926 0 0 0 1.87-8c0-2.874-.673-5.59-1.87-8M9 9h1.246a1 1 0 0 1 .961.725l1.586 5.55a1 1 0 0 0 .961.725H15m1-7h-.08a2 2 0 0 0-1.519.698L9.6 15.302A2 2 0 0 1 8.08 16H8" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/></svg>`,
})
export class VariableOutlineIconComponent extends BaseOutlineIconComponent { }