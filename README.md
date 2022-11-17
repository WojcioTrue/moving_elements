# Moving_elements
>Changing position of element(s) when your mouse move. Made this for my portfolio website.<br/>
> Live demo [_here_](https://htmlpreview.github.io/?https://github.com/WojcioTrue/moving_elements/blob/master/index.html).

## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Setup](#setup)
* [Usage](#usage)
* [Project Status](#project-status)


## General Information
- moving element(s) when your mouse move
- can modify speed of x-axis, y-axis, reverse x-asis, reverse y-axis, media query breakpoints
- practicing JavaScript, modifying CSS with JS, better understanding of EventListener, guard clause technique



## Technologies Used
- JavaScript
- HTML
- CSS3
- Gulp


## Features
There are attributes for plugin that you can change.

- **data-me-breakpoint (default value="lg")**<br/>
This attribute accepts six values:<br/>
**all** - for all types of devices<br/>
**sm** - for devices with width resolution >= 576px<br/>
**md** - for devices with width resolution >= 768px<br/>
**lg** - for devices with width resolution >= 992px<br/>
**xl** - for devices with width resolution >= 1200px<br/>
**xxl** - for devices with width resolution >= 1400px
<br/>

	data-me-breakpoint="md"

- **data-me-speed-x (default value=25)**

Speed of movement of element(s) when mouse move in x-axis direction (from left to right and vice versa). Higher value equals faster movement of element(s).
Recommended values for this attribute are between 0 (very slow) to 50 (pretty fast).

	data-me-speed-x="40"


- **data-me-speed-y (default value=25)**

Speed of movement of element(s) when mouse move in y-axis direction (from top to bottom and vice versa). Higher value equals faster movement of element.
Recommended values for this attribute are between 0 (very slow) to 50 (pretty fast).

	data-me-speed-y="40"


- **data-me-reverse-x (default value="0")**

User can reverse x-asis movement of element(s). For example: if you move your cursor to left direction on the screen, and your data-me-reverse-x is set to 1, elements will move to right side, in opposit direction.

	data-me-reverse-x="1"

- **data-me-reverse-y (default value="0")**

User can reverse y-asis movement of element(s). For example: if you move your cursor to top direction of the screen, and your data-me-reverse-y is set to 1, elements will move to bottom side, in opposit direction.

	data-me-reverse-y="1"
	
- **data-me-animation-mobile (if empty, return undefined)**

Animation your webisite will be initiated, if resolution of device is lower than breakpoint resolution you choose in `data-me-breakpoint` attribute. Use `@keyframes` to make your own animation in CSS, and then pass it as class in attribute. 

	data-me-animation-mobile="Your__keyframe__animation"

- **mobile friendly**

## Setup
**How to install**
<br/>
Download 'css' and 'js' folders from 'dist' folder.
Copy them to your website project directory.
Paste css href in `</head>` element 
**e.g.**

    <link rel="stylesheet" href="dist/css/ME_style.css">
Add script before `</body>` tag and initiate
**e.g.**

    <script src ="dist/js/me_background.js.js"></script>

## Usage
After download and adding to your website, you need to choose which element(s) you want to move. Parent Element need to have id `"data__me__containter"`. After that, add to element(s) that you want to move class `"data__me__element"`.


**e.g.**

	<div  id="data__me__containter">
      <div class="data__me__element">
      </div>
    </div>
    
**e.g. with changed default values**

Here element will :
- breakpoint will be set to "md", element(s) will be moved with mouse movement, if resolution of screen >= 768px
- move on x-axis with speed set to 20
- move on y-axis with speed set to 30
- x-axis will be reversed
- y-axis will work normally
- animation `class__mobile` will be triggered if resolution of screen < 768
<br/>

	<div  id="data__me__containter"
	          data-me-breakpoint="md">

	      <div  data-me-speed-x="20" 
	            data-me-speed-y="30" 
	            data-me-reverse-x="1"
	            data-me-reverse-y="0"
	            data-me-animation-mobile="class__mobile"
	      class="data__me__element">
	    </div>
	</div>

## Project Status
Project is: _finished_



