export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}

const database = { 
    fish: [ 
        { 
            name: "Bart", 
            size: 3, 
            species: "krill", 
            harvest_location: "Mediterranean Sea",
            diet: ["algae", "plankton", "snails"]
        },
        { 
            name: "Fred", 
            size: 6, 
            species: "Blue Crab", 
            harvest_location: "Maryland",
            diet: ["clams", "oyrsters", "mussels"]
        },
        { 
            name: "George", 
            size: 10, 
            species: "stingray", 
            harvest_location: "Cayman Islands",
            diet: ["worms", "clams", "snails", "shrimp"]
        }
    ]
}
