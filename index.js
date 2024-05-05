const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')


//canvas.width = 1024
//canvas.height = 576
canvas.height = 1080
canvas.width = 1920


const collisionsMap = []
for (let i = 0; i < collisions.length; i += 70) {
	collisionsMap.push(collisions.slice(i, 70 + i))
}

const assetsMap = []
for (let i = 0; i < assetsData.length; i += 70) {
	assetsMap.push(assetsData.slice(i, 70 + i))
}


const boundaries = []

const square = {
	i:  16,
	ii: 32,
	iii: 48
}

const offset = {
	x: - (square.iii * 36) + canvas.width /2 + square.iii /2,
	y: - (square.iii * 21) + canvas.height /2 + square.iii /2

}

console.log(offset)

collisionsMap.forEach((row, i) => {
	row.forEach((symbol, j) => {
		if (symbol === 7704)
		boundaries.push(new Boundary({position:{
			x: j * Boundary.width + offset.x,
			y: i * Boundary.height + offset.y
		}}))
	})
})



const assetsShop1 = []
const assetsKiosk1 = []
const assetsKiosk2 = []
const assetsKiosk3 = []
const assetsKiosk4 = []
const assetsSign1 = []
const assetsSign4 = []
const assetsBigChest = []
const assetsSignBaggy = []
const assetsSignShop = []
const assetsSignNews = []
const buttonsLanguage = []
const buttonsAudio = []
const buttonsSettings = []
const buttonsHeads = []
const buttonsHearts = []

assetsMap.forEach((row, i) => {
	row.forEach((symbol, j) => {
		if(symbol == 7692)
		assetsShop1.push(new Asset({position:{
			x: j * Asset.width + offset.x,
			y: i * Asset.height + offset.y
		}}))
				else if(symbol == 7708)
				assetsBigChest.push(new Asset({position:{
					x: j * Asset.width + offset.x,
					y: i * Asset.height + offset.y
				}}))
					else if(symbol == 7690)
					assetsKiosk1.push(new Asset({position:{
						x: j * Asset.width + offset.x,
						y: i * Asset.height + offset.y
					}}))
						else if(symbol == 7706)
						assetsKiosk2.push(new Asset({position:{
							x: j * Asset.width + offset.x,
							y: i * Asset.height + offset.y
						}}))
							else if(symbol == 7694)
							assetsKiosk3.push(new Asset({position:{
								x: j * Asset.width + offset.x,
								y: i * Asset.height + offset.y
							}}))
								else if(symbol == 7696)
								assetsKiosk4.push(new Asset({position:{
									x: j * Asset.width + offset.x,
									y: i * Asset.height + offset.y
								}}))
									else if(symbol == 7720)
									assetsSign1.push(new Asset({position:{
										x: j * Asset.width + offset.x,
										y: i * Asset.height + offset.y
									}}))
										else if(symbol == 7720)
										assetsSign4.push(new Asset({position:{
											x: j * Asset.width + offset.x,
											y: i * Asset.height + offset.y
										}}))
											else if(symbol == 7722)
											assetsSignShop.push(new Asset({position:{
												x: j * Asset.width + offset.x,
												y: i * Asset.height + offset.y
											}}))
												else if(symbol == 7710)
												assetsSignBaggy.push(new Asset({position:{
													x: j * Asset.width + offset.x,
													y: i * Asset.height + offset.y
												}}))
													else if(symbol == 7724)
													assetsSignNews.push(new Asset({position:{
														x: j * Asset.width + offset.x,
														y: i * Asset.height + offset.y
													}}))
														else if(symbol == 2222)
														buttonsLanguage.push(new Button({position:{
															x: j * Button.width + offset.x,
															y: i * Button.height + offset.y
														}}))
															else if(symbol == 1111)
															buttonsAudio.push(new Button({position:{
																x: j * Button.width + offset.x,
																y: i * Button.height + offset.y
															}}))
																else if(symbol == 4444)
																buttonsSettings.push(new Button({position:{
																	x: j * Button.width + offset.x,
																	y: i * Button.height + offset.y
																}}))
																	else if(symbol == 5555)
																	buttonsHeads.push(new Button({position:{
																		x: j * Button.width + offset.x,
																		y: i * Button.height + offset.y
																	}}))
																		else if(symbol == 2)
																		buttonsHearts.push(new Button({position:{
																			x: j * Button.width + offset.x,
																			y: i * Button.height + offset.y
																			}}))
			})
	})
const image = new Image()
image.src = './images/GhosttownVillageFinal.png'

const foregroundImage = new Image()
foregroundImage.src = './images/GhosttownVillageForeground.png'

const tideImage = new Image()
tideImage.src = './images/tide.png'

const playerDownImage = new Image()
playerDownImage.src = './images/Down3x.png'

const playerUpImage = new Image()
playerUpImage.src = './images/Up3x.png'

const playerLeftImage = new Image()
playerLeftImage.src = './images/Left3x.png'

const playerRightImage = new Image()
playerRightImage.src = './images/Right3x.png'

const girlDownImage = new Image()
girlDownImage.src = './images/DownGirl.png'

const girlUpImage = new Image()
girlUpImage.src = './images/UpGirl.png'

const girlLeftImage = new Image()
girlLeftImage.src = './images/LeftGirl.png'

const girlRightImage = new Image()
girlRightImage.src = './images/RightGirl.png'

const sloLanguageImage = new Image()
sloLanguageImage.src = './images/slo.png'

const engLanguageImage = new Image()
engLanguageImage.src = './images/eng.png'

const shopSignImage = new Image()
shopSignImage.src = './images/shopSign.png'

const smallFireOneImage = new Image()
smallFireOneImage.src = './images/smallFire.png'

const smallFireTwoImage = new Image()
smallFireTwoImage.src = './images/smallFire.png'

const bigFireImage = new Image()
bigFireImage.src = './images/bigFire.png'

const bigChestClosedImage = new Image()
bigChestClosedImage.src = './images/bigChestClosed.png'

const bigChestOpenImage = new Image()
bigChestOpenImage.src = './images/bigChestOpen.png'

const newsImage = new Image()
newsImage.src = './images/news.png'

//const newsvol1Image = new Image()
//newsvol1Image.src = './images/News_vol1.png'

//const newsvol2Image = new Image()
//newsvol2Image.src = './images/News_vol2.png'

const newssignImage = new Image()
newssignImage.src = './images/NewsSign.png'

const loadingImage = new Image()
loadingImage.src = './images/Loading.png'

const gallerySignImage = new Image()
gallerySignImage.src = './images/GallerySign.png'

const labSignImage = new Image()
labSignImage.src = './images/labSign.png'

const worldImage = new Image()
worldImage.src = './images/world.png'

const settingsImage = new Image()
settingsImage.src = './images/settings.png'

const cdImage = new Image()
cdImage.src = './images/CD.png'

const headsImage = new Image()
headsImage.src = './images/heads.png'

const heartsImage = new Image()
heartsImage.src = './images/hearts.png'



const audio = new Audio()
audio.src = './audio/ZeldaMusic.mp3'
audio.volume = 0.4

const hearts = []
//const heartsImage = []

for (let i = 0; i < buttonsHearts.length; i++){
	heartsImage[i] = new Image()
	heartsImage[i].src = './images/hearts.png'
	const posX = buttonsHearts[i].position.x
	const posY = buttonsHearts[i].position.y
	hearts.push( new Sprite({
	position: {
		x: posX,
		y: posY
	},
	image: heartsImage[i],
	frames: {
		max: 7,
		hold: 15
	},
	animate: true

}))
}

hearts[0].image.width = 336
hearts[0].image.height = 48

console.log(hearts)

 const player = new Sprite({
	position: {
		x: canvas.width / 2 - (192 / 4) /2,
		y: canvas.height / 2 - 96 / 2
	},
	image: playerDownImage,
	frames: {
		max: 4,
		hold: 10
	},
	sprites: {
		up: playerUpImage,
		left: playerLeftImage,
		right: playerRightImage,
		down: playerDownImage,
		upG: girlUpImage,
		leftG: girlLeftImage,
		rightG: girlRightImage,
		downG: girlDownImage
	}

})


const shopSign = new Sprite({
	position: {
		x: offset.x + square.iii * 33,
		y: offset.y + square.iii * 11
	},
	image: shopSignImage,
	frames: {
		max: 4,
		hold: 20
	},
	animate: true

})

const gallerySign = new Sprite({
	position: {
		x: offset.x + square.iii * 17 - 5,
		y: offset.y + square.iii * 12 - 5
	},
	image: gallerySignImage,
	frames: {
		max: 6,
		hold: 15
	},
	animate: true

})

const labSign = new Sprite({
	position: {
		x: offset.x + square.iii * 46 - 24,
		y: offset.y + square.iii * 9 + 10
	},
	image: labSignImage,
	frames: {
		max: 12,
		hold: 5
	},
	animate: true

})

const language = new Sprite({
	position: {
		x: offset.x + square.iii * 38,
		y: offset.y + square.iii * 19
	},
	image: worldImage
})

const settings = new Sprite({
	position: {
		x: offset.x + square.iii * 37,
		y: offset.y + square.iii * 19
	},
	image: settingsImage
})

const musicButton = new Sprite({
	position: {
		x: offset.x + square.iii * 39,
		y: offset.y + square.iii * 19
	},
	image: cdImage,
		frames: {
		max: 4,
		hold: 15
	}
})

const headsButton = new Sprite({
	position: {
		x: offset.x + square.iii * 40,
		y: offset.y + square.iii * 19
	},
	image: headsImage,
		frames:  {
		max: 2,
		hold: 10
	}
})

const smallFireTwo = new Sprite({
	position: {
		x: offset.x + square.iii * 28,
		y: offset.y + square.iii * 26 - 6
	},
	image: smallFireTwoImage,
	frames: {
		max: 4,
		hold: 20
	},
	animate: true

})

const bigFire = new Sprite({
	position: {
		x: offset.x + square.iii * 25,
		y: offset.y + square.iii * 15
	},
	image: bigFireImage,
	frames: {
		max: 4,
		hold: 20
	},
	animate: true
})

const newssign = new Sprite({
	position: {
		x: offset.x + square.iii * 43 - 24,
		y: offset.y + square.iii * 24 - 24
	},
	image: newssignImage,
	frames: {
		max: 7,
		hold: 10
	},
	animate: true
})

const smallFireOne = new Sprite({
	position: {
		x: offset.x + square.iii * 21,
		y: offset.y + square.iii * 26 - 6
	},
	image: smallFireOneImage,
	frames: {
		max: 4,
		hold: 20
	},
	animate: true
})

const background = new Sprite({
	position: {
		x: offset.x,
		y: offset.y
	},
	image: image
})

const news = new Sprite({
	position: {
		x: canvas.width / 2 - 1000 /2,
		y: canvas.height / 2 - 700 / 2
	},
	image: newsImage,
	frames: {
		max: 2,
		hold: 0
	}
})

const foreground = new Sprite({
	position: {
		x: offset.x,
		y: offset.y
	},
	image: foregroundImage
})

const tide = new Sprite({
	position: {
		x: offset.x,
		y: offset.y
	},
	image: tideImage,
	frames: {
		max: 4,
		hold: 20
	},
	animate: true
})

const loading = new Sprite({
	position: {
		x: offset.x,
		y: offset.y
	},
	image: loadingImage,
	frames: {
		max: 4,
		hold: 20
	},
	animate: true
})

const bigChest = new Sprite({
	position: {
		x: offset.x + square.iii * 21,
		y: offset.y + square.iii * 28
	},
	image: bigChestClosedImage,
	sprites: {
		open: bigChestOpenImage,
		close: bigChestClosedImage
	}
})



const keys = {
	w: {
		pressed: false
	},
	a: {
		pressed: false
	},
	s: {
		pressed: false
	},
	d: {
		pressed: false
	},
	Enter: {
		pressed: false
	},
}

console.log(buttonsHearts)

//const movables = [background, ...boundaries, foreground, ...assetsSign1]
const movables = [headsButton, ...buttonsHearts, ...hearts, ...buttonsHeads, ...buttonsSettings, settings, musicButton, ...buttonsAudio, ...buttonsLanguage, language, gallerySign, ... assetsSignNews, ...assetsSignShop, ...assetsSignBaggy, ...assetsSign1, ...assetsSign4, background, ...boundaries, ...assetsBigChest, newssign, bigChest, tide, bigFire, smallFireTwo, smallFireOne, foreground, shopSign, ...assetsShop1, ...assetsKiosk1, ...assetsKiosk2, ...assetsKiosk3, ...assetsKiosk4]

function rectangularCollisionMap({rectangle1, rectangle2}){
	return (
		rectangle1.position.x + rectangle1.width - 6 >= rectangle2.position.x &&
		rectangle1.position.x + 6 <= rectangle2.position.x + rectangle2.width &&
		rectangle1.position.y + 56 <= rectangle2.position.y + rectangle2.height &&
		rectangle1.position.y + rectangle1.height - 6 >= rectangle2.position.y
		)
}

function rectangularCollisionAssets({rectangle1, rectangle2}){
	return (
		rectangle1.position.x + rectangle1.width >= rectangle2.position.x &&
		rectangle1.position.x <= rectangle2.position.x + rectangle2.width &&
		rectangle1.position.y <= rectangle2.position.y + rectangle2.height &&
		rectangle1.position.y + rectangle1.height >= rectangle2.position.y
		)
}
function rectangularCollisionButton({mousePosX, mousePosY, rectangle2}){
	return (
		mousePosX >= rectangle2.position.x &&
		mousePosX <= rectangle2.position.x + rectangle2.width &&
		mousePosY <= rectangle2.position.y + rectangle2.height &&
		mousePosY >= rectangle2.position.y
		)
}
console.log(player.position)
function textPromptOpacity()
	{
		document.querySelector('#textPrompt').style.opacity = '0'
}


let startKey = false
let shopLink = false
let bigChestState = false
let xmasstate = false
let sloLang = false
let cursorState = false
let audioState = false
let characterGirl = false
let settingsState = false
let headsState = false

var cursorX = 0
var cursorY = 0

window.addEventListener('click', printMousePos, true);

function printMousePos(e){
   	//document.onmouseclick = function(e){
    cursorX = e.offsetX;
    cursorY = e.offsetY;



    for (let i = 0; i < buttonsSettings.length; i++){
	const buttonSettings = buttonsSettings[i]
		if ( rectangularCollisionButton ({
			mousePosX: cursorX,
			mousePosY: cursorY,
			rectangle2: buttonSettings
			}))	
		{
		console.log('change language')
		if(settingsState){
			settingsState = false
		}
		else{
			settingsState = true
		}
		}

	}


    for (let i = 0; i < buttonsLanguage.length; i++){
	const buttonLanguage = buttonsLanguage[i]
		if ( rectangularCollisionButton ({
			mousePosX: cursorX,
			mousePosY: cursorY,
			rectangle2: buttonLanguage
			}))	
		{
		console.log('change language')
		if(settingsState){
		if(!sloLang){
			sloLang = true
		}
		else{
			sloLang = false
		}
		}
		}
		//console.log(sloLang)
	}

	for (let i = 0; i < buttonsHeads.length; i++){
	const buttonHeads = buttonsHeads[i]
		if ( rectangularCollisionButton ({
			mousePosX: cursorX,
			mousePosY: cursorY,
			rectangle2: buttonHeads
			}))	
		{
		if(settingsState){
		if(!headsState){
			headsState = true
			characterGirl = true
			headsButton.frames.val = 1
		}
		else{
			headsState = false
			characterGirl = false
			headsButton.frames.val = 0
		}
		}
		}
		
	}

	for (let i = 0; i < buttonsAudio.length; i++){
	const buttonAudio = buttonsAudio[i]
		if ( rectangularCollisionButton ({
			mousePosX: cursorX,
			mousePosY: cursorY,
			rectangle2: buttonAudio
			}))	
		{
		console.log('play or mute audio')
		if(settingsState){
		if(!audioState){
			audio.play()
			audioState = true
			musicButton.animate = true
		}
		else{
			audio.pause()
			audioState = false
			musicButton.animate = false
		}
		}
		}
		console.log(audioState)
	}

}

function animate() {
	const animationId = window.requestAnimationFrame(animate)
	background.draw()

	boundaries.forEach(Boundary => {
		Boundary.draw()
	})
	assetsShop1.forEach(Asset => {
		Asset.draw()
	})
	assetsBigChest.forEach(Asset => {
		Asset.draw()
	})
	assetsKiosk1.forEach(Asset => {
		Asset.draw()
	})
	assetsKiosk2.forEach(Asset => {
		Asset.draw()
	})
	assetsKiosk3.forEach(Asset => {
		Asset.draw()
	})
	assetsKiosk4.forEach(Asset => {
		Asset.draw()
	})
	assetsSign1.forEach(Asset => {
		Asset.draw()
	})
	assetsSign4.forEach(Asset => {
		Asset.draw()
	})
	assetsSignShop.forEach(Asset => {
		Asset.draw()
	})
	assetsSignBaggy.forEach(Asset => {
		Asset.draw()
	})
	assetsSignNews.forEach(Asset => {
		Asset.draw()
	})
	buttonsSettings.forEach(Button => {
		Button.draw()
	})

	if(settingsState)
	{
		buttonsLanguage.forEach(Button => {
			Button.draw()
		})
		language.draw()

		buttonsAudio.forEach(Button => {
			Button.draw()
		})
		musicButton.draw()

		buttonsHeads.forEach(Button => {
			Button.draw()
		})
		headsButton.draw()
	}


smallFireTwo.draw()
smallFireOne.draw()
bigFire.draw()
bigChest.draw()
tide.draw()
settings.draw()

for (let i = 0; i < hearts.length; i++){
hearts[i].draw()	
}

player.draw()
foreground.draw()
shopSign.draw()
newssign.draw()
gallerySign.draw()
//labSign.draw()


let moving = true
player.animate = false


if (!sloLang){
document.querySelector('#StartText').innerHTML = '50 000 people used to live here.<br>Now it is just a Ghost Town. Start your advanture and explore the island using W,A,S,D keys. If you want to buy anything, just enter the K67 modules and see what the residents left behind. No stealing!!<br>Press enter to continue...'
}
else{
document.querySelector('#StartText').innerHTML = 'Vcasih je tukaj zivelo 50 000 ljudi.<br>Sedaj je samo Mesto Duhov. Zacni svojo pustolovscino in razisci otok s pomocjo W,A,S,D tipk. Ce si zelis kaj kupit, vstopi v K67 kiosk in poglej kaj so prebivalci pustili za seboj. Kraja prepovedana!!<br>Za nadaljevanje pritisni Enter... '
}


for (let i = 0; i < assetsShop1.length; i++){
	const assetShop1 = assetsShop1[i]
		if ( rectangularCollisionAssets ({
			rectangle1: player,
			rectangle2: assetShop1
			}))	
		{

		document.querySelector('#textPrompt').style.opacity = '1'
		if (!sloLang){
		document.querySelector('#textPrompt').innerHTML = 'Press Enter to shop...'
		}
		else{
		document.querySelector('#textPrompt').innerHTML = 'Pritisni Enter za vstop v trgovino...'
		}		
		if (keys.Enter.pressed && lastKey == 'Enter'){
			textPromptOpacity()
			console.log('Enter')
			loading.draw()
			window.location.assign("https://www.ghosttown.si/home")
		}
		}
		
	}

for (let i = 0; i < assetsKiosk2.length; i++){
	const assetKiosk2 = assetsKiosk2[i]
		if ( rectangularCollisionAssets ({
			rectangle1: player,
			rectangle2: assetKiosk2
			}))	
		{
		news.draw()
		}
		} 

for (let i = 0; i < assetsKiosk1.length; i++){
	const assetKiosk1 = assetsKiosk1[i]
		if ( rectangularCollisionAssets ({
			rectangle1: player,
			rectangle2: assetKiosk1
			}))	
		{
		document.querySelector('#textPrompt').innerHTML = 'Press Enter to enter the gallery...'
		document.querySelector('#textPrompt').style.opacity = '1'
		if (keys.Enter.pressed && lastKey == 'Enter'){
			textPromptOpacity()
			loading.draw()
			window.location.assign("https://www.ghosttown.si/gallery")
			}
		}
	}

for (let i = 0; i < assetsBigChest.length; i++){
	const assetBigChest = assetsBigChest[i]	
		if ( rectangularCollisionAssets ({
			rectangle1: player,
			rectangle2: assetBigChest
			}))	
		{
		bigChestState = true
		}
		else bigChestState = false
	}

	if (keys.Enter.pressed && lastKey == 'Enter') {
		document.querySelector('#StartText').style.opacity = '0'
		startKey = true
		if(bigChestState){
			document.querySelector('#textPrompt').style.opacity = '1'
			if (!sloLang){
				document.querySelector('#textPrompt').innerHTML = 'Horaaay!! You have found a discount code for our new hoodie: DOLGEPA-10.'				
			}
			else{
				document.querySelector('#textPrompt').innerHTML = 'Bravooo!! Našel si kodo za popust na naš novi hoodie: DOLGEPA-10.'				
			}
			bigChest.image = bigChest.sprites.open
			
		}
	}
	if (startKey){
	if (keys.w.pressed && lastKey == 'w') {
		player.animate = true
		if(!characterGirl)
			player.image = player.sprites.up
		else
			player.image = player.sprites.upG
		for (let i = 0; i < boundaries.length; i++){
			const boundary = boundaries[i]
			if ( rectangularCollisionMap ({
				rectangle1: player,
				rectangle2: {...Boundary, position: {
					x: boundary.position.x,
					y: boundary.position.y + 3
				}}
			})
	)	{
		console.log('colliding')
		moving = false
		break
		}
	}

		for (let i = 0; i < assetsSignShop.length; i++){
			const assetSignShop = assetsSignShop[i]
				if ( rectangularCollisionAssets ({
					rectangle1: player,
					rectangle2: assetSignShop
					}))	
				{
				document.querySelector('#textPrompt').style.opacity = '1'
				if (!sloLang){
					document.querySelector('#textPrompt').innerHTML = 'Ghost Town Shop ahead, do not be shy, people here are nice.'
				}
				else{
					document.querySelector('#textPrompt').innerHTML = 'Ghost town trgovina nasproti, brez strahu, ljudje tukaj so prijazni.'
				}
				}
			}

		for (let i = 0; i < assetsSignBaggy.length; i++){
			const assetSignBaggy = assetsSignBaggy[i]
				if ( rectangularCollisionAssets ({
					rectangle1: player,
					rectangle2: assetSignBaggy
					}))	
				{
				document.querySelector('#textPrompt').style.opacity = '1'
				if(!sloLang){
					document.querySelector('#textPrompt').innerHTML = 'Make your own Knited baggy lab! We are still renovating so wait a bit, Thank you.'
				}
				else{
					document.querySelector('#textPrompt').innerHTML = 'Naredi svojo Zapleteno torbico laboratorij! Trenuntno še vedno prenavljamo, hvala za razumevanje.'
				}
				}
			}

		for (let i = 0; i < assetsSign1.length; i++){
			const assetSign1 = assetsSign1[i]
				if ( rectangularCollisionAssets ({
					rectangle1: player,
					rectangle2: assetSign1
					}))	
				{

				document.querySelector('#textPrompt').style.opacity = '1'

				if(!sloLang){
					document.querySelector('#textPrompt').innerHTML = 'Ghost Town gallery ahead.'
				}
				else{
					document.querySelector('#textPrompt').innerHTML = 'Ghost Town galerija.'
				}
				}
			}

		for (let i = 0; i < assetsSignNews.length; i++){
			const assetSignNews = assetsSignNews[i]
				if ( rectangularCollisionAssets ({
					rectangle1: player,
					rectangle2: assetSignNews
					}))	
				{
				document.querySelector('#textPrompt').style.opacity = '1'
				if(!sloLang){
				document.querySelector('#textPrompt').innerHTML = 'Newspaper stand. Walk up to it and read latest news.'
				}
				else{
				document.querySelector('#textPrompt').innerHTML = 'Trafika nasproti. Samo pristopi zraven in preberi zadnje novice.'
				}
				}
			}


	//shopLink = false
	if (moving){
		movables.forEach((movable) => {
			movable.position.y += 3
		})}}
	else if (keys.a.pressed && lastKey == 'a') {
		player.animate = true
		if(!characterGirl)
			player.image = player.sprites.left
		else
			player.image = player.sprites.leftG
		for (let i = 0; i < boundaries.length; i++){
			const boundary = boundaries[i]
			if ( rectangularCollisionMap ({
				rectangle1: player,
				rectangle2: {...Boundary, position: {
					x: boundary.position.x + 3,
					y: boundary.position.y
				}}
			})
	)	{
		console.log('colliding')
		moving = false
		break
		}
	}

	if (moving){
		textPromptOpacity()
		movables.forEach((movable) => {
			movable.position.x += 3
		})}}
		else if (keys.s.pressed && lastKey == 's') {
			player.animate = true
		if(!characterGirl)
			player.image = player.sprites.down
		else
			player.image = player.sprites.downG
			for (let i = 0; i < boundaries.length; i++){
			const boundary = boundaries[i]
			if ( rectangularCollisionMap ({
				rectangle1: player,
				rectangle2: {...Boundary, position: {
					x: boundary.position.x,
					y: boundary.position.y - 3
				}}
			})
	)	{
		console.log('colliding')
		moving = false
		break
		}
	}

	if (moving){
		textPromptOpacity()
		movables.forEach((movable) => {
			movable.position.y -= 3
		})}}
			else if (keys.d.pressed && lastKey == 'd') {
				player.animate = true
			if(!characterGirl)
				player.image = player.sprites.right
			else
				player.image = player.sprites.rightG
				for (let i = 0; i < boundaries.length; i++){
			const boundary = boundaries[i]
			if ( rectangularCollisionMap ({
				rectangle1: player,
				rectangle2: {...Boundary, position: {
					x: boundary.position.x - 3,
					y: boundary.position.y
				}}
			})
	)	{
		console.log('colliding')
		moving = false
		break
		}
	}

	if (moving){
		
		textPromptOpacity()
		movables.forEach((movable) => {
			movable.position.x -= 3
		})}}
}
}
animate()
document.querySelector('#StartText').style.opacity = '1'
let lastKey = ''



window.addEventListener('keydown', (e) => {
	console.log(e.key)
	switch (e.key) {
		case ('w') :
			keys.w.pressed = true
			lastKey = 'w'
			break
		case 'a' :
			keys.a.pressed = true
			lastKey = 'a'
			break
		case 's' :
			keys.s.pressed = true
			lastKey = 's'
			break
		case 'd' :
			keys.d.pressed = true
			lastKey = 'd'
			break
		case 'q' :
			keys.q.pressed = true
			lastKey = 'q'
			break
		case 'Enter' :
			keys.Enter.pressed = true
			lastKey = 'Enter'
			break
	}
})

window.addEventListener('keyup', (e) => {
	console.log(e.key)
	switch (e.key) {
		case 'w' :
			keys.w.pressed = false
			break
		case 'a' :
			keys.a.pressed = false
			break
		case 's' :
			keys.s.pressed = false
			break
		case 'd' :
			keys.d.pressed = false
			break
		case 'q' :
			keys.q.pressed = false
			break
		case 'Enter' :
			keys.Enter.pressed = false
			break
	}
})




    let itemW = document.querySelector("#itemW");
    let itemA = document.querySelector("#itemA");
    let itemS = document.querySelector("#itemS");
    let itemD = document.querySelector("#itemD");
    let itemEnter = document.querySelector("#itemEnter");

    let timerID;
    let counter = 0;

    let pressHoldEvent = new CustomEvent("pressHold");

    // Increase or decreae value to adjust how long
    // one should keep pressing down before the pressHold
    // event fires
    let pressHoldDuration = 50;

   
    itemW.addEventListener("mousedown", pressingDown, false);
    itemW.addEventListener("mouseup", notPressingDown, false);
    itemW.addEventListener("mouseleave", notPressingDown, false);
    itemW.addEventListener("touchstart", pressingDown, false);
    itemW.addEventListener("touchend", notPressingDown, false);

    itemA.addEventListener("mousedown", pressingDown, false);
    itemA.addEventListener("mouseup", notPressingDown, false);
    itemA.addEventListener("mouseleave", notPressingDown, false);
    itemA.addEventListener("touchstart", pressingDown, false);
    itemA.addEventListener("touchend", notPressingDown, false);

    itemS.addEventListener("mousedown", pressingDown, false);
    itemS.addEventListener("mouseup", notPressingDown, false);
    itemS.addEventListener("mouseleave", notPressingDown, false);
    itemS.addEventListener("touchstart", pressingDown, false);
    itemS.addEventListener("touchend", notPressingDown, false);

    itemD.addEventListener("mousedown", pressingDown, false);
    itemD.addEventListener("mouseup", notPressingDown, false);
    itemD.addEventListener("mouseleave", notPressingDown, false);
    itemD.addEventListener("touchstart", pressingDown, false);
    itemD.addEventListener("touchend", notPressingDown, false);

    itemEnter.addEventListener("mousedown", pressingDown, false);
    itemEnter.addEventListener("mouseup", notPressingDown, false);
    itemEnter.addEventListener("mouseleave", notPressingDown, false);
    itemEnter.addEventListener("touchstart", pressingDown, false);
    itemEnter.addEventListener("touchend", notPressingDown, false);
    // Listening for our custom pressHold event


    function pressingDown(e) {
      // Start the timer
      requestAnimationFrame(timer);

      e.preventDefault();
	switch (e.currentTarget.innerHTML) {
		case 'W' :
			keys.w.pressed = true
			lastKey = 'w'
			break
		case 'A' :
			keys.a.pressed = true
			lastKey = 'a'
			break
		case 'S' :
			keys.s.pressed = true
			lastKey = 's'
			break
		case 'D' :
			keys.d.pressed = true
			lastKey = 'd'
			break
		case 'Enter' :
			keys.Enter.pressed = true
			lastKey = 'Enter'
			break
	}

      console.log(e.currentTarget.innerHTML);
    }

    function notPressingDown(e) {
      // Stop the timer
      cancelAnimationFrame(timerID);
      counter = 0;
      keys.w.pressed = false
       keys.a.pressed = false
        keys.s.pressed = false
         keys.d.pressed = false
          keys.Enter.pressed = false
      console.log("Not pressing!");
    }

    //
    // Runs at 60fps when you are pressing down
    //
    function timer() {
   		timerID = requestAnimationFrame(timer);
      	counter++;
      	console.log("Timer tick!");
      	}

    function doSomething(e) {
      console.log("pressHold event fired!");
    }
