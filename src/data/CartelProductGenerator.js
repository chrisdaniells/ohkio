export default class CartelProductGenerator {
    constructor() {
        this.products = 0;
        this.firstTitles = this.getFirstTitles();
        this.middleTitles = this.getMiddleTitles();
        this.secondTitles = this.getSecondTitles();
        this.genres = this.getGenres();
        this.albumCovers = this.getAlbumCovers();
        this.skuCount = 1000;
        this.idCount = 5000;
        
        this.config = {
            number_of_products: 50
        }
    }

    getProducts() {
        if (this.products === 0) {
            this.products = this.buildProducts();
        }
        return this.products;
        
    }

    buildProducts() {
        let array = [];
        for(let c = 0; c != this.config.number_of_products; c++) {
            array.push(this.buildProduct());
        }

        return array;
    }

    buildProduct() {
        let productObj = {};

        productObj.id = this.idCount;
        productObj.brand_name = this.generateArtistTitle();
        productObj.product_title = this.generateAlbumTitle();
        productObj.production_date = Math.floor(Math.random() * (2018 - 1990 + 1)) + 1990;
        productObj.details = {
            genre: this.generateGenre(),
            record_label: this.generateMusicLabel()
        }
        productObj.variants = this.buildVariants();
        productObj.product_images = {
            main: this.generateAlbumCover(),
            additional: []
        };
        
        this.idCount++;

        return productObj
    }

    buildVariants() {
        let c = Math.floor(Math.random() * 3) + 1;
        let variantObj = {};

        for (let i = 0; i != c; i++) {
            let tmpObj = {};

            tmpObj.sku = this.skuCount;
            switch(i) {
                case 0:
                    tmpObj.type = 'vinyl'
                    break;
                case 1:
                    tmpObj.type = 'CD'
                    break;
                case 2:
                    tmpObj.type = 'digital'
            }
            tmpObj.price = this.generatePrice();
            this.skuCount++;

            variantObj[i] = tmpObj;
        }

        return variantObj;
    }

    generateArtistTitle() {
        let firstTitleNum = Math.floor((Math.random() * this.firstTitles.length) + 0);
        let secondTitleNum = Math.floor((Math.random() * this.secondTitles.length) + 0);
        let theCalc = Math.floor((Math.random() * 3) + 1);
        let the = '';
        if (theCalc == 1) the = 'The ';

        return the + this.firstTitles[firstTitleNum] + ' ' + this.secondTitles[secondTitleNum];
    }

    generateAlbumTitle() {
        let firstTitleNum = Math.floor((Math.random() * this.firstTitles.length) + 0);
        let middleTitleNum = Math.floor((Math.random() * this.middleTitles.length) + 0);
        let secondTitleNum = Math.floor((Math.random() * this.secondTitles.length) + 0);
        let middleCalc = Math.floor((Math.random() * 2) + 1);
        let middle = '';
        if (middleCalc == 1) middle = this.middleTitles[middleTitleNum] + ' ';

        return this.firstTitles[firstTitleNum] + ' ' + middle + this.secondTitles[secondTitleNum];
    }

    generatePrice() {
        let mainPrice = Math.floor((Math.random() * 50) + 1);
        let subPrice = Math.floor((Math.random() * 99) + 0);

        if (subPrice.toString().length == 1) subPrice =  subPrice.toString() + '0';

        return {
            gbp: mainPrice + '.' + subPrice,
            eur: (mainPrice + 5) + '.' + subPrice,
            usd: (mainPrice + 10) + '.' + subPrice
        };
    }

    generateGenre() {
        return this.genres[Math.floor((Math.random() * this.genres.length) + 0)];
    }

    generateAlbumCover() {
        return this.albumCovers[Math.floor((Math.random() * this.albumCovers.length) + 0)];
    }

    generateMusicLabel() {
        var firstTitleNum = Math.floor((Math.random() * this.firstTitles.length) + 0);
        var middleTitleNum = Math.floor((Math.random() * this.middleTitles.length) + 0);

        return this.middleTitles[middleTitleNum] + ' ' + this.firstTitles[firstTitleNum];
    }

    getFirstTitles() {
        return [
            'Laughing', 'Cold', 'Red', 'Black', 'Deadly', 'Shit', 'Kicking', 'Bastardly', 'Only', 'Charming',
            'Cool', 'Fire', 'Scary', 'Scum', 'Lonely', 'Smashing', 'Defiant', 'Massive', 'I want', 'We\'re', 
            'High on', 'My', 'Serial', 'Ancient'
        ];
    }

    getMiddleTitles() {
        return [
            'On', 'With', 'Over', 'Down', 'Against', 'Turd', 'Mystic', 'Telepathic', 'Giant', 'Tiny'
        ];
    }

    getSecondTitles() {
        return [
            'Elephants', 'Children', 'Fuckers', 'Bastards', 'Monkeys', 'Pedos', 'Guns', 'Stones', 'Smokers', 'Wizards',
            'Beaters', 'Marshmellows', 'Individuals', 'Introspectives', 'Comics', 'Riders', 'Bandits', 'Home Wreckers',
            'Birds', 'Witch'
        ];
    }

    getGenres() {
        return [
            'rock', 'punk', 'metal', 'jazz', 'grunge'
        ];
    }

    getAlbumCovers() {
        return [
            'https://upload.wikimedia.org/wikipedia/en/6/62/AFI_-_Black_Sails_in_the_Sunset_cover.jpg',
            'https://upload.wikimedia.org/wikipedia/en/0/03/OnlyRevolutions.jpg',
            'https://upload.wikimedia.org/wikipedia/en/7/7b/Brand_New_Deja_Entendu.jpg',
            'https://f4.bcbits.com/img/a1312192493_10.jpg',
            'https://images-na.ssl-images-amazon.com/images/I/81Xq%2BaaZSwL._SY355_.jpg',
            'https://www.punkrocktheory.com/sites/default/files/styles/image_style_square/public/entershikari.jpg',
            'http://media.tumblr.com/05e583863678f535f2c8c9462f430f70/tumblr_inline_mu3pfzFth61qzxlbn.jpg',
            'https://upload.wikimedia.org/wikipedia/en/7/7b/Without_you_im_nothing.jpg',
            'https://upload.wikimedia.org/wikipedia/en/b/b0/Royal_Blood_-_Royal_Blood_(Artwork).jpg',
            'http://cf-images.emusic.com/music/images/album/153/446/15344699/600x600.jpg',
            'https://ebruyildiz.wordpress.com/files/2009/01/photograph7.jpg',
            'https://artistxite.com/imgcache/album/005/359/005359030_500.jpg',
            'https://images-eu.ssl-images-amazon.com/images/I/61EC4GDJisL._SS500.jpg',
            'https://images-eu.ssl-images-amazon.com/images/I/517CmdGMrTL._SS500.jpg',
            'https://cbsradionews.files.wordpress.com/2014/07/weezer-everything-album.jpg'
        ];
    }
}