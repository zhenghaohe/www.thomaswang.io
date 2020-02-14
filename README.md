# Personal website and blog

## Adding blog posts

### Regular Markdown posts

- Use Netlify CMS at [www.thomaswang.io/admin](https://www.thomaswang.io/admin)

  _or_

- Add new `.md` file to `/content/blog`

### MDX posts

- Add new `.mdx` file to `/content/blog`

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
