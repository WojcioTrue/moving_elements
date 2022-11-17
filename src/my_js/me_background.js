'use strict'

function moveElement(){
	// breakpoints for different resolutions
	const breakPoints = {
		all: 1,
		sm: 576,
		md: 768,
		lg: 992,
		xl: 1200,
		xxl: 1400
	}

	// parent element
	const elementContainer = document.getElementById('data__me__containter');
	// children element(s) to move
	const elementToMove = document.querySelectorAll('.data__me__element');
	// read media query breakpoints from parent element
	const breakPointsKey = elementContainer.dataset.meBreakpoint;

	const responsiveBreakPoint = breakPoints[breakPointsKey.toLowerCase()] || breakPoints["lg"];
	function initiateMove(){
	//get middle of X,Y axis 

	const middleXaxisParent = elementContainer.offsetWidth;
	const middleYaxisParent = elementContainer.offsetHeight;

	elementContainer.addEventListener('mousemove', (e) => {

		// values are divided for making animation slower
		for(let element of elementToMove){
			//default speed for elements
			const accX = (element.dataset.meSpeedX || 25) / 20;
			const accY = (element.dataset.meSpeedY || 25) / 20;
			
			// difference in mouse positions
			let positionX = Math.floor((e.clientX - middleXaxisParent) /30);
			let positionY = Math.floor((e.clientY - middleYaxisParent) /30);
			positionX *= Math.abs(accX);
			positionY *= Math.abs(accY);

			let reverseBooleanX = 
			element.dataset.meReverseX == 1 ? (positionX * -1) : positionX;

			let reverseBooleanY = 
			element.dataset.meReverseY == 1 ? (positionY * -1) : positionY;
			
			element.style.transform = `translate(${reverseBooleanX}px,${reverseBooleanY}px)`;
			}
		})
	}


	// making Media Query Breakpoint for initiateMove
	if(window.innerWidth >= responsiveBreakPoint){
		initiateMove();
	} else {
	// add animation if Media Query Breakpoint isn't achieved
		for(let element of elementToMove){
			const classToMobile = element.dataset.meAnimationMobile || undefined;
			// guard clause
			if(!classToMobile){
				return;
			} else {
				element.classList.add(classToMobile);
			}
		}
	}
}




moveElement();


