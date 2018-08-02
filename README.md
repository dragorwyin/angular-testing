# AngularTesting

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Production dockerizing

To dockerize production, use `docker-compose build` and `docker-compose up` commands.

## Add Translations

To add translations, you need to add languages with following steps:

### Add language to ```package.json```

Append language as "next_language" to ```extract_langs``` script:

```json
"extract-langs": "ng xi18n --output-path i18n --i18n-locale en && xliffmerge --profile xliffmerge.json en pl de next_language",
```

Add another scripts with new language:

```json
  "start-next_language": "ng serve --configuration=next_language --poll=2000 --open"
```

### Add new language to ```angular.json``` (AOT)

```json
{
  "...": "...",
  "configurations": {
    "...": "...",
    "next_language": {
      "aot": true,
      "outputPath": "dist/angular-testing-next_language",
      "i18nFile": "src/i18n/messages.next_language.xlf",
      "i18nFormat": "xlf",
      "i18nLocale": "next_language"
    }
  },
  "...": "...",
  "serve": {
    "...": "...",
    "next_language": {
      "browserTarget": "angular-testing:build:next_language"
    }
  }
}

```

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
Use `ng build --configuration staging` command for a staging build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
To run, declare environment variable by using `env CHROME_BIN = /usr/bin/chromium`.

## Translating

To merge translations to different languages, use npm run translate-{lang}.

That concept was realised with [xliffmerge article by martinroob](https://github.com/martinroob/ngx-i18nsupport/wiki/Tutorial-for-using-xliffmerge-with-angular-cli).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Project structure

Project structure can be found in following link: [Angular 5 Structure Multiple Modules](https://www.technouz.com/4644/angular-5-app-structure-multiple-modules/)

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
