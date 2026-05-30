import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { education, experience, skillGroups } from './site-content';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  templateUrl: './resume-page.component.html',
  styleUrl: './resume-page.component.css'
})
export class ResumePageComponent {
  protected readonly experience = experience;
  protected readonly skillGroups = skillGroups;
  protected readonly education = education;
}