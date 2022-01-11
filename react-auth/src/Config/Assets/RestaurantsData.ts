
const data = {
    restaurants: [
        {
            name: "Noma",
            description: "The World's Best Restaurant 2021, sponsored by S.Pellegrino & Acqua Panna The Best Restaurant in Europe 2021",
            address: "Copenhagen, Denmark",
            imgUrl: "https://www.theworlds50best.com/filestore/jpg/W50BR2021-150-Noma-2.jpg",
        },
        {
            name: "Geranium",
            description: "Pure art on a plate that uses Scandinavia’s seasonal larder as its palette",
            address: "Copenhagen, Denmark",
            imgUrl: "https://www.theworlds50best.com/filestore/jpg/W50BR2021-150-Geranium-3.jpg"
        },
        {
            name: "Asador Etxebarri",
            description: "The ultimate in artisanal cookery from the Basque king of the barbecue",
            address: "Atxondo, Spain",
            imgUrl: "https://www.theworlds50best.com/filestore/jpg/W50BR2021-150-Asador_Extebarri-2.jpg"
        },
        {
            name: "Central",
            description: "Peruvian heritage plated to perfection",
            address: "Lima, Peru",
            imgUrl: "https://www.theworlds50best.com/filestore/jpg/W50BR2021-150-Central-3.jpg"
        },
        {
            name: "Disfrutar",
            description: "A thrilling contemporary experience orchestrated by a talented trio of chefs",
            address: "Barcelona, Spain",
            imgUrl: "https://www.theworlds50best.com/filestore/jpg/W50BR2021-150-Disfrutar-2.jpg"
        },
        {
            name: "Frantzen",
            description: "The Swedish capital’s most famous culinary son invites you to an Asian-tinged house party",
            address: "Stockholm, Sweden",
            imgUrl: "https://www.theworlds50best.com/filestore/jpg/W50BR2021-150-Frantzen-2.jpg"
        },
        {
            name: "Madio",
            description: "Peru and Japan unite to create an explosion of fantastic flavour",
            address: "Lima, Peru",
            imgUrl: "https://www.theworlds50best.com/filestore/png/W50BR2021-Maido-Lima-Peru-2.1.png"
        },
        {
            name: "Odette",
            description: "Julien Royer and team combine elegance on the plate with world-class hospitality in the dining room",
            address: "Singapore",
            imgUrl: "https://www.theworlds50best.com/filestore/jpg/W50BR2021-150-Odette-3.jpg"
        },
        {
            name: "Pujol",
            description: "The spirit of Mexico captured on a plate",
            address: "Mexico City, Mexico",
            imgUrl: "https://www.theworlds50best.com/filestore/jpg/W50BR2021-150-Pujol-3.jpg"
        },
        {
            name: "The Chairmen",
            description: "A demonstration of exemplary Cantonese cuisine",
            address: "Hong Kong, China",
            imgUrl: "https://www.theworlds50best.com/filestore/jpg/W50BR2021-150-The_Chairman-2.jpg"
        },
        {
            name: "Den",
            description: "Japanese cuisine with quality, creativity and a warm welcome (plus an ant or two)",
            address: "Tokyo, Japan",
            imgUrl: "https://www.theworlds50best.com/filestore/jpg/W50BR2021-150-Den-3.jpg"
        },
        {
            name: "Steirereck",
            description: "Rare breeds and forgotten ingredients exquisitely presented in the heart of Vienna",
            address: "Vienna, Austria",
            imgUrl: "https://www.theworlds50best.com/filestore/jpg/W50BR2021-150-Steirereck-1.jpg"
        },
        {
            name: "Don Julio",
            description: "Classic steaks, local Argentine wine and an expert at the grill",
            address: "Buenos Aires, Argentina",
            imgUrl: "https://www.theworlds50best.com/filestore/jpg/W50BR2021-150-Don_Julio-2.jpg"
        },
        {
            name: "Mugaritz",
            description: "Ever-challenging post-modern eating in the heart of the Basque country",
            address: "San Sebastian, Spain",
            imgUrl: "https://www.theworlds50best.com/filestore/jpg/W50BR2021-150-Mugaritz-3.jpg"
        },              
        {
            name: "Lido 84",
            description: "Creative cuisine and sterling service from the charming Camanini brothers",
            address: "Gardone Riviera, Italy",
            imgUrl: "https://www.theworlds50best.com/filestore/jpg/W50BR2021-150-Lido_84-1.jpg"
        },
        {
            name: "Elkano",
            description: "Combining three generations of wisdom and a flaming hot grill",
            address: "Getaria, Spain",
            imgUrl: "https://www.theworlds50best.com/filestore/jpg/W50BR2021-150-Elkano-3.jpg"
        },
        {
            name: "A Casa do Porco",
            address: "São Paulo, Brazil",
            description: "An homage to the hog from São Paulo’s most creative husband-and-wife team",
            imgUrl: "https://www.theworlds50best.com/filestore/jpg/W50BR2021-150-A_Casa_do_Porco-3.jpg"
        },
        {
            name: "Piazza Duomo",
            address: "Alba, Italy",
            description: "Inventive, artistic Italian dishes matched with superb wines in truffle country",
            imgUrl: "https://www.theworlds50best.com/filestore/jpg/W50BR2021-150-Piazza_Duomo-1.jpg"
        },
        {
            name: "Narisawa",
            address: "Tokyo, Japan",
            description: "It’s Satoyama supreme in Narisawa’s nature-inspired kitchen",
            imgUrl: "https://www.theworlds50best.com/filestore/jpg/W50BR2021-150-Narisawa-3.jpg"
        },
        {
            name: "DiverXO",
            address: "Madrid, Spain",
            description: "Showstopping avant-garde cuisine from Spain’s creative wunderkind",
            imgUrl: "https://www.theworlds50best.com/filestore/jpg/W50BR2021-150-Diverxo-2.jpg"
        },
        {
            name: "Hiša Franko",
            address: "Kobarid, Slovenia",
            description: "Self-taught Slovenian Ana Roš serves superlative local produce in a home-from-home setting",
            imgUrl: "https://www.theworlds50best.com/filestore/jpg/W50BR2021-150-Hisa_Franko-1.jpg"
        },
        {
            name: "Restaurant Tim Raue",
            address: "Berlin, Germany",
            description: "Asian-tinted perfection from the charismatic Berlin chef",
            imgUrl: "https://www.theworlds50best.com/filestore/jpg/W50BR2021-150-Restaurant_Tim_Raue-3.jpg"
        },
        {
            name: "Arpege",
            address: "Paris, France",
            description: "Esteemed chef Alain Passard venerates the vegetable at Arpege",
            imgUrl: "https://www.theworlds50best.com/filestore/jpg/W50BR2021-150-Arpege-1.jpg"
        },
        {
            name: "Septime",
            address: "Paris, France",
            description: "Explosive flavours and unsung ingredient mashups thrive at this hip neo-bistro",
            imgUrl: "https://www.theworlds50best.com/filestore/jpg/W50BR2021-150-Septime-2.jpg"
        },
        {
            name: "White Rabbit",
            address: "Moscow, Russia",
            description: "Boundless creativity with Russian ingredients from Moscow’s most famous chef",
            imgUrl: "https://www.theworlds50best.com/filestore/jpg/W50BR2021-150-White_Rabbit-3.jpg"
        },
        {
            name: "Le Calandre",
            address: "Rubano, Italy",
            description: "Contemporary Italian cuisine at a detail-driven favourite",
            imgUrl: "https://www.theworlds50best.com/filestore/jpg/W50BR2021-150-Le_Calandre-3.jpg"
        },
        {
            name: "Quintonil",
            address: "Mexico City, Mexico",
            description: "A taste of pure Mexico from a talented young chef",
            imgUrl: "https://www.theworlds50best.com/filestore/jpg/W50BR2021-150-Quintonil-3.jpg"
        },
        {  
            name: "Benu",
            address: "San Francisco, USA",
            description: "Sensory and sophisticated, Corey Lee’s dishes dazzle in San Francisco",
            imgUrl: "https://www.theworlds50best.com/filestore/jpg/W50BR2021-150-Benu-3.jpg"
        },
        {            
            name: "Reale",
            address: "Castel di Sangro, Italy",
            description: "Explore the complexities of flavour in the Abruzzo hills",
            imgUrl: "https://www.theworlds50best.com/filestore/jpg/W50BR2021-150-Reale-4.jpg"
        },
        {
            name: "Twins Garden",
            address: "Moscow, Russia",
            description: "Superlative home-grown produce presented by Russia’s talented twins",
            imgUrl: "https://www.theworlds50best.com/filestore/jpg/W50BR2021-150-Twins_Garden-1.jpg"
        }
    ]

}

export default data;