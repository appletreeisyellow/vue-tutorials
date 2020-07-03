# real-world-vue-js

Code-along tutorial "[Real World Vue.js](https://www.vuemastery.com/courses/real-world-vue-js/real-world-intro)"

To start the local server:
```
cd real-world-vue
npm run serve
```

## TODO:
- [ ] Vim install .vue syntax highlighting
- [ ] Vue router
- [ ] Dynamic routing & history mode
- [ ] Single file vue components
- [ ] Global components
- [ ] Slots
- [ ] API calls with Axios

## Notes:

### Optimizing your Editor

- VS code
- Vetur
  - Syntax highlighting
  - Snippets
  - [Emmet](https://emmet.io/)
- Additional tools
  - Copy Relative Path
  - Integrated terinal: `ctrl + ``
  - Vue VSCode Snippets (search `sarah.drasner`)

### Router

  - Single Page Application (SPA) vs. a tag
    - SPA is faster than a tag because it makes smaller request to only fetch the data that changes, but a tag refetch all the things on the page, including those stay the same.
    - `router-link` uses a tag. Hoever, it will intercept the click event so that the browser doesn't try to reload the page.
    - Generally, use `router-link` for internal link, use 'a tag' for external link.
