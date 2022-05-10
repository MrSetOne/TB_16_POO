const civilAircrafts = [
    'assets/avion-civil-1.jpg',
    'assets/avion-civil-2.jpg',
    'assets/avion-civil-3.jpg',
    'assets/avion-civil-4.jpg',
    'assets/avion-civil-5.jpg'
];

const militaryAircrafts = [
    'assets/avion-militar-1.jpg',
    'assets/avion-militar-2.jpg',
    'assets/avion-militar-3.jpg',
    'assets/avion-militar-4.jpg',
    'assets/avion-militar-5.jpg'
];

const civilHelicopters = [
    'assets/helicoptero-civil-1.jpg',
    'assets/helicoptero-civil-2.jpg',
    'assets/helicoptero-civil-3.jpg',
    'assets/helicoptero-civil-4.jpg',
    'assets/helicoptero-civil-5.jpg'
];

const militaryHelicopter = [
    'assets/helicoptero-militar-1.jpg',
    'assets/helicoptero-militar-2.jpg',
    'assets/helicoptero-militar-3.jpg',
    'assets/helicoptero-militar-4.jpg',
    'assets/helicoptero-militar-5.jpg'
];

class Gallery {
    constructor(civilImages, militaryImages) {
        this.civilImages = civilImages;
        this.militaryImages = militaryImages;
    }

    getRandomCivil() {
        return this.civilImages[Math.floor(Math.random() * 5)]
    }

    getRandomMilitary() {
        return this.militaryImages[Math.floor(Math.random() * 5)]
    }

    getAll() {
        const selected = Math.floor(Math.random())
        console.log(selected)
            // return allGallery[Math.floor(Math.random() * 10)]
    }
}

class Painter {
    constructor() {
        this.gallery = this.createGallery();
    }

    createGallery() {
        const body = document.getElementsByTagName('body')[0];
        const section = document.createElement('section');
        body.appendChild(section);
        return section
    }

    createImageTag(imageUrl) {
        return `<picture>
                    <img src="${imageUrl}" />
                </picture>`
    }

    paintSingleImage(imageUrl) {
        this.gallery.innerHTML += this.createImageTag(imageUrl);
    }

    paintMultipleImages(arrayOfImages) {
        for (let i = 0; i < 5; i++) {
            this.paintSingleImage(arrayOfImages[i])
        }
    }
}

const aircrafts = new Gallery(civilAircrafts, militaryAircrafts);
const helicopters = new Gallery(civilHelicopters, militaryHelicopter);
const painter = new Painter();

console.log(helicopters.allGallery)