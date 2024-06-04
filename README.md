# Frontend Mentor - Blog preview card solution

This is a solution to the [Blog preview card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/blog-preview-card-ckPaj01IcS). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- See hover and focus states for all interactive elements on the page

### Screenshot

![Screenshot](https://i.imgur.com/VSBdaEE.png)

### Links

- [Solution](https://github.com/JasonRavager/blog-preview-card)
- [Live Site](https://blog-preview-card-flax.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [Node](https://nodejs.org/en) - JS library
- [Tailwind CSS](https://tailwindcss.com/) - Tailwind CSS framework

### What I learned

I learned to make the font-size responsive to window size without using media queries. My knowledge of deploying to Vercel is also reinforced.

I also learned to incorporate multiple variations of font in one font-family.

```css
@font-face {
    font-family: 'Figtree';
    src: url('../../assets/fonts/Figtree-Italic-VariableFont_wght.ttf') format('truetype');
    font-weight: 300 900;
    font-style: italic;
}

@font-face {
    font-family: 'Figtree';
    src: url('../../assets/fonts/Figtree-VariableFont_wght.ttf') format('truetype');
    font-weight: 300 900;
    font-style: normal;
}
```

### Useful resources

- [Font-size Clamp Generator](https://clamp.font-size.app/?config=eyJyb290IjoiMTYiLCJtaW5XaWR0aCI6IjM3NXB4IiwibWF4V2lkdGgiOiIxNDQwcHgiLCJtaW5Gb250U2l6ZSI6IjEycHgiLCJtYXhGb250U2l6ZSI6IjE0cHgifQ%3D%3D) - I used this website to generate the code to make the font-size responsive to window size without using media queries.

## Author

- Frontend Mentor - [@JasonRavager](https://www.frontendmentor.io/profile/JasonRavager)
- Twitter - [@jr_ver1](https://www.twitter.com/yourusername)