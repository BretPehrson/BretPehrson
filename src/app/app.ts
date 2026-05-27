import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { currentYear } from './current-year';
import { profileLinks, siteTitle } from './site-content';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = siteTitle;
  protected readonly profileLinks = profileLinks;
  protected readonly currentYear = currentYear;
}
