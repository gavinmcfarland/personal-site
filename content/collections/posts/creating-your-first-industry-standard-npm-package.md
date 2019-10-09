---
title: Creating Your First Industry Standard NPM Package
tags: project
status: draft
---

Test Recently I set about creating my own preprocessor and I even though I've created several packages before there have been some areas of maintaining and publishing a package that didn't fully understand. [I stumbled across a few things that might help others while not only trying to create a NPM package – but also one that is ready to be used by people.]

In this article I'll cover how to:

- Support code for testing, development and production environments
- Integrate unit testing into your framework
- Support continuous integration testing
- Test your package locally without having to publish your package
- Install packages from Github without publishing them
- How to get the name you want

## Supporting, coding, development and production environments

When you've created a framework you might want to let users override some of the default configuration for your framework. To do this you'll need to provide [I think actually this could be done without a environment variable]

## Unit Testing

You may already be familiar with unit testing, and probably a lot more than me. 

```html
<marko-component>
    # Hello
</marko-component>
```
