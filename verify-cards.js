const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];
      
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];
      
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];
      
const all = [valid1, valid2, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery2, mystery3, mystery4, mystery5];

function validateCard(card){
    let sum = card[card.length - 1];
    for(let i = card.length - 2; i >= 0; i--){ 
        (i % 2 === 0)
        ? ( (card[i] * 2) > 9)
            ? sum += (card[i] * 2) - 9
            : sum += card[i] * 2
        : sum += card[i];
    }

    return sum % 10 === 0;
}

function findInvalidCards(cards){
    const invalidCards = [];
    for(let i = 0; i <= cards.length -1; i++){
        if(validateCard(cards[i]) === false){
            invalidCards.push(cards[i]);
        }
    }

    return invalidCards;
}

function idInvalidCardCompanies(invalidCards) {
    const companies = ['Amex', 'Visa', 'Mastercard', 'Discover']
    const companiesIssues = []
    for(let i = 0; i <= invalidCards.length -1; i++) {
        if(invalidCards[i].indexOf(3) === 0) {
            if(companiesIssues.indexOf('Amex') == -1){
                 companiesIssues.push(companies[0]);
            }
        }else if(invalidCards[i].indexOf(4) === 0){
            if(companiesIssues.indexOf('Visa') == -1){
                companiesIssues.push(companies[1]);
            }
        }else if(invalidCards[i].indexOf(5) === 0){
            if(companiesIssues.indexOf('Mastercard') == -1){
                companiesIssues.push(companies[2]);
            }
        }else if(invalidCards[i].indexOf(6) === 0){
            if(companiesIssues.indexOf('Discover') == -1){
                companiesIssues.push(companies[3]);
            }
        }
    }

    return companiesIssues;
}


const invalidCards = findInvalidCards(all)
const campaniesIssues = idInvalidCardCompanies(invalidCards)
console.log(campaniesIssues)
      
              
