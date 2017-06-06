# jquery-input-label
A simple plugin that fetches the assosiated label of an input, and vice versa.

```
$('#your-input').inputLabel(); // returns a jquery object of the label assosiated with this input/select/textarea;
$('#your-label').inputLabel(); // returns a jquery object of the input/select/textarea assosiated with this label;
```

This plugin assumes correct HTML markup, meaning labels either need to have a `for` attribute defined, or have their inputs be their children.
