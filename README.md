# NGX-IMAGELY


[![npm version](https://badge.fury.io/js/%40iresa%2Fngx-imagely.svg)](https://badge.fury.io/js/%40iresa%2Fngx-imagely)
[![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg?style=flat-square)]()
[![commitizen](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)]()
[![PRs](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)]()
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)

> Image utilities for modern Angular app

An image rendering directive for Angular 2+ app. Demo: https://iresa-org.github.io/ngx-imagely

## Features

- ✅ Image Lazy Loading 
- ✅ Remind developers of missing alt tag
- ✅ Retry & Fallback images

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Properties](#properties)
- [Contributors](#contributors-)

## Installation

From your project folder, run `ng add @iresa/ngx-imagely`

This command will import `NgxImagelyModule.forRoot()` into your `AppModule`:

```ts
import { NgxImagelyModule } from '@iresa/ngx-imagely';
 
@NgModule({
  ...
  imports: [
    ...
    
    // NgxImagelyModule
    NgxImagelyModule.forRoot(), 
    ...
  ],
  ...
})
export class AppModule {}
```

Or register `NgxImagelyModule` to a feature module with following code:
```ts
import { NgxImagelyModule } from '@iresa/ngx-imagely';
 
@NgModule({
  ...
  imports: [
    ...
    
    // NgxImagelyModule
    NgxImagelyModule, 
    ...
  ],
  ...
})
export class FeatureModule {}
```

## Usage

### Loading Type (`Lazy` or `Eager`)

```html
<img
  src="https://material.angular.io/assets/img/examples/shiba2.jpg"
  alt="Photo of a Shiba Inu"
  height="280"
  width="350"
  loadingType="eager"     //loadingType="lazy"
/>
```
### Fallback image

```html
<img
  src="https://noimage.com" 
  alt="Url not found. Use default" 
  height="350" 
  width="350"
  default="https://www.amulyamica.com/files/noimage.jpg"
/>
```

You can also provide these configurations above at root level

```ts
import { NgxImagelyModule } from '@iresa/ngx-imagely';
 
@NgModule({
  ...
  imports: [
    ...
    
    // NgxImagelyModule
    NgxImagelyModule.forRoot({
      default: 'https://www.amulyamica.com/files/noimage.jpg',
      loadingType: 'eager'
    }), 
    ...
  ],
  ...
})
export class AppModule {}
```


## Properties

Property     | Type   | Descriptions
------------ | -------| -------------
default      | Input  | URL of a fallback image when failure occurs
loadingType  | Input  | Loading type for target images. Values: 'lazy' \| 'eager'. Default value: 'lazy'

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/kxbui"><img src="https://avatars2.githubusercontent.com/u/5092371?v=4" width="100px;" alt=""/><br /><sub><b>Khoi Bui</b></sub></a><br /><a href="https://github.com/@iresa/ngx-imagely/commits?author=kxbui" title="Code">💻</a>  <a href="#design-kxbui" title="Design">🎨</a> <a href="https://github.com/@iresa/ngx-imagely/commits?author=kxbui" title="Documentation">📖</a> <a href="#ideas-kxbui" title="Ideas, Planning, & Feedback">🤔</a> <a href="#projectManagement-kxbui" title="Project Management">📆</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

This project uses schematics from [@ngneat/lib](https://github.com/ngneat/lib) to generate boilerplate used for open source library. 
