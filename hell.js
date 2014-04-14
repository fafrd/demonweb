var temp = 0;

function changeImg()
{
	var imag = document.getElementsByTagName('img');
	if((imag.length) == temp)
		return;
	for(var i=temp;i<imag.length;i++)
	{
		//imag[i].removeAttribute('height');
		temp = i;
		switch(Math.floor(Math.random()*10)+1)
		{
			case 1:
				imag[i].setAttribute('src',(chrome.extension.getURL("resources/pentagram1.gif")));
				break;
			case 2:
				imag[i].setAttribute('src',(chrome.extension.getURL("resources/pentagram2.gif")));
				break;
			case 3:
				imag[i].setAttribute('src',(chrome.extension.getURL("resources/pentagram3.gif")));
				break;
			case 4:
				imag[i].setAttribute('src',(chrome.extension.getURL("resources/pentagram4.gif")));
				break;
			case 5:
				imag[i].setAttribute('src',(chrome.extension.getURL("resources/pentagram5.jpg")));
				break;
			case 6:
				imag[i].setAttribute('src',(chrome.extension.getURL("resources/blood.jpg")));
				break;
			case 7:
				imag[i].setAttribute('src',(chrome.extension.getURL("resources/hades.gif")));
				break;
			case 8:
				imag[i].setAttribute('src',(chrome.extension.getURL("resources/burning.gif")));
				break;
			case 9:
				imag[i].setAttribute('src',(chrome.extension.getURL("resources/fire.gif")));
				break;
			case 10:
				imag[i].setAttribute('src',(chrome.extension.getURL("resources/666.gif")));
				break;
		}
	}

}
changeImg();
setInterval(changeImg, 750);