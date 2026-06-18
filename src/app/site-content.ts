export type ProfileLink = {
  readonly label: string;
  readonly href: string;
};

export type ExperienceEntry = {
  readonly company: string;
  readonly title: string;
  readonly location: string;
  readonly dates: string;
  readonly headline: string;
  readonly outcome: string;
  readonly bullets: readonly string[];
};

export type SkillGroup = {
  readonly label: string;
  readonly items: readonly string[];
};

export type EducationEntry = {
  readonly school: string;
  readonly credential: string;
  readonly location: string;
  readonly dates: string;
  readonly gpa: string;
};

export type ClientProject = {
  readonly name: string;
  readonly summary: string;
  readonly status: 'Live' | 'In Progress';
  readonly href?: string;
  readonly linkLabel?: string;
  readonly tech: readonly string[];
};

export const siteTitle = 'Bret Pehrson';
export const role = 'Senior .NET Software Developer';
export const location = 'Salt Lake City, UT';
export const email = 'bretpehrson@gmail.com';
export const emailHref = `mailto:${email}?subject=${encodeURIComponent('Software Project Inquiry')}&body=${encodeURIComponent(
  'Hi Bret,\n\nI would like to discuss a software project with you.\n\nThanks,'
)}`;

const careerStartYear = 2008;
const experienceYears = new Date().getFullYear() - careerStartYear;

export const header = 
 `Building modern software solutions with ${experienceYears}+ years of experience across desktop, web, APIs, and cloud technologies. Specializing in Blazor, WPF, .NET Core, and scalable enterprise applications.`;

export const homeSummary =
  'I help teams inherit difficult systems, make them understandable, and move them forward without disrupting the business.';

export const years = `${experienceYears}+ years in enterprise software`;

export const stack =
    'Microsoft stack, Blazor, REST, SQL Server';

export const profileLinks: readonly ProfileLink[] = [
  { label: 'GitHub', href: 'https://www.github.com/bretpehrson' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/bretpehrson/' }
];

export const strengths: readonly string[] = [
  'Deep .NET and Microsoft stack experience',
  'Practical modernization without downtime',
  'Clear communication with technical and non-technical teams'
];

export const offerings: readonly SkillGroup[] = [
  {
    label: 'I can help with',
    items: [
      'Modernizing legacy .NET systems',
      'Designing REST APIs',
      'Stabilizing enterprise applications',
      'SQL Server optimization',
      'Reporting: including SSRS, Telerik reporting and SAP Crystal Reports',
      'Cloud-hosted Blazor applications'
    ]
  },
  {
    label: 'I work best when',
    items: [
      'The codebase is complex',
      'The team needs momentum',
      'You need someone hands-on',
      'Reliability matters more than hype'
    ]
  }
];

export const clientProjects: readonly ClientProject[] = [
  {
    name: 'NE Plumbing Inc',
    summary:
      'Built and maintain a cloud-hosted Blazor web application using .NET and Azure, implementing automated CI/CD deployment through GitHub Actions and delivering a responsive, mobile-friendly experience designed to drive customer engagement and lead generation.',
    status: 'Live',
    href: 'https://www.neplumbinginc.com',
    linkLabel: 'View live site',
    tech: ['Blazor Server App', 'Azure Cloud Hosting', 'Github Actions for CI/CD']
  },
  {
    name: 'TLE Studio by Tonya Earl',
    summary:
      'Built and maintain a cloud-hosted Blazor application in Azure with custom authentication workflows, Cloudflare Turnstile bot protection, email-based account verification, appointment scheduling, and administrative tools for user, calendar, and booking management.',
    status: 'In Progress',
    href: 'https://tlestudio-b3hrdnhcfqa2c4b0.canadacentral-01.azurewebsites.net',
    linkLabel: 'View live site',
    tech: ['User management', 'Booking flow', 'Administrative tools']
  }
];

export const experience: readonly ExperienceEntry[] = [
  {
    company: 'University of Utah - UIT, Northstar Team',
    title: 'Software Developer IV (Senior Level)',
    location: 'Salt Lake City, UT',
    dates: '02/2021 - 06/2026',
    headline:
      'Modernizing a legacy WPF/WCF enterprise platform into a Blazor and REST-based web architecture.',
    outcome:
      'Keeping production stable while incrementally moving the system toward a maintainable web-first future.',
    bullets: [
      'Member of a small four-person team responsible for a large monolithic WPF and WCF enterprise system with no formal documentation, learning the platform from the inside out and driving improvements independently.',
      'Leading modernization of the legacy desktop platform by incrementally migrating to a Blazor web application with a REST API layer, OAuth 2.0 security, Entity Framework ORM, and Docker-based hosting.',
      'Architect and hands-on implementer of the new API layer replacing WCF backend services while maintaining backward compatibility for legacy clients.',
      'Own and maintain a complex IIS-hosted ASP.NET MVC application that supports the existing backend across Windows Server environments.',
      'Perform SQL Server performance analysis, query optimization, and schema navigation to keep enterprise data operations stable.'
    ]
  },
  {
    company: 'Utah Higher Education Assistance Authority (UHEAA)',
    title: 'Software Developer II',
    location: 'Salt Lake City, UT',
    dates: '10/2008 - 12/2020',
    headline:
      'Built internal systems that improved tracking, deployment, batch processing, and support visibility across the organization.',
    outcome: 'Delivered tools that reduced operational friction and gave teams better control over daily work.',
    bullets: [
      'Designed and built a company-wide ticketing system to create, update, and maintain change records across organizational processes.',
      'Engineered scalable backend processing systems supporting over 1 million student loans per month, with a focus on performance optimization, reliability, and efficient resource utilization.',
      'Built a high-volume batch letter processing system using lazy-loading to ensure reliable output across large print runs.',
      'Designed centralized error handling infrastructure for departmental scripts, including logging, alerting, and historical reporting.',
      'Worked directly with department managers to design, build, and maintain mission-critical internal applications.',
      'Trained new developers on best practices, modern coding standards, and object-oriented design principles.'
    ]
  }
];

export const skillGroups: readonly SkillGroup[] = [
  {
    label: 'Languages & Frameworks',
    items: ['C#', '.NET Framework 4.x', '.NET 6+', 'ASP.NET MVC', 'ASP.NET Core', 'Blazor', 'WCF', 'WPF', 'VB.NET', 'JavaScript', 'T-SQL']
  },
  {
    label: 'Data & Reporting',
    items: ['SQL Server', 'Entity Framework', 'Stored Procedures', 'SSRS', 'SAP Crystal Reports']
  },
  {
    label: 'Security & APIs',
    items: ['OAuth 2.0', 'JWT', 'REST API Design', 'HTTPS/TLS', 'CSRF/Cookie Policy', 'ASP.NET Core Identity', 'Windows Authentication']
  },
  {
    label: 'Infrastructure & Tools',
    items: ['IIS 10', 'Windows Server', 'Docker', 'Visual Studio 2022', 'GitHub', 'SVN', 'JSON']
  }
];

export const education: readonly EducationEntry[] = [
  {
    school: 'Neumont University',
    credential: 'B.S. Computer Science',
    location: 'Salt Lake City, UT',
    dates: '01/2007 - 09/2008',
    gpa: 'GPA: 3.1'
  },
  {
    school: 'Utah Valley University',
    credential: 'A.A.S. Mathematics Education',
    location: 'Orem, UT',
    dates: '03/2004 - 12/2006',
    gpa: 'GPA: 3.2'
  }
];