import { Component } from '@angular/core';

import { BaseSolidIconComponent } from '../../../components/base-solid-icon.component';

@Component({
  selector: 'sort-ascending-solid-icon',
  template: `<svg [style]="style" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 3a1 1 0 0 0 0 2h11a1 1 0 1 0 0-2H3zM3 7a1 1 0 0 0 0 2h5a1 1 0 0 0 0-2H3zM3 11a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2H3zM13 16a1 1 0 1 0 2 0v-5.586l1.293 1.293a1 1 0 0 0 1.414-1.414l-3-3a1 1 0 0 0-1.414 0l-3 3a1 1 0 1 0 1.414 1.414L13 10.414V16z" fill="currentColor"/></svg>`,
})
export class SortAscendingSolidIconComponent extends BaseSolidIconComponent { }