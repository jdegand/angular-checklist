import { Component, inject } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

@Component({
  standalone: true,
  selector: 'ac-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
  imports: [FontAwesomeModule]
})
export class BannerComponent {
  library = inject(FaIconLibrary);

  constructor() {
    this.library.addIcons(faCircleInfo);
  }
}
