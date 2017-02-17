// DATA VALUES
var firstTitle = [
    'Laughing', 'Cold', 'Red', 'Black', 'Deadly', 'Shit', 'Kicking', 'Bastardly', 'Only', 'Charming',
    'Cool', 'Fire', 'Scary', 'Scum', 'Lonely', 'Smashing', 'Defiant', 'Massive', 'I want', 'We\'re', 
    'High on', 'My', 'Serial', 'Ancient'
];
var middleTitle = [
    'On', 'With', 'Over', 'Down', 'Against', 'Turd', 'Mystic', 'Telepathic', 'Giant', 'Tiny'
];
var secondTitle = [
    'Elephants', 'Children', 'Fuckers', 'Bastards', 'Monkeys', 'Pedos', 'Guns', 'Stones', 'Smokers', 'Wizards',
    'Beaters', 'Marshmellows', 'Individuals', 'Introspectives', 'Comics', 'Riders', 'Bandits', 'Home Wreckers',
    'Birds', 'Witch'
];
var genres = [
    'rock', 'punk', 'metal', 'jazz', 'grunge'
]

// GENERATOR FUNCTIONS
function generateArtistTitle(firstTitle, secondTitle) {
    var firstTitleNum = Math.floor((Math.random() * firstTitle.length) + 0);
    var secondTitleNum = Math.floor((Math.random() * secondTitle.length) + 0);
    var theCalc = Math.floor((Math.random() * 3) + 1);
    var the = '';
    if (theCalc == 1) the = 'The ';

    return the + firstTitle[firstTitleNum] + ' ' + secondTitle[secondTitleNum];
}

function generateAlbumTitle(firstTitle, middleTitle, secondTitle) {
    var firstTitleNum = Math.floor((Math.random() * firstTitle.length) + 0);
    var middleTitleNum = Math.floor((Math.random() * middleTitle.length) + 0);
    var secondTitleNum = Math.floor((Math.random() * secondTitle.length) + 0);
    var middleCalc = Math.floor((Math.random() * 2) + 1);
    var middle = '';
    if (middleCalc == 1) middle = middleTitle[middleTitleNum] + ' ';

    return firstTitle[firstTitleNum] + ' ' + middle + secondTitle[secondTitleNum];
}

function generatePrice() {
    var mainPrice = Math.floor((Math.random() * 50) + 1);
    var subPrice = Math.floor((Math.random() * 99) + 0);

    if (subPrice.toString().length == 1) subPrice =  subPrice.toString() + '0';

    return {
        gbp: mainPrice + '.' + subPrice,
        eur: (mainPrice + 5) + '.' + subPrice,
        usd: (mainPrice + 10) + '.' + subPrice
    };
}

function generateGenre(genres) {
    return genres[Math.floor((Math.random() * genres.length) + 0)];
}

function generateMusicLabel(firstTitle, middleTitle) {
    var firstTitleNum = Math.floor((Math.random() * firstTitle.length) + 0);
    var middleTitleNum = Math.floor((Math.random() * middleTitle.length) + 0);

    return middleTitle[middleTitleNum] + ' ' + firstTitle[firstTitleNum];
}

// EXPORT BEHAVIOUR

var obj  = [];
var sku = 1000;
// DATA GENERATION
for(var i=0; i != 60; i+=2) {
    var tmpObj = {
        brand_name: generateArtistTitle(firstTitle, secondTitle),
        album_title: generateAlbumTitle(firstTitle, middleTitle, secondTitle),
        production_date: Math.floor(Math.random() * (2018 - 1990 + 1)) + 1990,
        details: {
            genre: generateGenre(genres),
            record_label: generateMusicLabel(firstTitle, middleTitle)
        },
        variants: {
            0: {
                sku: sku,
                type: 'vinyl',
                price: generatePrice()
            },
            1: {
                sku: sku + 1,
                type: 'cd',
                price: generatePrice()
            }
        }
    }

    obj.push(tmpObj);
    sku++;
}
//console.log(obj);
export default obj;