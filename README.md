# BretPehrson

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.12.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Deploying To GitHub Pages

This repository includes a GitHub Actions workflow at `.github/workflows/deploy-pages.yml`.

On every push to `main`, GitHub will:

1. Install dependencies.
2. Run `npm run build:pages`.
3. Deploy the generated site to GitHub Pages.

Treat folders this way:

- `public/` is your source assets (resume files, favicons, CNAME).
- `docs/` is generated build output used by the workflow artifact.

### One-Time Setup In GitHub

1. Open repo Settings -> Pages.
2. Under Build and deployment, set Source to GitHub Actions.
3. Push to `main` (or run the workflow manually from the Actions tab).

### Update Flow

1. Replace files in `public/`.
2. Commit and push.
3. Wait for the Deploy To GitHub Pages workflow to finish.

Notes:

- Keep resume filenames in `public/` aligned with links in `src/app/resume-page.component.html`.
- You no longer need to run `npm run build:pages` locally just to deploy.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
