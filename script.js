//your JS code here. If required.
const textDisplay = document.getElementById('status')
const enterBtn = document.getElementById('enterBtn')

function handleClick (){
	textDisplay.innerHTML = '<h1>Entered Metaverse</h1>'
}

enterBtn.addEventListener('click', handleClick)