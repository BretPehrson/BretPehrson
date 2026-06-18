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
  // Bump this token whenever you replace resume files (date, number, or any unique tag).
  protected readonly resumeAssetVersion = 'v1';
  protected readonly resumeBaseName = 'Bret Pehrson';
  protected readonly docxFileName = `${this.resumeBaseName}.docx`;
  protected readonly pdfFileName = `${this.resumeBaseName}.pdf`;

  private readonly encodedResumeBaseName = encodeURIComponent(this.resumeBaseName);
  protected readonly docxDownloadHref = `/${this.encodedResumeBaseName}.docx?v=${this.resumeAssetVersion}`;
  protected readonly pdfDownloadHref = `/${this.encodedResumeBaseName}.pdf?v=${this.resumeAssetVersion}`;
  protected readonly experience = experience;
  protected readonly skillGroups = skillGroups;
  protected readonly education = education;
}