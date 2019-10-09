limitlessloop.com
==================================

Personal site of Gavin McFarland

The site uses [Marko](https://markojs.com/) for the frontend framework and [jdown](https://github.com/DanWebb/jdown) to generate an object/api from markdown files for the content.

It's published using [Now](https://zeit.co/) for convenience as a serverless function. The now configuration could probably be simplified a lot. It was made from the [marko-webpack](https://github.com/marko-js-samples/marko-webpack) repo.

It's still a work in progress and likely has some remaining issues that need to be fixed or updated, most notably the style framework it's using is still a work in progress and currently pointing to my local machine for development purposes. You can just rip this out and use your own styles for now.

## Developing

To develop

```bash
npm run dev
```

For now you'll need to restart the server to see any new content until I can figure out a way to detect the changes and refresh the browser.

To view the content via an api

```bash
npm run api
```

To publish to now

```bash
now
```
