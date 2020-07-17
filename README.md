# real-world-vue-js

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

Code-along tutorial "[Real World Vue.js](https://www.vuemastery.com/courses/real-world-vue-js/real-world-intro)"

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

Code-along tutorial "[Vue Router for Everyone](https://vueschool.io/courses/vue-router-for-everyone)"

  - Single Page Application (SPA) vs. a tag
    - SPA is faster than a tag because it makes smaller request to only fetch the data that changes, but a tag refetch all the things on the page, including those stay the same.
    - `router-link` uses a tag. Hoever, it will intercept the click event so that the browser doesn't try to reload the page.
    - Generally, use `router-link` for internal link, use 'a tag' for external link.
  - Lazy load
    - Lazy load the routes with webpack's code splitting feature
    - Just load js files when the page needs the code to save time to land on a page.
    - Magic comment `/* webpackChunkName: "..." */` gives the lazy loaded file a name
    - Learn more on lazy loading at "[Load Vue Components Asynchronously](https://vueschool.io/lessons/dynamically-load-components)"
  - Dynamic router
    - Why change the URL doesn't update the component on the page?
      - This is because Vue Router doesn't notice any change if the same component is being used. We need the component to be reloaded with the new data.
      - To solve this problem, add a key in `router-view` in `App.vue`, like this
      ```
      <router-view :key="$route.path"/>
      ```
  - Vue Router
    - How to remove the "#" in the URL?
      - By turning on the `history` mode in router.
      - Check `index.js` file.
