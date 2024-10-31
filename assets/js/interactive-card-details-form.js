
const alertTexts = document.querySelectorAll('.alert-text');
 
function showCardOwnerName(){
  if(nameInput.value.trim() !== ''){
    cardHolderName.innerText = nameInput.value.toLocaleUpperCase('tr');
    alertTexts[0].classList.add('alert-text--transparent');
    nameInput.style.outlineColor = 'var(--outline-color)';
    nameInput.style.border = '1px solid var(--light-gray)';
  } else{
    cardHolderName.innerText = 'JANE APPLESEED';
    alertTexts[0].classList.remove('alert-text--transparent');
    nameInput.style.outlineColor = 'var(--red)';
    nameInput.style.border = '2px solid var(--red)';
  }
}

function showCardNumber(){
  const rawValue = numberInput.value;
  const formattedNumber = rawValue.replace(/(\d{4})(?=\d)/g, '$1 ').trim();

  numberInput.value = formattedNumber;
  cardNumber.innerText = formattedNumber.toLocaleUpperCase('tr');
  // Bu kısımlarda chatGPTden yardım aldım :(
  if(numberInput.value.trim() === ''){
    cardNumber.innerText = '0000 0000 0000 0000';
    alertTexts[1].classList.remove('alert-text--transparent');
    alertTexts[1].innerText = 'Can’t be blank';
    numberInput.style.outlineColor = 'var(--red)';
    numberInput.style.border = '2px solid var(--red)';
  } else if(!(/^\d+$/.test(rawValue.replace(/\s/g, '')))){
    alertTexts[1].classList.remove('alert-text--transparent');
    alertTexts[1].innerText = 'Wrong format, numbers only';
    numberInput.style.outlineColor = 'var(--red)';
    numberInput.style.border = '2px solid var(--red)';
  } else{
    alertTexts[1].classList.add('alert-text--transparent');
    numberInput.style.outlineColor = 'var(--outline-color)';
    numberInput.style.border = '1px solid var(--light-gray)';
  }
}

function showCardMonth(){
  if(monthInput.value.trim() === ''){
    expDateMonth.innerText = '00';
    alertTexts[2].classList.remove('alert-text--transparent');
    alertTexts[2].innerText = 'Can’t be blank';
    monthInput.style.outlineColor = 'var(--red)';
    monthInput.style.border = '2px solid var(--red)';
  } else if(Number(monthInput.value) > 12){
    alertTexts[2].classList.remove('alert-text--transparent');
    alertTexts[2].innerText = 'Cannot be greater than 12';
    monthInput.style.outlineColor = 'var(--red)';
    monthInput.style.border = '2px solid var(--red)';
  } else{
    expDateMonth.innerText = monthInput.value.toLocaleUpperCase('tr');
    alertTexts[2].classList.add('alert-text--transparent');
    monthInput.style.outlineColor = 'var(--outline-color)';
    monthInput.style.border = '1px solid var(--light-gray)';
  }
}

function showCardYear(){
  if(yearInput.value.trim() !== ''){
    expDateYear.innerText = yearInput.value.toLocaleUpperCase('tr');
    alertTexts[2].classList.add('alert-text--transparent');
    yearInput.style.outlineColor = 'var(--outline-color)';
    yearInput.style.border = '1px solid var(--light-gray)';
  } else{
    expDateYear.innerText = '00';
    alertTexts[2].classList.remove('alert-text--transparent');
    yearInput.style.outlineColor = 'var(--red)';
    yearInput.style.border = '2px solid var(--red)';
  }
}

function showCardCvc(){
  if(cvcInput.value.trim() !== ''){
    cvc.innerText = cvcInput.value.toLocaleUpperCase('tr');
    alertTexts[3].classList.add('alert-text--transparent');
    cvcInput.style.outlineColor = 'var(--outline-color)';
    cvcInput.style.border = '1px solid var(--light-gray)';
  } else{
    cvc.innerText = '000';
    alertTexts[3].classList.remove('alert-text--transparent');
    cvcInput.style.outlineColor = 'var(--red)';
    cvcInput.style.border = '2px solid var(--red)';
  }
}

const cardInfos = document.querySelector('.card-infos');
const addedCard = document.querySelector('.added-card');

function addCardInfos(){
  if(nameInput.value === '' || numberInput.value.length < 19 || monthInput.value.length < 2 || yearInput.value.length < 2  || cvcInput.value.length < 3){
    alert('The card information is incorrect. Please check your entries.');
  } else{
    cardInfos.style.display = 'none';
    addedCard.style.display = 'flex';
  }
}

function continueCardInfos(){
  addedCard.style.display = 'none';
  cardInfos.style.display = 'flex';
  nameInput.value = '';
  numberInput.value = '';
  monthInput.value = '';
  yearInput.value = '';
  cvcInput.value = '';
}

nameInput.addEventListener('input', showCardOwnerName);
numberInput.addEventListener('input', showCardNumber);
monthInput.addEventListener('input', showCardMonth);
yearInput.addEventListener('input', showCardYear);
cvcInput.addEventListener('input', showCardCvc);
confirmBtn.addEventListener('click', addCardInfos);
continueBtn.addEventListener('click', continueCardInfos);