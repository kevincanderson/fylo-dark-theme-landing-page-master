# Frontend Mentor - Fylo dark theme landing page solution

This is a solution to the [Fylo dark theme landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/fylo-dark-theme-landing-page-5ca5f2d21e82137ec91a50fd). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it.

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

I learned how to use SVGs with more complex styling and did more with Flex and Grid to play with layouts. I actually ended up restarted this project to clean up class names and HTML layouts.

To see how you can add code snippets, see below:

```html
<form class="sign-up" action="">
	<input
		type="email"
		placeholder="email@example.com"
		class="access-input"
		id="email"
	/>
	<span id="invalid-email">Error, please check your email</span>
	<button class="btn access-btn">Get Started For Free</button>
</form>
```

```css
.productive-link:hover {
	color: var(--white);
	border-bottom-color: var(--white);
	fill: currentColor;
}

.productive-link:hover > svg use {
	fill: white;
}

.productive-link > svg {
	vertical-align: middle;
}

.arrow {
	height: 0.75rem;
	width: 0.75rem;
}

.arrow-fill:hover {
	fill: white;
}
```

```js
function myFunction() {
	const email = document.getElementById("email");

	email.addEventListener("keyup", function (event) {
		isValidEmail = email.checkValidity();
		console.log(isValidEmail);

		if (isValidEmail) {
			document.getElementById("invalid-email").style.visibility = "hidden";
		} else {
			document.getElementById("invalid-email").style.visibility = "visible";
		}
	});
}

myFunction();
```

### Continued development

I want to continue to simplify my HTML layouts and class names so my CSS gets easier to navigate and style.

### Useful resources

- [SVG CSS Color](https://css-tricks.com/change-color-of-svg-on-hover/) - This helped me to learn to color SVGs on Hover. Tip: Use SVG instead of IMG.
- [CheckValidity](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/checkValidity) - This assisted me with my validation errors.

## Author

- Website - [Add your name here](https://www.kevincanderson.dev)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/lemonstain)

## Acknowledgments

Thanks to the FrontendMentor Slack group who gave me guidance where needed.
