import { Routes } from '@angular/router';

import { HomePageComponent } from './home-page.component';
import { ResumePageComponent } from './resume-page.component';

export const routes: Routes = [
	{ path: '', component: HomePageComponent },
	{ path: 'resume', component: ResumePageComponent },
	{ path: '**', redirectTo: '' }
];
