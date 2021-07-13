// Form variables
const form = document.querySelector('#test-form')

	// Buttons variables
let indexSlide = 0
const rightArrow = document.querySelector('#right-arrow')
const nextButton = document.querySelector('#next-button')
const backButton = document.querySelector('#back-button')
const leftArrow = document.querySelector('#left-arrow')

	// Messages variables
const commercialContact = document.querySelector('#commercial-contact')
const conseil = document.querySelector('#conseil')
const messageServiceCheck = document.querySelector('#message-service-check')
	
  // Content resume variables
const aboResume = document.querySelector('#subscription-resume')
let singlePrice = document.querySelector('#single-price')
const contentTea = document.querySelector('#content-tea')
let resumeTeaPrice = document.querySelector('#resume-tea-price')
let resumeTeaText = document.querySelector('#resume-tea-text')
const contentSnacks = document.querySelector('#content-snacks')
let resumeSnacksPrice = document.querySelector('#resume-snacks-price')
let resumeSnacksText = document.querySelector('#resume-snacks-text')
const contentFruits = document.querySelector('#content-fruits')
let resumeFruitsPrice = document.querySelector('#resume-fruits-price')
let resumeFruitsText = document.querySelector('#resume-fruits-text')
let resumeFruitsDay = document.querySelector('#resume-fruits-day')
const contentService = document.querySelector('#content-service')
let resumeServicePrice = document.querySelector('#resume-service-price')
let resumeServiceText = document.querySelector('#resume-service-text')

		// Coffee
let subCoffee = document.querySelector('#sub-coffee')
const contentCoffee = document.querySelector('#content-coffee')
const subCoffeeYes = document.querySelector('#sub-coffee-yes')
const subCoffeeNo = document.querySelector('#sub-coffee-no')
const subCoffeeOptions = document.querySelector('#sub-coffee_options')

		// Tea
let subTea = document.querySelector('#sub-tea')
const subTeaYes = document.querySelector('#sub-tea-yes')
const subTeaNo = document.querySelector('#sub-tea-no')
const subTeaOptions = document.querySelector('#sub-tea_options')
const teaVrac = document.querySelector('#tea-vrac')
const teaSachets = document.querySelector('#tea-sachets')
const vrac = document.querySelector('#vrac')
const sachets = document.querySelector('#sachets')
let teaPercentageConsumption = parseFloat(document.querySelector('#tea-percentage-consumption').textContent)
let teaDayConsumption = parseFloat(document.querySelector('#tea-day-consumption').textContent)
let singleTeaPrice = parseFloat(document.querySelector('#single-tea-price').textContent)
let teaPrice = 0

		// Snacks
let subSnacks = document.querySelector('#sub-snacks')
const subSnacksYes = document.querySelector('#sub-snacks-yes')
const subSnacksNo = document.querySelector('#sub-snacks-no')
let snacksPricePerKg = parseFloat(document.querySelector('#snacks-price-per-kg').textContent)
let snacksPriceTotal = 0

		// Fruits
let subFruits = document.querySelector('#sub-fruits')
const subFruitsYes = document.querySelector('#sub-fruits-yes')
const subFruitsNo = document.querySelector('#sub-fruits-no')
const subFruitsOptions = document.querySelector('#sub-fruits_options')
const lundiRadioButton = document.querySelector('#fruits-lundi')
const mardiRadioButton = document.querySelector('#fruits-mardi')
const peuImporteRadioButton = document.querySelector('#fruits-peu-importe')
let mondayCheck = document.querySelector('#monday-check')
let tuesdayCheck = document.querySelector('#tuesday-check')
let noneCheck = document.querySelector('#none-check')
let fruitsPricePerKg = parseFloat(document.querySelector('#fruits-price-per-kg').textContent)
let fruitsPriceTotal = 0

		// Service
let subService = document.querySelector('#sub-service')
const subServiceYes = document.querySelector('#sub-service-yes')
const subServiceNo = document.querySelector('#sub-service-no')
const subSerivceOptions = document.querySelector('#sub-service_options')
const borneCoffee = document.querySelector('#born-coffee')
let borneCoffeeCheck = document.querySelector('#born-coffee-check')
const borneCaps = document.querySelector('#born-caps')
let borneCapsCheck = document.querySelector('#born-caps-check')
const bornePaperCardboard = document.querySelector('#born-paper-cardboard')
let bornePaperCardboardCheck = document.querySelector('#born-paper-cardboard-check')
const bornePlastic = document.querySelector('#born-plastic')
let bornePlasticCheck = document.querySelector('#born-plastic-check')
const borneCan = document.querySelector('#born-can')
let borneCanCheck = document.querySelector('#born-can-check')
const borneGlass = document.querySelector('#born-glass')
let borneGlassCheck = document.querySelector('#born-glass-check')
const borneDib = document.querySelector('#born-dib')
let borneDibCheck = document.querySelector('#born-dib-check')
let collectPrice = parseFloat(document.querySelector('#collect-price').textContent)
let collectPriceTotal = 0


// Informations variables

let nSalaries = document.querySelector('#n-salarie')
let nSalariesPresents = 0
const daysWorkYear = parseFloat(document.querySelector('#days-work-year').textContent)
const daysWorkMonth = daysWorkYear / 12
const jourTravail = document.querySelector('#jour-travail')
const pointConso = document.querySelector('#point-conso')
const addedCostFirstSubscribe = parseFloat(document.querySelector('#added-cost-first-subscribe').textContent)

// Functions add & remove d-none
const addDnone = (element) => {
	element.classList.add('d-none')
}

const removeDnone = (element) => {
	element.classList.remove('d-none')
}

// Moving throught the form
nextButton.addEventListener('click', () => {
	 if(indexSlide < 1) {
    nSalariesPresents = parseFloat(nSalaries.value) * (5 - parseInt(jourTravail.value)) / 5
    console.log(nSalariesPresents)
  }

  if(indexSlide < 5) {
  	rightArrow.click()
    indexSlide += 1
  }
  
  if(indexSlide >= 1) {
  removeDnone(backButton)
  removeDnone(aboResume)
	}
})

backButton.addEventListener('click', () => {
	if(indexSlide >= 1) {
  	leftArrow.click()
    indexSlide -= 1
  }
  
  if(indexSlide < 1) {
  	addDnone(backButton)
  	addDnone(aboResume)
	}
})

// Taking informations from the form
form.addEventListener('keyup', () => {

    // Conditionnal visibility commercial contact
    if (parseInt(nSalaries.value) >= 101) {
    		removeDnone(commercialContact)
    } else {
    		addDnone(commercialContact)
        }
})

if(parseInt(pointConso.value) >= 3 && parseInt(nSalaries.value) <= 30) {
    removeDnone(conseil)
} else {
    addDnone(conseil)
}

pointConso.addEventListener('click', () => {
	  if(parseInt(pointConso.value) >= 3 && parseInt(nSalaries.value) <= 30) {
    	removeDnone(conseil)
    } else {
        addDnone(conseil)
    }
})

// Coffee functions

subCoffeeYes.addEventListener('click', () => {
    removeDnone(contentCoffee)
    removeDnone(subCoffeeOptions)
    subCoffee.textContent = "Oui"
})

subCoffeeNo.addEventListener('click', () => {
    addDnone(contentCoffee)
    addDnone(subCoffeeOptions)
    subCoffee.textContent = "Non"
})

// Tea functions

subTeaYes.addEventListener('click', () => {
    removeDnone(contentTea)
    removeDnone(subTeaOptions)
    subTea.textContent = "Oui"
})

subTeaNo.addEventListener('click', () => {
    addDnone(contentTea)
    addDnone(subTeaOptions)
    subTea.textContent = "Non"

    // Reset selected when Yes
    teaPrice = 0
})

teaVrac.addEventListener('click', () => {
	teaPrice = nSalariesPresents * teaPercentageConsumption * teaDayConsumption * daysWorkMonth * singleTeaPrice
    resumeTeaPrice.textContent = Math.round(teaPrice * 100) / 100
	resumeTeaText.textContent = "vrac"
})

teaSachets.addEventListener('click', () => {
	teaPrice = nSalariesPresents * teaPercentageConsumption * teaDayConsumption * daysWorkMonth * singleTeaPrice
    resumeTeaPrice.textContent = Math.round(teaPrice * 100) / 100
	resumeTeaText.textContent = "sachets"
})

// Snacks functions

subSnacksYes.addEventListener('click', () => {
    removeDnone(contentSnacks)
    subSnacks.textContent = "Oui"

    if(nSalariesPresents <= 15) {
        snacksPriceTotal = snacksPricePerKg * 3 + addedCostFirstSubscribe
        resumeSnacksText.textContent = "(3Kg)"
    }

    if(nSalariesPresents >= 16 && nSalariesPresents <= 30) {
        snacksPriceTotal = snacksPricePerKg * 6
        resumeSnacksText.textContent = "(6Kg)"
    }

    if(nSalariesPresents >= 31 && nSalariesPresents <= 45) {
        snacksPriceTotal = snacksPricePerKg * 9
        resumeSnacksText.textContent = "(9Kg)"
    }

    if(nSalariesPresents >= 46 && nSalariesPresents <= 60) {
        snacksPriceTotal = snacksPricePerKg * 12
        resumeSnacksText.textContent = "(12Kg)"
    }

    if(nSalariesPresents >= 61 && nSalariesPresents <= 75) {
        snacksPriceTotal = snacksPricePerKg * 15
        resumeSnacksText.textContent = "(15Kg)"
    }

    if(nSalariesPresents >= 76) {
        snacksPriceTotal = snacksPricePerKg * 18
        resumeSnacksText.textContent = "(18Kg)"
    }

    resumeSnacksPrice.textContent = snacksPriceTotal
})

subSnacksNo.addEventListener('click', () => {
    addDnone(contentSnacks)
    subSnacks.textContent = "Non"

    snacksPriceTotal = 0
})

// Fruits functions

subFruitsYes.addEventListener('click', () => {
    removeDnone(contentFruits)
    removeDnone(subFruitsOptions)
    subFruits.textContent = "Oui"

    if(nSalariesPresents <= 15) {
        fruitsPriceTotal = fruitsPricePerKg * 3 + addedCostFirstSubscribe
        resumeFruitsText.textContent = "(3Kg)"
    }

    if(nSalariesPresents >= 16 && nSalariesPresents <= 30) {
        fruitsPriceTotal = fruitsPricePerKg * 6 * 4
        resumeFruitsText.textContent = "(6Kg)"
    }

    if(nSalariesPresents >= 31 && nSalariesPresents <= 45) {
        fruitsPriceTotal = fruitsPricePerKg * 9 * 4
        resumeFruitsText.textContent = "(9Kg)"
    }

    if(nSalariesPresents >= 46 && nSalariesPresents <= 60) {
        fruitsPriceTotal = fruitsPricePerKg * 12 * 4
        resumeFruitsText.textContent = "(12Kg)"
    }

    if(nSalariesPresents >= 61 && nSalariesPresents <= 75) {
        fruitsPriceTotal = fruitsPricePerKg * 15 * 4
        resumeFruitsText.textContent = "(15Kg)"
    }

    if(nSalariesPresents >= 76) {
        fruitsPriceTotal = fruitsPricePerKg * 18 * 4
        resumeFruitsText.textContent = "(18Kg)"
    }

    resumeFruitsPrice.textContent = fruitsPriceTotal
})

lundiRadioButton.addEventListener('click', () => {
    resumeFruitsText.textContent = "Livré le Lundi"
})

mardiRadioButton.addEventListener('click', () => {
    resumeFruitsText.textContent = "Livré le mardi"
})
peuImporteRadioButton.addEventListener('click', () => {
    resumeFruitsText.textContent = "Livré le Lundi ou Mardi"
})

subFruitsNo.addEventListener('click', () => {
    addDnone(contentFruits)
    addDnone(subFruitsOptions)
    subFruits.textContent = "Non"

    fruitsPriceTotal = 0
    mondayCheck.checked = false
    tuesdayCheck.checked = false
    noneCheck.checked = false
})


// Service functions

subServiceYes.addEventListener('click', () => {
    removeDnone(contentService)
    removeDnone(subSerivceOptions)
    subService.textContent = "Oui"

    // If coffee grain was choosed

    // If coffee capsules was choosed

    if(nSalariesPresents >= 0 && nSalariesPresents <= 30) {
        if(pointConso.value === "1") {
            collectPriceTotal = collectPrice * 1
        } else if (pointConso.value === "2") {
            collectPriceTotal = collectPrice * 2
        } else if (pointConso.value === "3") {
            collectPriceTotal = collectPrice * 3
        }
        resumeServicePrice.textContent = collectPriceTotal
    }

    if(nSalariesPresents >= 31 && nSalariesPresents <= 60) {
        if(pointConso.value === "1") {
            collectPriceTotal = collectPrice * 2
        } else if (pointConso.value === "2") {
            collectPriceTotal = collectPrice * 3
        } else if (pointConso.value === "3") {
            collectPriceTotal = collectPrice * 4
        }
        resumeServicePrice.textContent = collectPriceTotal
    }

    if(nSalariesPresents >= 61) {
        if(pointConso.value === "1") {
            collectPriceTotal = collectPrice * 1
        } else if (pointConso.value === "2") {
            collectPriceTotal = collectPrice = "Hors scope"
        } else if (pointConso.value === "3") {
            collectPriceTotal = collectPrice = "Hors scope"
        }
        resumeServicePrice.textContent = collectPriceTotal
    }
})

subServiceNo.addEventListener('click', () => {
    addDnone(contentService)
    addDnone(subSerivceOptions)
    subService.textContent = "Non"
})

bornePaperCardboard.addEventListener('click', () => {
    removeDnone(messageServiceCheck)
    bornePaperCardboardCheck.checked = !bornePaperCardboardCheck.checked

    if(bornePaperCardboardCheck.checked === false && bornePlasticCheck.checked === false && borneCanCheck.checked === false && borneGlassCheck.checked === false && borneDibCheck.checked === false) {
        addDnone(messageServiceCheck)
    }
})

bornePlastic.addEventListener('click', () => {
    removeDnone(messageServiceCheck)
    bornePlasticCheck.checked = !bornePlasticCheck.checked

    if(bornePaperCardboardCheck.checked === false && bornePlasticCheck.checked === false && borneCanCheck.checked === false && borneGlassCheck.checked === false && borneDibCheck.checked === false) {
        addDnone(messageServiceCheck)
    }
})

borneCan.addEventListener('click', () => {
    removeDnone(messageServiceCheck)
    borneCanCheck.checked = !borneCanCheck.checked

    if(bornePaperCardboardCheck.checked === false && bornePlasticCheck.checked === false && borneCanCheck.checked === false && borneGlassCheck.checked === false && borneDibCheck.checked === false) {
        addDnone(messageServiceCheck)
    }
})

borneGlass.addEventListener('click', () => {
    removeDnone(messageServiceCheck)
    borneGlassCheck.checked = !borneGlassCheck.checked

    if(bornePaperCardboardCheck.checked === false && bornePlasticCheck.checked === false && borneCanCheck.checked === false && borneGlassCheck.checked === false && borneDibCheck.checked === false) {
        addDnone(messageServiceCheck)
    }
})

borneDib.addEventListener('click', () => {
    removeDnone(messageServiceCheck)
    borneDibCheck.checked = !borneDibCheck.checked

    if(bornePaperCardboardCheck.checked === false && bornePlasticCheck.checked === false && borneCanCheck.checked === false && borneGlassCheck.checked === false && borneDibCheck.checked === false) {
        addDnone(messageServiceCheck)
    }
})
