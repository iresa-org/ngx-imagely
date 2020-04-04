<p align="center">
 <img width="20%" height="20%" src="./logo.svg">
</p>

<br />

[![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg?style=flat-square)]()
[![commitizen](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)]()
[![PRs](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)]()
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![All Contributors](https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square)](#contributors-)
[![ngneat](https://img.shields.io/badge/@-ngneat-383636?style=flat-square&labelColor=8f68d4)](https://github.com/ngneat/)
[![spectator](https://img.shields.io/badge/tested%20with-spectator-2196F3.svg?style=flat-square)]()

> Image utilities for modern Angular app

An image rendering directive for Angular 2+ app

## Features

- ✅ Image Lazy Loading 
- ✅ Remind developers of missing alt tag
- ✅ Fallback image

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Properties](#properties)

## Installation

### NPM

Install `ngx-imagely` via
`npm install @iresa/ngx-imagely --save-dev`

Once installed, import `NgxImagelyModule` to modules that use this image directive
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
export class YourAppModule {
}
```

## Usage

Apply `imagely` directive directly to html's `<img>` tag

```html
<img
  imagely
  src="https://material.angular.io/assets/img/examples/shiba2.jpg"
  alt="Photo of a Shiba Inu"
  height="280"
  width="350"
  loadingType="eager"
/>
```

## Properties

Property | Descriptions
------------ | -------------
loadingType | Loading Type for target images. Values: 'lazy' | 'eager'. Default value: 'lazy'

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
