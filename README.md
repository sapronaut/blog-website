# blog website
made this website to just post my own write-ups and link to my major profile, as writing, poetry and music are my most heartfelt hobbies.
its possible i put some kind of research or insights into it later, but it can't be compared to a notes app. 
maybe like the editorial page of my life

stack:
- next.js (app router)
- typescript
- tailwind css
- markdown for posts (gray-matter + remark)


structure:
```
app/
  page.tsx          - profile / about page
  blog/page.tsx      - list of all posts
  blog/[slug]/page.tsx - individual post page
  globals.css        - theme variables and styles
components/
  nav.tsx            - top navigation
  themetoggle.tsx    - dark / light mode toggle
lib/
  posts.ts           - markdown loading and parsing
posts/
  *.md               - blog posts
```
