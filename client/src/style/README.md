# CSS File Structure:

## Why we do it?

So that when a class that is used in a lot of different vue file is changed, we knows where to change it and it looks
cleaner than cluttering a lot of class in home.vue <br/>

main.css is the main css file for styling, it uses import for other class

- Base
  Base is for manipulating base class e.g. p, div root etc
- Layout
  Layout is for manipulating a class/id that defines the layout
- Override
  Override is for classes that override existing class, in this case bootstrap class, e.g. card-header class
