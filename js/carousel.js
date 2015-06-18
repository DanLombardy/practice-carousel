(function () {
	var currentImg = -1;
var timeOutId;
var imgPane = document.getElementById("panes");
var imgList = imgPane.getElementsByTagName("li");
var maxImgs = imgList.length -1;


/*build autorotation for every 5 seconds */
function showNext() {
	if (currentImg  < maxImgs){
		return currentImg++
	} else {
		return currentImg = 0;
	};

};


/*provide pane sliding mechanism for button press or autoupdate*/
function paneSlide(){
	switch (currentImg) {


	case 1:
	imgPane.style.left = "-100%";
	break;

	case 2:
	imgPane.style.left = "-200%";
	break;

	case 3:
	imgPane.style.left = "-300%";
	break;

	case 4:
	imgPane.style.left = "-400%";
	break;

	default:
	imgPane.style.left = "0";

	};
};


function autoRotate() {
	timeOutId = window.setTimeout(autoRotate, 5000);
	showNext();
	paneSlide();
	
};

/* rotate image to before (left arrow) */

function moveImgBack(){
	if (currentImg == 0){
		 currentImg = imgList.length -1;
	}else {
		currentImg--;
	};

	paneSlide();
	
};


/*rotate image to next img (right arrow) */
function moveImgFwd(){
	if (currentImg == (imgList.length -1 )){
		 currentImg = 0;
	}else{
		 currentImg++;
	};

	paneSlide();

};
window.autoRotate = autoRotate;
window.moveImgFwd = moveImgFwd;
window.moveImgBack = moveImgBack;

})();

