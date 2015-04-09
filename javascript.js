var currentImg = 0;
var maxImgs = 4;
var timeOutId;


/*build autorotation for every 3.5 seconds */
function showNext() {
	if (currentImg  < maxImgs){
		return currentImg++
	} else {
		return currentImg = 0;
	};

}

function autoRotateImg(currentImg){

	var paneLeft = document.getElementById("panes");
	

	switch (currentImg) {


	case 1:
	paneLeft.style.left = "-100%";
	break;

	case 2:
	paneLeft.style.left = "-200%";
	break;

	case 3:
	paneLeft.style.left = "-300%";
	break;

	case 4:
	paneLeft.style.left = "-400%";
	break;

	default:
	paneLeft.style.left = "0";

	};
};


function autoRotate() {
	showNext();
	autoRotateImg();
	timeOutId = window.setTimeout(autoRotate, 3000);

};

function PromptTest(){
	alert("I worked!");
};



/* rotate image to before (left arrow) */


/*rotate image to next img (right arrow) */


/*match up buttons with img in array */

