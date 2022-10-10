const database = { 
    fish: [ 
        { 
            id: 1,
            name: "Bart", 
            size: 3, 
            species: "krill", 
            harvest_location: "Mediterranean Sea",
            diet: ["algae", "plankton", "snails"]
        },
        { 
            id: 2, 
            name: "Fred", 
            size: 6, 
            species: "Blue Crab", 
            harvest_location: "Maryland",
            diet: ["clams", "oyrsters", "mussels"]
        },
        { 
            id: 3,
            name: "George", 
            size: 10, 
            species: "stingray", 
            harvest_location: "Cayman Islands",
            diet: ["worms", "clams", "snails", "shrimp"]
        }
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}
