# Angular8

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

```
npm run ng g c page/home
npm run ng g c page/about
npm run ng g c page/basic-form
npm run ng g c page/reactive-form

```

```
npm run ng g interface model/adv-form
npm run ng g directive highlight

npm run ng g pipe pipe/trim-credit-card
```

```
npm run ng g service service/login

npm run ng g interface model/login-response

npm run ng g c page/login

npm run ng g c page/pubic-zone
npm run ng g c page/private-zone

npm run ng g module module/user -- --routing
npm run ng g c module/user/user-list
npm run ng g c module/user/user-form

npm run ng g service module/user/user
npm run ng g interface module/user/model/user

npm run ng g enum model/mode
```

```
npm run ng g guard guard/auth
npm run ng g guard guard/login

npm run ng build -- --prod

npm install @ngx-translate/core --save
npm install @ngx-translate/http-loader --save

npm install @ngxs/store --save
npm install @ngxs/cli -g

ngxs --name counter --spec false --directory src/app/store

npm install @ngxs/logger-plugin --save
```