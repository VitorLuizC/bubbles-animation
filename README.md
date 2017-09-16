# Bubbles Animation

Simple `<canvas>` bubbles animation.

See this [demo][1].

## Getting Started

- Install from NPM;

```shell
npm install --save-dev bubbles-animation
```

- On your page's script just use the animate function passing a `<canvas />`
  element or a selector to get it.

```js
import animate from 'bubbles-animation';

animate(document.querySelector('canvas'), {
  quantity: 1, // {Range} define quantity bubbles generated on each tick animation.

  interval: 3, // {number} Interval to tick animation. Skip this frame to generate bubbles.

  size: [5, 50], // {Range} define bubbles size.

  color: { // { A: Range, G: Range, B: Range, A: Range } Define bubbles color.
    R: 0,
    G: [125, 255],
    B: [125, 255],
    A: .65
  }
});
```

## Changelog

Detailed changes for each release are documented in the [release notes][0].

[0]: https://github.com/VitorLuizC/bubbles-animation/releases
[1]: https://codepen.io/VitorLuizC/pen/EwVPeP
