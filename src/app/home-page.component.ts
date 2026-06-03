import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import {
  clientProjects,
  email,
  emailHref,
  homeSummary,
  header,
  location,
  years,
  offerings,
  role,
  strengths,
  stack,
} from './site-content';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  protected readonly role = role;
  protected readonly location = location;
  protected readonly email = email;
  protected readonly emailHref = emailHref;
  protected readonly summary = homeSummary;
  protected readonly strengths = strengths;
  protected readonly offerings = offerings;
  protected readonly clientProjects = clientProjects;
  protected readonly header = header;
  protected readonly years = years;
  protected readonly stack = stack;
}
