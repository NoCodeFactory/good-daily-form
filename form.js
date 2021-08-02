// Form variables
const form = document.querySelector('#form-gooddaily')
const errorMessage = document.querySelector('#error-message')
const submitFormButton = document.querySelector('#submit-form-button')

	// Buttons variables
let indexSlide = 0
const rightArrow = document.querySelector('#right-arrow')
const nextButton = document.querySelector('#next-button')
const backButton = document.querySelector('#back-button')
const leftArrow = document.querySelector('#left-arrow')

	// Messages variables
let messageCommercial = document.querySelector('#message-commercial').textContent
let commercialContact = document.querySelector('#commercial-contact')
let commercialContact02 = document.querySelector('#commercial-contact-02')
commercialContact.textContent = messageCommercial
commercialContact02.textContent = messageCommercial
const conseil = document.querySelector('#conseil')
const messageServiceCheck = document.querySelector('#message-service-check')
const postalMessage = document.querySelector('#postal-message')
const seeAboResume = document.querySelector('#see-abo-resume')
	
  // Content resume variables
const aboResume = document.querySelector('#subscription-resume')
let subscriptionPrice = document.querySelector('#subscription-price')
let singlePrice = document.querySelector('#single-price')
let addedSubPrice = 0
let securityPriceCoffee = false
let securityPriceCoffeeGrain = false
let securityPriceCoffeeCaps = false
let securityPriceMachine = false
let securityPriceCoffeeAdds = false
let securityPriceTea = false
let securityPriceSnacks = false
let securityPriceFruits = false
let securityPriceService = false
const contentCoffee = document.querySelector('#content-coffee')
let resumeCoffeePrice = document.querySelector('#resume-coffee-price')
let resumeCoffeeText = document.querySelector('#resume-coffee-text')
const contentTea = document.querySelector('#content-tea')
let resumeTeaPrice = document.querySelector('#resume-tea-price')
let resumeTeaText = document.querySelector('#resume-tea-text')
const contentSnacks = document.querySelector('#content-snacks')
let resumeSnacksPrice = document.querySelector('#resume-snacks-price')
let resumeSnacksText = document.querySelector('#resume-snacks-text')
const contentFruits = document.querySelector('#content-fruits')
const contentFruitsDelivery = document.querySelector('#content-fruits-delivery')
let resumeFruitsPrice = document.querySelector('#resume-fruits-price')
let resumeFruitsText = document.querySelector('#resume-fruits-text')
let resumeFruitsDay = document.querySelector('#resume-fruits-day')
const contentService = document.querySelector('#content-service')
let resumeServicePrice = document.querySelector('#resume-service-price')
let resumeServiceSubOptionCoffee = document.querySelector('#resume-service-option-coffee')
let resumeServiceSubOptionCaps = document.querySelector('#resume-service-option-caps')
let resumeServiceSubOptionPaperCardboard = document.querySelector('#resume-service-option-paper-cardboard')
let resumeServiceSubOptionPlastic = document.querySelector('#resume-service-option-plastic')
let resumeServiceSubOptionCan = document.querySelector('#resume-service-option-can')
let resumeServiceSubOptionGlass = document.querySelector('#resume-service-option-glass')
let resumeServiceSubOptionDib = document.querySelector('#resume-service-option-dib')

		// Coffee
let subCoffee = document.querySelector('#sub-coffee')
const subCoffeeYes = document.querySelector('#sub-coffee-yes')
const subCoffeeNo = document.querySelector('#sub-coffee-no')
const subCoffeeOptions = document.querySelector('#sub-coffee_options')
const coffeeGrain = document.querySelector('#coffee-grain')
let coffeeGrainChecked = false
let coffeeCapsChecked = false
let machineYesChecked = false
let machineNoChecked = false
const coffeeCapsules = document.querySelector('#coffee-capsules')
const grain = document.querySelector('#grain')
const capsules = document.querySelector('#capsules')
const addsCoffeeYes = document.querySelector('#adds-coffee-yes')
const addsCoffeeNo = document.querySelector('#adds-coffee-no')
const coffeeTypeContent = document.querySelector('#coffee-type-content')
const machineContent = document.querySelector('#machine-content')
const addsContent = document.querySelector('#adds-content')
let coffeeDayConsumption = parseFloat(document.querySelector('#coffee-day-consumption').textContent)
let coffeePricePerKg = parseFloat(document.querySelector('#coffee-price-per-kg').textContent)
let coffeeConsumptionPerkg = parseFloat(document.querySelector('#coffee-consumption-per-kg').textContent)
let coffeePriceCaps = parseFloat(document.querySelector('#coffee-price-caps').textContent)
let addsPrice = parseFloat(document.querySelector('#adds-price').textContent)
let addsPriceTotal = 0
let coffeeGrainPrice = 0
let coffeeCapsPrice = 0
let coffeePrice = 0

    // Machine
const machineYes = document.querySelector('#machine-yes')
const machineNo = document.querySelector('#machine-no')
let machineCoffeeS = parseFloat(document.querySelector('#machine-coffee-s').textContent)
let machineCoffeeM = parseFloat(document.querySelector('#machine-coffee-m').textContent)
let machineCoffeeL = parseFloat(document.querySelector('#machine-coffee-l').textContent)
let machineCoffeeCaps = parseFloat(document.querySelector('#machine-coffee-caps').textContent)
let machinePrice = 0

		// Tea
let subTea = document.querySelector('#sub-tea')
const subTeaYes = document.querySelector('#sub-tea-yes')
const subTeaNo = document.querySelector('#sub-tea-no')
const subTeaOptions = document.querySelector('#sub-tea_options')
const teaVrac = document.querySelector('#tea-vrac')
const teaSachets = document.querySelector('#tea-sachets')
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
let serviceSecurityPrice = false

// Informations
const emailForm = document.querySelector('#email-form')
const nameStreetForm = document.querySelector('#name-street-form')
const countryForm = document.querySelector('#country-form')
const postalField = document.querySelector('#postal-field')

// Hidden fields
let oCoffeePrice = document.querySelector('#o-coffee-price')
let oTeaPrice = document.querySelector('#o-tea-price')
let oSnacksPrice = document.querySelector('#o-snacks-price')
let oFruitsPrice = document.querySelector('#o-fruits-price')
let oServicePrice = document.querySelector('#o-service-price')
let oTotalPrice = document.querySelector('#o-total-price')
let oSinglePrice = document.querySelector('#o-single-price')


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

// Adding the current price to the total price
const addingToPrice = (currentPrice) => {
    addedSubPrice = addedSubPrice + currentPrice
    subscriptionPrice.textContent = addedSubPrice.toFixed(2)
    singlePrice.textContent = (parseFloat(addedSubPrice) / (parseInt(nSalaries.value) * daysWorkMonth)).toFixed(2)

    if(singlePrice.textContent === "NaN") {
        singlePrice.textContent = "0"
    }
}

//  Deduct the current price from the total price
const deductToPrice = (currentPrice) => {
    addedSubPrice = addedSubPrice - currentPrice
    subscriptionPrice.textContent = addedSubPrice.toFixed(2)
    singlePrice.textContent = (parseFloat(addedSubPrice) / (parseInt(nSalaries.value) * daysWorkMonth)).toFixed(2)

    if(singlePrice.textContent === "NaN") {
        singlePrice.textContent = "0"
    }
}

// Moving throught the form
nextButton.addEventListener('click', () => {
    if(indexSlide < 1) {
        nSalariesPresents = parseFloat(nSalaries.value) * (5 - parseFloat(jourTravail.value)) / 5
  }
	
    if(indexSlide === 0) {
	addDnone(seeAboResume)    
    } else {
    	removeDnone(seeAboResume)
    }

    // Conditionnal informations company
    if(indexSlide === 0 && nSalaries.value != "" && jourTravail.value != "" && pointConso.value != "") {
        rightArrow.click()
        indexSlide += 1
        removeDnone(aboResume)
        addDnone(errorMessage)
    } else {
        removeDnone(errorMessage)
    }

    // Conditionnal Coffee
    if(indexSlide === 1 && subCoffee.textContent === "Oui") {
        if(coffeeGrainChecked === true || coffeeCapsChecked === true) {
            rightArrow.click()
            indexSlide += 1
            addDnone(errorMessage)
        } else {
            removeDnone(errorMessage)
        }
    } else if(indexSlide === 1 && subCoffee.textContent === "Non") {
        rightArrow.click()
        indexSlide += 1
        addDnone(errorMessage)
    } else if(indexSlide === 1 && subCoffee.textContent === "") {
        removeDnone(errorMessage)
    }

    // Conditionnal Tea
    if(indexSlide === 2 && subTea.textContent === "Oui") {
        if(resumeTeaText.textContent === "vrac" || resumeTeaText.textContent === "sachets") {
            rightArrow.click()
            indexSlide += 1
            addDnone(errorMessage)
        } 
    } else if(indexSlide === 2 && subTea.textContent === "Non") {
        rightArrow.click()
        indexSlide += 1
        addDnone(errorMessage)
    } else if(indexSlide === 2 && subTea.textContent === ""){
        removeDnone(errorMessage)
    }

    // Conditionnal Snacks
    if(indexSlide === 3 && subSnacks.textContent === "Oui") {
        rightArrow.click()
        indexSlide += 1
        addDnone(errorMessage)
    } else if (indexSlide === 3 && subSnacks.textContent === "Non") {
        rightArrow.click()
        indexSlide += 1
        addDnone(errorMessage)
    } else if(indexSlide === 3 && subSnacks.textContent === "") {
        removeDnone(errorMessage)
    }

    // Conditionnal Fruits
    if(indexSlide === 4 && subFruits.textContent === "Oui") {
        if(resumeFruitsDay.textContent === "lundi" || resumeFruitsDay.textContent === "mardi" || resumeFruitsDay.textContent === "lundi ou mardi") {
            rightArrow.click()
            indexSlide += 1
            addDnone(errorMessage)
        } else {
            removeDnone(errorMessage)
        }
    } else if (indexSlide === 4 && subFruits.textContent === "Non") {
        rightArrow.click()
        indexSlide += 1
        addDnone(errorMessage)
    } else if(indexSlide === 4 && subFruits.textContent === ""){
        removeDnone(errorMessage)
    }

    // Conditionnal Service
    if(indexSlide === 5 && subService.textContent === "Oui") {
        if(borneCoffeeCheck.checked === true || borneCapsCheck.checked === true || bornePaperCardboardCheck.checked === true || bornePlasticCheck.checked === true || borneCanCheck.checked === true || borneGlassCheck.checked === true || borneDibCheck.checked === true) {
            rightArrow.click()
            indexSlide += 1
            addDnone(errorMessage)
        } else {
            removeDnone(errorMessage)
        }
    } else if (indexSlide === 5 && subService.textContent === "Non") {
        rightArrow.click()
        indexSlide += 1
        addDnone(errorMessage)
    } else if(indexSlide === 5 && subService.textContent === "") {
        removeDnone(errorMessage)
    }

    if(indexSlide === 6) {
        addDnone(nextButton)
        removeDnone(submitFormButton)

        oCoffeePrice.value = coffeePrice.toFixed(2)
        oTeaPrice.value = teaPrice.toFixed(2)
        oSnacksPrice.value = snacksPriceTotal.toFixed(2)
        oFruitsPrice.value = fruitsPriceTotal.toFixed(2)
        oServicePrice.value = collectPriceTotal.toFixed(2)
        oTotalPrice.value = addedSubPrice.toFixed(2)
        oSinglePrice.value = parseFloat(singlePrice.textContent)
  }
  
    if(indexSlide >= 2) {
        removeDnone(backButton)
        removeDnone(aboResume)
	}
})

if(indexSlide == 0) {
    addDnone(backButton)
}

backButton.addEventListener('click', () => {
	if(indexSlide >= 1) {
  	leftArrow.click()
    indexSlide -= 1
  }
  
    if(indexSlide < 2) {
        addDnone(backButton)
        addDnone(aboResume)
    }

    if(indexSlide < 6) {
        removeDnone(nextButton)
        addDnone(submitFormButton)
    }

    addDnone(errorMessage)
})

// Taking informations from the form
form.addEventListener('keyup', () => {

    // Conditionnal visibility commercial contact
    if(parseInt(nSalaries.value) >= 101) {
        removeDnone(commercialContact)
    } else {
        addDnone(commercialContact)
    }

    // Conditionnal visibility postal message
    if((postalField.value).length > 2) {
        if((postalField.value).substring(0, 2) != "75" && (postalField.value).substring(0, 2) != "92" && (postalField.value).substring(0, 2) != "93" && (postalField.value).substring(0, 2) != "94" && (postalField.value).substring(0, 2) != "95") {
            removeDnone(postalMessage)
        } else {
            addDnone(postalMessage)
        }
    }
})


pointConso.addEventListener('click', () => {
    if(parseInt(pointConso.value) >= 3 && parseInt(nSalaries.value) <= 30) {
        removeDnone(conseil)
    } else {
        addDnone(conseil)
    }
    
    if(parseInt(pointConso.value) >= 3 && parseInt(nSalaries.value) <= 30) {
        removeDnone(conseil)
    } else {
        addDnone(conseil)
    }

    if(pointConso.value == 4) {
        removeDnone(commercialContact02)
    } else {
        addDnone(commercialContact02)
    }
})

// Coffee functions

subCoffeeYes.addEventListener('click', () => {
    removeDnone(contentCoffee)
    removeDnone(subCoffeeOptions)
    removeDnone(coffeeTypeContent)
    subCoffee.textContent = "Oui"

    if(securityPriceCoffee === false) {
        if(parseFloat(resumeCoffeePrice.textContent) > 0) {
            coffeePrice = parseFloat(resumeCoffeePrice.textContent)
        }
        addingToPrice(coffeePrice)  
        securityPriceCoffee = true
    }
})

subCoffeeNo.addEventListener('click', () => {
    addDnone(contentCoffee)
    addDnone(subCoffeeOptions)
    subCoffee.textContent = "Non"

    // Not giving wrong informations in the form post
    machineNo.click()
    addsCoffeeNo.click()
    coffeeGrainChecked = false
    coffeeCapsChecked = false

    deductToPrice(coffeePrice)
    coffeePrice = 0
    securityPriceCoffee = false
})

const machinePriceCalculation = () => {
    if(nSalariesPresents <= 30) {
    
        if(pointConso.value === "1") {
          if(coffeeGrainChecked === true) {
            machinePrice = machineCoffeeS * 1
          } else {
            machinePrice = machineCoffeeCaps * 1
          }
        }
    
        if(pointConso.value === "2") {
          if(coffeeGrainChecked === true) {
            machinePrice = machineCoffeeS * 2
          } else {
            machinePrice = machineCoffeeCaps * 2
          }
        }
        
        if(pointConso.value === "3") {
          if(coffeeGrainChecked === true) {
            machinePrice = machineCoffeeS * 3
          } else {
            machinePrice = machineCoffeeCaps * 3
          }
        }
      }
    
      if(nSalariesPresents >= 31 && nSalariesPresents <= 60) {
    
        if(pointConso.value === "1") {
          if(coffeeGrainChecked === true) {
            machinePrice = machineCoffeeM * 1
          } else {
            machinePrice = machineCoffeeCaps * 2
          }
        }
    
        if(pointConso.value === "2") {
          if(coffeeGrainChecked === true) {
            machinePrice = machineCoffeeM * 2
          } else {
            machinePrice = machineCoffeeCaps * 3
          }
        }
    
        if(pointConso.value === "3") {
          if(coffeeGrainChecked === true) {
            machinePrice = machineCoffeeM * 3
          } else {
            machinePrice = machineCoffeeCaps * 3
          }
        }
      }
    
      if(nSalariesPresents >= 61) {
    
        if(pointConso.value === "1") {
          if(coffeeGrainChecked === true) {
            machinePrice = machineCoffeeL * 1
          } else {
            machinePrice = machineCoffeeCaps * 3
          }
        }
    
        if(pointConso.value === "2") {
          machinePrice = "0"
        }
    
        if(pointConso.value === "3") {
          machinePrice = "0"
        }
      }

    return machinePrice
}

coffeeGrain.addEventListener('click', () => {

    // Get what's checked
    coffeeGrainChecked = true
    coffeeCapsChecked = false

    removeDnone(machineContent)
    resumeCoffeeText.textContent = "grain"

    // Calculate the price
    coffeeGrainPrice = nSalariesPresents * coffeeDayConsumption * daysWorkMonth * (coffeePricePerKg / coffeeConsumptionPerkg)

    if(machineYesChecked === true && securityPriceCoffeeGrain === false && securityPriceCoffeeAdds === false) {
      deductToPrice(coffeeCapsPrice)
      coffeeCapsPrice = 0

      deductToPrice(machinePrice)
      machinePrice = 0
      machinePriceCalculation()
      coffeeGrainPrice += machinePrice

      coffeePrice = coffeeGrainPrice
      resumeCoffeePrice.textContent = coffeePrice.toFixed(2)

      addingToPrice(coffeePrice)
      securityPriceCoffeeGrain = true
      securityPriceCoffeeCaps = false
    }

    if(machineYesChecked === true && securityPriceCoffeeGrain === false && securityPriceCoffeeAdds === true) {
        deductToPrice(coffeeCapsPrice)
        coffeeCapsPrice = 0
        
        deductToPrice(machinePrice)
        machinePrice = 0
        machinePriceCalculation()
        coffeeGrainPrice += machinePrice
        
        deductToPrice(addsPriceTotal)
        coffeeGrainPrice += addsPriceTotal

        coffeePrice = coffeeGrainPrice
        resumeCoffeePrice.textContent = coffeePrice.toFixed(2)
        
        addingToPrice(coffeePrice)
        securityPriceCoffeeGrain = true
        securityPriceCoffeeCaps = false
    }

    if(machineYesChecked === false && securityPriceCoffeeGrain === false && securityPriceCoffeeAdds === true) {
        deductToPrice(coffeeCapsPrice)
        coffeeCapsPrice = 0

        deductToPrice(machinePrice)
        machinePrice = 0

        deductToPrice(addsPriceTotal)
        coffeeGrainPrice += addsPriceTotal

        coffeePrice = coffeeGrainPrice
        resumeCoffeePrice.textContent = coffeePrice.toFixed(2)

        addingToPrice(coffeePrice)
        securityPriceCoffeeGrain = true
        securityPriceCoffeeCaps = false
    }
    
    // Security for not spamming
    if(securityPriceCoffeeGrain === false) {

        deductToPrice(coffeeCapsPrice)
        coffeeCapsPrice = 0

        coffeePrice = coffeeGrainPrice
        resumeCoffeePrice.textContent = coffeePrice.toFixed(2)

        addingToPrice(coffeePrice)
        securityPriceCoffeeGrain = true
        securityPriceCoffeeCaps = false
    }
})

coffeeCapsules.addEventListener('click', () => {

    // Get what's checked
    coffeeCapsChecked = true
    coffeeGrainChecked = false

    removeDnone(machineContent)
    resumeCoffeeText.textContent = "capsules"
  
    // Calculate the price
    coffeeCapsPrice = nSalariesPresents * coffeeDayConsumption * daysWorkMonth * coffeePriceCaps

    if(machineYesChecked === true && securityPriceCoffeeCaps === false && securityPriceCoffeeAdds === false) {
        deductToPrice(coffeeGrainPrice)
        coffeeGrainPrice = 0

        deductToPrice(machinePrice)
        machinePrice = 0
        machinePriceCalculation()
        coffeeCapsPrice += machinePrice

        coffeePrice = coffeeCapsPrice
        resumeCoffeePrice.textContent = coffeePrice.toFixed(2)

        addingToPrice(coffeePrice)
        securityPriceCoffeeCaps = true
        securityPriceCoffeeGrain = false
      }

    if(machineYesChecked === true && securityPriceCoffeeCaps === false && securityPriceCoffeeAdds === true) {
        deductToPrice(coffeeGrainPrice)
        coffeeGrainPrice = 0

        deductToPrice(machinePrice)
        machinePrice = 0
        machinePriceCalculation()
        coffeeCapsPrice += machinePrice

        deductToPrice(addsPriceTotal)
        coffeeCapsPrice += addsPriceTotal
        
        coffeePrice = coffeeCapsPrice
        resumeCoffeePrice.textContent = coffeePrice.toFixed(2)
        
        addingToPrice(coffeePrice)
        securityPriceCoffeeCaps = true
        securityPriceCoffeeGrain = false
    }

    if(machineYesChecked === false && securityPriceCoffeeCaps === false && securityPriceCoffeeAdds === true) {
        deductToPrice(coffeeGrainPrice)
        coffeeGrainPrice = 0

        deductToPrice(machinePrice)
        machinePrice = 0

        deductToPrice(addsPriceTotal)
        coffeeCapsPrice += addsPriceTotal

        coffeePrice = coffeePriceCaps
        resumeCoffeePrice.textContent = coffeePrice.toFixed(2)

        addingToPrice(coffeePrice)
        securityPriceCoffeeGrain = true
        securityPriceCoffeeCaps = false
    }

    // Security for not spamming
    if(securityPriceCoffeeCaps === false) {

        deductToPrice(coffeeGrainPrice)
        coffeeGrainPrice = 0

        coffeePrice = coffeeCapsPrice
        resumeCoffeePrice.textContent = coffeePrice.toFixed(2)

        addingToPrice(coffeePrice)
        securityPriceCoffeeCaps = true
        securityPriceCoffeeGrain = false
    }
})

machineYes.addEventListener('click', () => {

  machineYesChecked = true
  machineNoChecked = false

  removeDnone(addsContent)

  machinePriceCalculation()
  
  if(securityPriceMachine === false) {
    coffeePrice = coffeePrice + machinePrice
    resumeCoffeePrice.textContent = coffeePrice.toFixed(2)
    addingToPrice(machinePrice)
    securityPriceMachine = true
  }
})

machineNo.addEventListener('click', () => {
  machineNoChecked = true
  machineYesChecked = false

  removeDnone(addsContent)

  deductToPrice(machinePrice)
  coffeePrice = coffeePrice - machinePrice
  resumeCoffeePrice.textContent = coffeePrice.toFixed(2)
  machinePrice = 0
  securityPriceMachine = false
})

addsCoffeeYes.addEventListener('click', () => {

  addsPriceTotal = nSalariesPresents * coffeeDayConsumption * daysWorkMonth * addsPrice
  
  if(securityPriceCoffeeAdds === false) {
    coffeePrice += addsPriceTotal
    resumeCoffeePrice.textContent = coffeePrice.toFixed(2)

    addingToPrice(addsPriceTotal)
    securityPriceCoffeeAdds = true
  }
})

addsCoffeeNo.addEventListener('click', () => {
  deductToPrice(addsPriceTotal)
  coffeePrice -= addsPriceTotal
  resumeCoffeePrice.textContent = coffeePrice.toFixed(2)
  addsPriceTotal = 0
  securityPriceCoffeeAdds = false
})

// Tea functions

subTeaYes.addEventListener('click', () => {
    removeDnone(contentTea)
    removeDnone(subTeaOptions)
    subTea.textContent = "Oui"

    teaPrice = nSalariesPresents * teaPercentageConsumption * teaDayConsumption * daysWorkMonth * singleTeaPrice

    resumeTeaPrice.textContent = teaPrice.toFixed(2)

    if(securityPriceTea === false) {
        addingToPrice(teaPrice)
        securityPriceTea = true
    }
})

subTeaNo.addEventListener('click', () => {
    addDnone(contentTea)
    addDnone(subTeaOptions)
    subTea.textContent = "Non"

    // Reset selected when Yes
    deductToPrice(teaPrice)
    teaPrice = 0
    securityPriceTea = false
})

teaVrac.addEventListener('click', () => {
	resumeTeaText.textContent = "vrac"
})

teaSachets.addEventListener('click', () => {
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
    if(securityPriceSnacks === false) {
        addingToPrice(snacksPriceTotal)
        securityPriceSnacks = true
    }
})

subSnacksNo.addEventListener('click', () => {
    addDnone(contentSnacks)
    subSnacks.textContent = "Non"

    deductToPrice(snacksPriceTotal)
    snacksPriceTotal = 0
    securityPriceSnacks = false
})

// Fruits functions

subFruitsYes.addEventListener('click', () => {
    removeDnone(contentFruits)
    removeDnone(subFruitsOptions)
    subFruits.textContent = "Oui"

    if(nSalariesPresents <= 15) {
        fruitsPriceTotal = fruitsPricePerKg * 3 + addedCostFirstSubscribe
        resumeFruitsText.textContent = "3Kg"
    }

    if(nSalariesPresents >= 16 && nSalariesPresents <= 30) {
        fruitsPriceTotal = fruitsPricePerKg * 6 * 4
        resumeFruitsText.textContent = "6Kg"
    }

    if(nSalariesPresents >= 31 && nSalariesPresents <= 45) {
        fruitsPriceTotal = fruitsPricePerKg * 9 * 4
        resumeFruitsText.textContent = "9Kg"
    }

    if(nSalariesPresents >= 46 && nSalariesPresents <= 60) {
        fruitsPriceTotal = fruitsPricePerKg * 12 * 4
        resumeFruitsText.textContent = "12Kg"
    }

    if(nSalariesPresents >= 61 && nSalariesPresents <= 75) {
        fruitsPriceTotal = fruitsPricePerKg * 15 * 4
        resumeFruitsText.textContent = "15Kg"
    }

    if(nSalariesPresents >= 76) {
        fruitsPriceTotal = fruitsPricePerKg * 18 * 4
        resumeFruitsText.textContent = "18Kg"
    }

    resumeFruitsPrice.textContent = fruitsPriceTotal
    if(securityPriceFruits === false) {
        addingToPrice(fruitsPriceTotal)
        securityPriceFruits = true
    }
})

lundiRadioButton.addEventListener('click', () => {
    removeDnone(contentFruitsDelivery)
    resumeFruitsDay.textContent = "lundi"
})

mardiRadioButton.addEventListener('click', () => {
    removeDnone(contentFruitsDelivery)
    resumeFruitsDay.textContent = "mardi"
})

peuImporteRadioButton.addEventListener('click', () => {
    removeDnone(contentFruitsDelivery)
    resumeFruitsDay.textContent = "lundi ou mardi"
})

subFruitsNo.addEventListener('click', () => {
    addDnone(contentFruits)
    addDnone(contentFruitsDelivery)
    addDnone(subFruitsOptions)
    subFruits.textContent = "Non"

    deductToPrice(fruitsPriceTotal)
    fruitsPriceTotal = 0
    securityPriceFruits = false

    mondayCheck.checked = false
    tuesdayCheck.checked = false
    noneCheck.checked = false
})


// Service functions

subServiceYes.addEventListener('click', () => {
    removeDnone(contentService)
    removeDnone(subSerivceOptions)
    subService.textContent = "Oui"

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
            collectPriceTotal = collectPrice * 3
        } else if (pointConso.value === "2") {
            collectPriceTotal = 0
        } else if (pointConso.value === "3") {
            collectPriceTotal = 0
        }
        resumeServicePrice.textContent = collectPriceTotal
    }

    // If coffee grain was choosed
    if(coffeeGrainChecked === true) {
        borneCoffeeCheck.disabled = true
        borneCoffeeCheck.click()
	    removeDnone(resumeServiceSubOptionCoffee)
    }

    // If coffee capsules was choosed
    if(coffeeCapsChecked === true) {
        borneCapsCheck.disabled = true
        borneCapsCheck.click()
	    removeDnone(resumeServiceSubOptionCaps)
    }

    if(securityPriceService === false) {
        addingToPrice(collectPriceTotal)
        securityPriceService = true
    }
})

subServiceNo.addEventListener('click', () => {
    addDnone(contentService)
    addDnone(subSerivceOptions)
    subService.textContent = "Non"

    deductToPrice(collectPriceTotal)
    collectPriceTotal = 0
    securityPriceService = false

    if(borneCoffeeCheck === true) {
        borneCoffeeCheck.disabled = false
        borneCoffee.click()
        borneCoffeeCheck.checked = false
    }

    if(borneCapsCheck === true) {
        borneCapsCheck.disabled = false
        borneCaps.click()
        borneCapsCheck.checked = false
    }

    if(bornePaperCardboardCheck === true) {
        bornePaperCardboard.click()
        bornePaperCardboardCheck.checked = false
    }

    if(bornePlasticCheck === true) {
        bornePlastic.click()
        bornePlasticCheck.checked = false
    }

    if(borneCanCheck === true) {
        borneCan.click()
        borneCanCheck.checked = false
    }

    if(borneGlassCheck === true) {
        borneGlass.click()
        borneGlassCheck.checked = false
    }

    if(borneDibCheck === true) {
        borneDib.click()
        borneDibCheck.checked = false
    }
})

borneCoffee.addEventListener('click', () => {
    borneCoffeeCheck.checked = !borneCoffeeCheck.checked

    if(borneCoffeeCheck.checked === true && borneCoffeeCheck.disabled === false) {
        removeDnone(resumeServiceSubOptionCoffee)
    } else if(borneCoffeeCheck.checked === false && borneCoffeeCheck.disabled === false) {
        addDnone(resumeServiceSubOptionCoffee)
    }
})

borneCaps.addEventListener('click', () => {
    borneCapsCheck.checked = !borneCapsCheck.checked
    
    if(borneCapsCheck.checked === true && borneCapsCheck.disabled === false) {
        removeDnone(resumeServiceSubOptionCaps)
    } else if(borneCapsCheck.checked === false && borneCapsCheck.disabled === false) {
        addDnone(resumeServiceSubOptionCaps)
    }
})

bornePaperCardboard.addEventListener('click', () => {
    removeDnone(messageServiceCheck)
    bornePaperCardboardCheck.checked = !bornePaperCardboardCheck.checked
    
    if(bornePaperCardboardCheck.checked === true) {
        removeDnone(resumeServiceSubOptionPaperCardboard)
    } else {
        addDnone(resumeServiceSubOptionPaperCardboard)
    }

    if(bornePaperCardboardCheck.checked === false && bornePlasticCheck.checked === false && borneCanCheck.checked === false && borneGlassCheck.checked === false && borneDibCheck.checked === false) {
        addDnone(messageServiceCheck)
    }
})

bornePlastic.addEventListener('click', () => {
    removeDnone(messageServiceCheck)
    bornePlasticCheck.checked = !bornePlasticCheck.checked

    if(bornePlasticCheck.checked === true) {
        removeDnone(resumeServiceSubOptionPlastic)
    } else {
        addDnone(resumeServiceSubOptionPlastic)
    }

    if(bornePaperCardboardCheck.checked === false && bornePlasticCheck.checked === false && borneCanCheck.checked === false && borneGlassCheck.checked === false && borneDibCheck.checked === false) {
        addDnone(messageServiceCheck)
    }
})

borneCan.addEventListener('click', () => {
    removeDnone(messageServiceCheck)
    borneCanCheck.checked = !borneCanCheck.checked

    if(borneCanCheck.checked === true) {
        removeDnone(resumeServiceSubOptionCan)
    } else {
        addDnone(resumeServiceSubOptionCan)
    }

    if(bornePaperCardboardCheck.checked === false && bornePlasticCheck.checked === false && borneCanCheck.checked === false && borneGlassCheck.checked === false && borneDibCheck.checked === false) {
        addDnone(messageServiceCheck)
    }
})

borneGlass.addEventListener('click', () => {
    removeDnone(messageServiceCheck)
    borneGlassCheck.checked = !borneGlassCheck.checked

    if(borneGlassCheck.checked === true) {
        removeDnone(resumeServiceSubOptionGlass)
    } else {
        addDnone(resumeServiceSubOptionGlass)
    }

    if(bornePaperCardboardCheck.checked === false && bornePlasticCheck.checked === false && borneCanCheck.checked === false && borneGlassCheck.checked === false && borneDibCheck.checked === false) {
        addDnone(messageServiceCheck)
    }
})

borneDib.addEventListener('click', () => {
    removeDnone(messageServiceCheck)
    borneDibCheck.checked = !borneDibCheck.checked

    if(borneDibCheck.checked === true) {
        removeDnone(resumeServiceSubOptionDib)
    } else {
        addDnone(resumeServiceSubOptionDib)
    }

    if(bornePaperCardboardCheck.checked === false && bornePlasticCheck.checked === false && borneCanCheck.checked === false && borneGlassCheck.checked === false && borneDibCheck.checked === false) {
        addDnone(messageServiceCheck)
    }
})
