# Accessible transcript experiment

This experiment shows how to write a bare minimal HTML/CSS with proper transcript navigation.

[Try out this experiment](https://compulim.github.io/experiment-accessible-transcript)

## Investigation: aria-labelledby

(Need investigation)

It seems HTML elements referenced by `aria-labelledby` will be "flattened".

For example:

```html
<div aria-labelledby="id-1">
  <div id="id-1">
    Here is <a href="https://wikipedia.org/">an article</a> to Wikipepdia.
  </div>
</div>
```

If the screen reader is reading the label for this element, such as, through `aria-activedescendant`. The screen reader will flatten the label as "Here is an article to Wikipedia.", instead of "Here is, link, an article to Wikipedia."

The "link" accessible name is not narrated in this case.
