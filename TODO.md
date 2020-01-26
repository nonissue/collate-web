# TODO

## CSS

- [~] Figure out vendor prefixes / if they are necessary?
  - Nevermind, handled by next outta the box.
- [ ] Media queries?

## Next.js

- [ ] Figure out when I have to build vs just deploying?
- [ ] figure out 404 errors https://stackoverflow.com/questions/55887316/next-js-404-error-for-all-preloaded-links
  - Copied this style: https://github.com/zeit/next-learn-demo/blob/master/4-clean-urls/pages/post.js
  - Ahh, i think that fixed it. Still get a preload warning, but nothing major.
  - and we can conditionally render the songs list in index.js.
  - Had to handle direct visits with [id].js, but seems to be working
- [ ] figure out case sensitivity and routing (maybe using now.json?)
  - https://spectrum.chat/zeit/now/defining-next-js-route-rewrites-in-now-json~5e7c14aa-752a-45c3-a744-89721ecf7ceb
  - https://github.com/zeit/next.js/tree/canary/examples/blog-starter

## Interesting

- [ ] https://github.com/zeit/next.js/blob/canary/examples/with-xstate/pages/index.js
