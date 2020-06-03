# Personal website and blog

[![Netlify Status](https://api.netlify.com/api/v1/badges/f6d8b19d-7c68-4227-8cfe-e3af7818076e/deploy-status)](https://app.netlify.com/sites/thomaswang/deploys)

## Stats

[Firebase Cloud Functions](https://github.com/thomaswang/stats) used to enable [personal stats](https://www.thomaswang.io/about/):

## Blog posts

### Regular Markdown posts (deprecated)

- Use Netlify CMS at [www.thomaswang.io/admin](https://www.thomaswang.io/admin)

  _or_

- Add new directory and `index.md` file to `/content/blog`

### MDX posts

- Add new directory and `index.mdx` file to `/content/blog`

If you need to add a live, user-editable React component, use [React Live Playground](https://github.com/thomaswang/react-live-playground).

```jsx
import ReactLivePlayground from "react-live-playground"
import dracula from "prism-react-renderer/themes/dracula"

export const code = `[CODE]`.trim()

<ReactLivePlayground
  code={code}
  theme={dracula}
  className="react-live-playground"
/>
```

**To support consistency and the "Edit on GitHub" feature, all posts will be in `mdx`**
