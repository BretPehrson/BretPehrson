import { ChangeDetectionStrategy, Component } from '@angular/core';

import { education, experience, skillGroups } from './site-content';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './resume-page.component.html',
  styleUrl: './resume-page.component.css'
})
export class ResumePageComponent {
  protected readonly experience = experience;
  protected readonly skillGroups = skillGroups;
  protected readonly education = education;
}