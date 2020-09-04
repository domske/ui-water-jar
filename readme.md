# Water Jar

[![Version][version]][package]

A lightweight water jar progress web component.
It's easy to use anywhere you want. For example in Angular, React, Vue, Ionic or vanilla HTML/JS etc.

![](img/demo-1.gif)

### [Demo][demos]

## Features

- Responsive size. Fits the parent in width and height.
- Custom colors and different shapes.
- Vector based (SVG)
- Smooth animation / transitions.
- Use it as a water jar, battery indicator, or wine bottle, etc.

## Getting Started

Either via [NPM][package]:

```bash
npm i ui-water-jar
```

```ts
import 'ui-water-jar';
```

or CDN:

```html
<script type="module" src="https://unpkg.com/ui-water-jar@latest/dist/ui-water-jar/ui-water-jar.esm.js"></script>
<script nomodule="" src="https://unpkg.com/ui-water-jar@latest/dist/ui-water-jar/ui-water-jar.js"></script>
```

## Usage

[See docs][github-docs]

Some examples:

```html
<ui-water-jar value="67"></ui-water-jar>

<ui-water-jar value="42" color="#c0392b" shape="rect"></ui-water-jar>
```

See [demo][demos] page for style ideas.

### Angular

Angular must be configured to allow custom elements.

**app.module.ts**

```ts
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  /* ... */
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
```

**main.ts**

```ts
import { defineCustomElements } from 'ui-water-jar/loader';
/* ... */
defineCustomElements();
```

### Other

Search the web for "how to use web components in your framework".

## License

(C) Copyright 2020 Domink Geng - [MIT](LICENSE) [GitHub][github]

<!-- Links -->

[version]: https://img.shields.io/npm/v/ui-water-jar.svg?style=flat-square
[package]: https://www.npmjs.com/package/ui-water-jar
[demos]: https://domske.github.io/ui-water-jar-demo/
[github]: https://github.com/domske/ui-water-jar
[github-docs]: https://github.com/domske/ui-water-jar/tree/master/src/components/water-jar
