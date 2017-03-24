# assets

> These are to be shared across `elements` and or `components`.

`styles/` is an exposed theme file for global styling.

 Types you could import into `styles.scss`:
* `_mixins.scss`
* `_functions.scss`
* `_colors.scss`

Don't import:
* `*.scss` from a component and or container.

`Images/` is a directory that has all image assets

An image can be any of these types:
* `*.png`
* `*.jpg`

Don't import:
* `! png || ! jpg` -> unavailable webpack loader.
