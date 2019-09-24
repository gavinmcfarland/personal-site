---
title: Another Post
tags: project
---

# Something Else

Aliquam eu feugiat sem. Mauris mollis condimentum est, at vestibulum ipsum ultricies et. Aenean gravida, dolor sit amet laoreet gravida, sapien neque consequat turpis, et convallis sapien neque sit amet dui. Fusce interdum, sem quis volutpat gravida, nulla magna semper dolor, non venenatis lorem lectus eu ligula. Vivamus non mattis turpis. Etiam ligula tellus, vestibulum in velit quis, dapibus dictum elit. Aenean vel elementum dui. Vivamus dapibus convallis rutrum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.

```html
<Section>
    <h2.f-5>Articles</h2>
    <ul.f-4.links>
        <for|post, index| of=input.posts>
            <li>
                <a href=post.url.replace(/^posts/g, "")>${post.title}</a>
            </li>
        </for>
    </ul>
</Section>
```