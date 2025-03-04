const { kitties } = require('./datasets/kitties');
const { puppers } = require('./datasets/puppers');
const { mods } = require('./datasets/mods');
const { cakes } = require('./datasets/cakes');
const { classrooms } = require('./datasets/classrooms');
const { breweries } = require('./datasets/breweries');
const { nationalParks } = require('./datasets/nationalParks');
const { weather } = require('./datasets/weather');
const { instructors, cohorts } = require('./datasets/turing');
const { bosses, sidekicks } = require('./datasets/bosses');
const { constellations, stars } = require('./datasets/astronomy');
const { weapons, characters } = require('./datasets/ultima');
const { dinosaurs, humans, movies } = require('./datasets/dinosaurs');


// SINGLE DATASETS
// =================================================================

// DATASET: kitties from ./datasets/kitties
const kittyPrompts = {
  orangePetNames(babyData) {
    // Return an array of just the names of kitties who are orange e.g.
        // ['Tiger', 'Snickers']

        /* CODE GOES HERE */
        const orangeBabies = babyData
        .filter((baby) => {
          return baby.color === 'orange'
        })
        .map(baby => {
          return baby.name
        })
        
        return orangeBabies
        //find only orange cats (filter?)
        //will return an array of cat objects
        //want to return an array of two name (map)
    // Annotation:
    // Write your annotation here as a comment
  },

  sortByAge(babyData) {
    // Sort the kitties by their age

    /* CODE GOES HERE */
      const babyAgesDescending = babyData
      .sort((a,b) => {
        return b.age - a.age
      })

      return babyAgesDescending
    // Annotation:
    // Write your annotation here as a comment
    // a is the first element for comparison
    // b is the second element for comparison
    //sort organizes arrays in alphabetical or numerical order
  },

  growUp(babyData) {
    // Return an array of kitties who have all grown up by 2 years e.g.
    // [{
    //   name: 'Felicia',
    //   age: 4,
    //   color: 'grey'
    // },
    // {
    //   name: 'Tiger',
    //   age: 7,
    //   color: 'orange'
    // },
    // ...etc]

    /* CODE GOES HERE */
    const grownAges = babyData
    .map(baby => baby['age'] = baby.age + 2)

    return babyData
    //re-assigning kitty age key
    //return changed kitty array
  }
};

// PLEASE READ-----------------------
// Currently, your functions are probably using the `kitties` global import variable.
// refactor the above functions using arguments and parameters so that
// they can perform the same utility
// for the kitties or puppers datasets, depending on what arguments you send through.

//changed kitty to baby cause kitties and puppies are baby animals

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: clubs from ./datasets/clubs
const clubPrompts = {
  membersBelongingToClubs(clubs) {
    // Your function should access the clubs data through a parameter (it is being passed as an argument in the test file)
    // Create an object whose keys are the names of people, and whose values are
    // arrays that include the names of the clubs that person is a part of. e.g.
    // {
    //   Louisa: ['Drama', 'Art'],
    //   Pam: ['Drama', 'Art', 'Chess'],
    //   ...etc
    // }

    /* CODE GOES HERE */
    const clubMemberDetails = clubs.reduce((obj, club) => {
      club.members.forEach(member => {
        if (!obj[member]) {
          obj[member] = [];
      }
       obj[member].push(club.club);
     })
        return obj;
    }, {})
    
    return clubMemberDetails
    //console.log(clubMemberDetails)
    // Annotation:
    // Write your annotation here as a comment
    //want a new object from array of objects (reduce()?)
    //want an object with names as keys (...obj[name])
    // each key has a value thats an array of clubs
    //(...obj[name]: [clubs])
    //reduce goes through each club to push into an object
    //for each member in that club { club: 'Drama', members: ['Louisa', 'Pam', 'Nathaniel' ] }
    //if the object does not have the member name as a key
    //make the key in the object and have it equal an empty array
    //push the club that the member is in into their array
    //return the object and then the constant.
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: mods from ./datasets/mods
const modPrompts = {
  studentsPerMod() {
    // Return an array of objects where the keys are mod (the number of the module)
    // and studentsPerInstructor (how many students per instructor there are for that mod) e.g.
    // [
    //   { mod: 1, studentsPerInstructor: 9 },
    //   { mod: 2, studentsPerInstructor: 11 },
    //   { mod: 3, studentsPerInstructor: 10 },
    //   { mod: 4, studentsPerInstructor: 8 }
    // ]

    /* CODE GOES HERE */
      const results = mods.map(mod => {
        let studentsPerInstructor = mod.students/mod.instructors
        let newModDetails = {}
        newModDetails.mod = mod.mod
        newModDetails.studentsPerInstructor = studentsPerInstructor
        return newModDetails
      })

      return results 
    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: cakes from ./datasets/cakes
const cakePrompts = {
  stockPerCake() {
    // Return an array of objects that include just the flavor of the cake and how
    // much of that cake is in stock e.g.
    // [
    //    { flavor: 'dark chocolate', inStock: 15 },
    //    { flavor: 'yellow', inStock: 14 },
    //    ..etc
    // ]

    /* CODE GOES HERE */
      const cakeStock = cakes.map(cake => {
        let cakeFlavorDetails = {}
        cakeFlavorDetails.flavor = cake.cakeFlavor
        cakeFlavorDetails.inStock = cake.inStock
        
        return cakeFlavorDetails
      })

      return cakeStock
    // Annotation:
    // Write your annotation here as a comment
  },

  onlyInStock() {
    // Return an array of only the cakes that are in stock
    // e.g.
    // [
    //   {
    //   cakeFlavor: 'dark chocolate',
    //   filling: null,
    //   frosting: 'dark chocolate ganache',
    //   toppings: ['dutch process cocoa', 'toasted sugar', 'smoked sea salt'],
    //   inStock: 15
    // },
    // {
    //   cakeFlavor: 'yellow',
    //   filling: 'citrus glaze',
    //   frosting: 'chantilly cream',
    //   toppings: ['berries', 'edible flowers'],
    //   inStock: 14
    // },
    // ..etc
    // ]

    /* CODE GOES HERE */
        const inStock = cakes.filter(cake => {
          return cake.inStock > 0
        })

        return inStock
    // Annotation:
    // Write your annotation here as a comment
  },

  totalInventory() {
    // Return the total amount of cakes in stock e.g.
    // 59

    /* CODE GOES HERE */
      const totalStock = cakes
      .map(cake => cake.inStock)
      .reduce((acc, currentValue) => {
        return acc + currentValue
      })

      return totalStock
    // Annotation:
    // Write your annotation here as a comment
  },

  allToppings() {
    // Return an array of all unique toppings (no duplicates) needed to bake
    // every cake in the dataset e.g.
    // ['dutch process cocoa', 'toasted sugar', 'smoked sea salt', 'berries', ..etc]

    /* CODE GOES HERE */
      const toppings = cakes
      .map(cake => cake.toppings)
      .reduce((array, innerTopping) => {
        return [...array, ...innerTopping]
      })
      
      const filteredToppings = toppings
      .filter((currentTopping, index) => {
        return toppings.indexOf(currentTopping) === index
      })

      return filteredToppings
    // Annotation:
    // Write your annotation here as a comment
    //use map to get the toppings
    //use reduce to flatten into one array
  },

  groceryList() {
    // I need to make a grocery list. Please give me an object where the keys are
    // each topping, and the values are the amount of that topping I need to buy e.g.
    // {
    //    'dutch process cocoa': 1,
    //    'toasted sugar': 3,
    //    'smoked sea salt': 3,
    //    'berries': 2,
    //    ...etc
    // }

    /* CODE GOES HERE */
    const toppings = cakes
    .map(cake => cake.toppings)
    .reduce((array, innerTopping) => {
      return [...array, ...innerTopping]
    })

    const list = {}

    const determineList = toppings
    .forEach(topping => {
      list[topping] = (list[topping] || 0) + 1
    })

    return list
    // Annotation:
    // Write your annotation here as a comment
    //each topping in the array counts as a unit
    //list[topping] || 0 returns 
    //the value of list[topping] if it is set, 
    //otherwise 0. Then add one and set it again in the object

    //anotherWay:
    // const allToppings = cakes.reduce((acc, cake) => {
    //  acc.push(cake.toppings)
    // return arr
    //}, []).flat()

    //return acc to tell reduce what the new value of the acc is 
    //return AllToppings

    //const toppingList = allToppings.reduce((obj, topping) => {
    //if(obj[topping]) {
    //obj[topping]++
    //} else {
    //list[topping] = 1
    //}
    //return obj
    //}, {})
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: classrooms from ./datasets/classrooms
const classPrompts = {
  feClassrooms() {
    // Create an array of just the front-end classrooms. e.g.
    // [
    //   { roomLetter: 'A', program: 'FE', capacity: 32 },
    //   { roomLetter: 'C', program: 'FE', capacity: 27 },
    //   { roomLetter: 'E', program: 'FE', capacity: 22 },
    //   { roomLetter: 'G', program: 'FE', capacity: 29 }
    // ]

    /* CODE GOES HERE */
      const frontEndClasses = classrooms
      .filter(classroom => classroom.program === "FE")

      return frontEndClasses
    // Annotation:
    // Write your annotation here as a comment
  },

  totalCapacities() {
    // Create an object where the keys are 'feCapacity' and 'beCapacity',
    // and the values are the total capacity for all classrooms in each program e.g.
    // {
    //   feCapacity: 110,
    //   beCapacity: 96
    // }

    /* CODE GOES HERE */
    const frontEndClassDetails = classrooms
    .filter(classroom => classroom.program === "FE")
    .reduce((sum, currentClass) => {
      let totalFeCapacity = sum + currentClass.capacity
      return totalFeCapacity
    }, 0)
    
    const backEndClassDetails = classrooms
    .filter(classroom => classroom.program === "BE")
    .reduce((sum, currentClass) => {
      let totalBeCapacity = sum + currentClass.capacity
      return totalBeCapacity
    }, 0)

    const classCapacityDetails = {}
    classCapacityDetails.feCapacity = frontEndClassDetails
    classCapacityDetails.beCapacity = backEndClassDetails

    return classCapacityDetails


    // Annotation:
    // Write your annotation here as a comment
  },

  sortByCapacity() {
    // Return the array of classrooms sorted by their capacity (least capacity to greatest)

    /* CODE GOES HERE */
      const increasingClassCapacities = classrooms.sort((a,b) => a.capacity - b.capacity)
      return increasingClassCapacities
    // Annotation:
    // Write your annotation here as a comment
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: books from './datasets/books

const bookPrompts = {
  removeViolence(books) {
    // Your function should access the books data through a parameter (it is being passed as an argument in the test file)
    // return an array of all book titles that are not horror or true crime. Eg:

    //  ['1984', 'The Great Gatsby', 'Lord of the Flies', 'Harry Potter and the Sorcerer\'s Stone',
    //   'The Hitchhiker\'s Guide to the Galaxy', 'Flowers for Algernon', 'Slaughterhouse-Five',
    //   'The Handmaid\'s Tale', 'The Metamorphosis', 'Brave New World', 'Life of Pi',
    //   'The Curious Incident of the Dog in the Night - Time', 'The Bell Jar',
    //   'Catch-22', 'Treasure Island']


    /* CODE GOES HERE */
        const noViolenceBooks = books
        .filter(book => {
          return book.genre !== "Horror"
        })
        .filter(book => {
          return book.genre !== "True Crime"
        })
        .map(book => {
          return book.title
        })

        return noViolenceBooks
    // Annotation:
    // Write your annotation here as a comment

  },
  getNewBooks(books) {
    // return an array of objects containing all books that were
    // published in the 90's and 00's. Inlucde the title and the year Eg:

    // [{ title: 'Harry Potter and the Sorcerer\'s Stone', year: 1997 },
    //  { title: 'Life of Pi', year: 2001 },
    //  { title: 'The Curious Incident of the Dog in the Night-Time', year: 2003 }]

    /* CODE GOES HERE */
    const modernBooks = books.filter(book => {
      return book.published >= 1990
    })

    const modernBookDetails = modernBooks.map(modernBook => {
      const newModernBookDetails = {}
      
      newModernBookDetails.title = modernBook.title
      newModernBookDetails.year = modernBook.published
      
      return newModernBookDetails
      })

      return modernBookDetails
    // Annotation:
    // Write your annotation here as a comment
  }

};


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: weather from './datasets/weather

const weatherPrompts = {
  getAverageTemps() {
    // return an array of all the average temperatures. Eg:
    // [ 40, 40, 44.5, 43.5, 57, 35, 65.5, 62, 14, 46.5 ]

    /* CODE GOES HERE */
    const averageWeather = weather.map(forcast => {
      return (forcast.temperature.high + forcast.temperature.low) / 2
    })

    return averageWeather
    // Annotation:
    // Write your annotation here as a comment
  },

  findSunnySpots() {
    // Return an array of sentences of the locations that are sunny
    // and mostly sunny. Include the location and weather type. Eg:
    // [ 'Atlanta, Georgia is sunny.',
    // 'New Orleans, Louisiana is sunny.',
    // 'Raleigh, North Carolina is mostly sunny.' ]

    /* CODE GOES HERE */
    const sunnySpots = weather.filter(forcast => {
      if(forcast.type === "sunny" || forcast.type === "mostly sunny")
      return forcast
    })
    .map(forcast => {
      return `${forcast.location} is ${forcast.type}.`
    })

    return sunnySpots
    // Annotation:
    // Write your annotation here as a comment
  },

  findHighestHumidity() {
    // Return the location with the highest humidity. Eg:
    // {
    //   location: 'Portland, Oregon',
    //   type: 'cloudy',
    //   humidity: 84,
    //   temperature: { high: 49, low: 38 }
    // }

    /* CODE GOES HERE */
    const highestHumidity = weather.reduce((highestHumidity, currentHumidity) => {
      if(highestHumidity.humidity > currentHumidity.humidity) {
        return highestHumidity
      }
      return currentHumidity
    })

    return highestHumidity
    // Annotation:
    // Write your annotation here as a comment

  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------


// DATASET: nationalParks from ./datasets/nationalParks

const nationalParksPrompts = {
  getParkVisitList() {
    /// Return an object containing the names of which parks I need to visit
    // and the ones I have already visited eg:
    // {
    //   parksToVisit: ["Yellowstone", "Glacier", "Everglades"],
    //   parksVisited: ["Rocky Mountain", "Acadia", "Zion"]
    //}

    /* CODE GOES HERE */
    const visitedParks = nationalParks.filter(nationalPark => {
      return nationalPark.visited
    })
    .map(nationalPark => {
      return nationalPark.name
    })

    const unVisitedParks = nationalParks.filter(nationalPark => {
      return !nationalPark.visited
    })
    .map(nationalPark => {
      return nationalPark.name
    })

    const parkVisitDetails = {}

    parkVisitDetails.parksToVisit = unVisitedParks

    parkVisitDetails.parksVisited = visitedParks

    return parkVisitDetails
    // Annotation:
    // Write your annotation here as a comment
  },

  getParkInEachState() {
    // Return an array of objects where the key is the state and the value is its National Park
    // eg: [ { Colorado: 'Rocky Mountain' },
    // { Wyoming: 'Yellowstone' },
    // { Montana: 'Glacier' },
    // { Maine: 'Acadia' },
    // { Utah: 'Zion' },
    // { Florida: 'Everglades' } ]


    /* CODE GOES HERE */
    const parkStates = nationalParks.map(nationalPark => {
      const newParkStateLocations = {};
        
      newParkStateLocations[nationalPark.location] = nationalPark.name
      return newParkStateLocations
    })

    return parkStates
    // Annotation:
    // Write your annotation here as a comment
  },

  getParkActivities() {
    // Return an array of all the activities I can do
    // in a National Park. Make sure to exclude duplicates. eg:
    // [ 'hiking',
    //   'shoeshoing',
    //   'camping',
    //   'fishing',
    //   'boating',
    //   'watching wildlife',
    //   'cross-country skiing',
    //   'swimming',
    //   'bird watching',
    //   'canyoneering',
    //   'backpacking',
    //   'rock climbing' ]

    /* CODE GOES HERE */
    const totalActivities = nationalParks.map(nationalPark => {
      return nationalPark.activities
    })
    .reduce((newArray, innerActivities) => {
      return [...newArray,...innerActivities]  
    },[])
    console.log(totalActivities)
    
    const uniqueActivities = totalActivities.filter((currentActivity, index) => {
      return totalActivities.indexOf(currentActivity) === index
    })

    return uniqueActivities
    // Annotation:
    // Write your annotation here as a comment
  }
};



// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: breweries from ./datasets/breweries
const breweryPrompts = {
  getBeerCount() {
    // Return the total beer count of all beers for every brewery e.g.
    // 40

    /* CODE GOES HERE */
    const totalBeers = breweries
    .map(brewery => {
      return brewery.beers.length
    })
    .reduce((previousBeer, currentBeer) => {
    return previousBeer + currentBeer
  }, 0)

    return totalBeers
    // Annotation:
    // Write your annotation here as a comment
  },

  getBreweryBeerCount() {
    // Return an array of objects where each object has the name of a brewery
    // and the count of the beers that brewery has e.g.
    // [
    //  { name: 'Little Machine Brew', beerCount: 12 },
    //  { name: 'Ratio Beerworks', beerCount: 5},
    // ...etc.
    // ]

    /* CODE GOES HERE */
    const breweryDetails = breweries.map(brewery => {
      const breweryStockDetails = {}
      breweryStockDetails.name = brewery.name
      breweryStockDetails.beerCount =       brewery.beers.length
      return breweryStockDetails
    })

    return breweryDetails
    // Annotation:
    // Write your annotation here as a comment
  },

  findHighestAbvBeer() {
    // Return the beer which has the highest ABV of all beers
    // e.g.
    // { name: 'Barrel Aged Nature\'s Sweater', type: 'Barley Wine', abv: 10.9, ibu: 40 }

    /* CODE GOES HERE */
    const highestAbvBeer = breweries
    .map(brewery => brewery.beers)
    .reduce((newArray, innerBeers) => {
      return [...newArray,...innerBeers]
    }, [])
    .reduce((highestAbv, currentAbv) => {
      if (highestAbv.abv > currentAbv.abv) {
        return highestAbv
    }
        return currentAbv
    })

    return highestAbvBeer
    // Annotation:
    // Write your annotation here as a comment
    //map to get just the beers for each brewery. 
    //notiticed that the map array produced an array of an array of beer objects
    //used reduce to flatten the array so that it was one whole array of objects
    //used reduce again to find highest abv
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DOUBLE DATASETS
// =================================================================

// DATASET: instructors, cohorts from ./datasets/turing
const turingPrompts = {
  studentsForEachInstructor() {
    // Return an array of instructors where each instructor is an object
    // with a name and the count of students in their module. e.g.
    // [
    //  { name: 'Pam', studentCount: 21 },
    //  { name: 'Robbie', studentCount: 18 }
    // ]

    /* CODE GOES HERE */
    const totalStudentsPerInstructor = instructors.map(instructor => {
      const instructorPerStudentDetails = {}
      cohorts.map(cohort => {
        if(instructor.module === cohort.module) {
        instructorPerStudentDetails.name = instructor.name
        instructorPerStudentDetails.studentCount = cohort.studentCount
        }
      })
        return instructorPerStudentDetails
    })

      return totalStudentsPerInstructor
    // Annotation:
    // Write your annotation here as a comment
  },

  studentsPerInstructor() {
    // Return an object of how many students per teacher there are in each cohort e.g.
    // {
    // cohort1806: 9,
    // cohort1804: 10.5
    // }

    /* CODE GOES HERE */
    const studentPerInstructor = cohorts.reduce((obj, cohort) => {
      let instructorsPerMod = 0
      instructors.forEach(instructor => {
        if(instructor.module === cohort.module) {
          instructorsPerMod++
        }
      })
      obj[`cohort${cohort.cohort}`] = cohort.studentCount/instructorsPerMod
      return obj
    }, {})

    return studentPerInstructor
    // Annotation:
    // Write your annotation here as a comment
  },

  modulesPerTeacher() {
    // Return an object where each key is an instructor name and each value is
    // an array of the modules they can teach based on their skills. e.g.:
    // {
    //     Pam: [2, 4],
    //     Brittany: [2, 4],
    //     Nathaniel: [2, 4],
    //     Robbie: [4],
    //     Leta: [2, 4],
    //     Travis: [1, 2, 3, 4],
    //     Louisa: [1, 2, 3, 4],
    //     Christie: [1, 2, 3, 4],
    //     Will: [1, 2, 3, 4]
    //   }

    /* CODE GOES HERE */
    const modsPerTeacher = instructors.reduce((obj, instructor) => {
      if(!obj[instructor.name]) {
        obj[instructor.name] = []
      }
      cohorts.forEach(cohort => {
        const doesInstructorTeachSubject = instructor.teaches.some((subjectTaught) => {
          return cohort.curriculum.includes(subjectTaught)
        })
        if(doesInstructorTeachSubject) {
           obj[instructor.name].push(cohort.module)
        }
      })
     return obj 
    }, {})

    return modsPerTeacher
    // Annotation:
    // Write your annotation here as a comment
    //go through each instructor and create keys for their names
    //then for each cohort
    //use some to see if the instructor.teaches passes
    //by having at least one subject that passes
    //return cohort.curriculum.includes(subjectTaught) = true
    //if doesInstructorTeachSubject = true push into array
  },

  curriculumPerTeacher() {
    // Return an object where each key is a curriculum topic and each value is
    // an array of instructors who teach that topic e.g.:
    // {
    //   html: [ 'Travis', 'Louisa' ],
    //   css: [ 'Travis', 'Louisa' ],
    //   javascript: [ 'Travis', 'Louisa', 'Christie', 'Will' ],
    //   recursion: [ 'Pam', 'Leta' ]
    // }

    /* CODE GOES HERE */
    const result = cohorts.reduce((obj, cohort) => {
      cohort.curriculum.forEach((curr) => {
        obj[curr] = [];
        instructors.forEach((instructor) => {
          if (instructor.teaches.includes(curr)) {
            obj[curr].push(instructor.name);
          }
        });
      });
      return obj;
    }, {});
    
    return result;
    // Annotation:
    // Write your annotation here as a comment
    //logs
    // {
    //   scope: [ 'Pam', 'Nathaniel', 'Will' ],
    //   recursion: [ 'Pam', 'Leta' ],
    //   node: [ 'Pam', 'Robbie', 'Leta', 'Louisa', 'Christie' ],
    //   oop: [ 'Brittany', 'Nathaniel', 'Will' ],
    //   pwas: [ 'Brittany', 'Robbie', 'Leta', 'Louisa' ],
    //   mobile: [ 'Nathaniel' ],
    //   javascript: [ 'Travis', 'Louisa', 'Christie', 'Will' ],
    //   html: [ 'Travis', 'Louisa' ],
    //   css: [ 'Travis', 'Louisa' ],
    //   react: [ 'Christie', 'Will' ],
    //   redux: [ 'Will' ]
    // }
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: bosses, sidekicks from ./datasets/bosses
const bossPrompts = {
  bossLoyalty() {
    // Create an array of objects that each have the name of the boss and the sum
    // loyalty of all their sidekicks. e.g.:
    // [
    //   { bossName: 'Jafar', sidekickLoyalty: 3 },
    //   { bossName: 'Ursula', sidekickLoyalty: 20 },
    //   { bossName: 'Scar', sidekickLoyalty: 16 }
    // ]

    /* CODE GOES HERE */
    const bossKeys = Object.keys(bosses)
    const newBossDetails = bossKeys.map(boss => {
      let bossSideDetails = {}
      let loyalty = 0
      bosses[boss].sidekicks.forEach(bossSidekick => {
        sidekicks.forEach(sidekick => {
          if(sidekick.name === bossSidekick.name && sidekick.boss === bosses[boss].name) {
            loyalty += sidekick.loyaltyToBoss
            bossSideDetails.bossName = bosses[boss].name
            bossSideDetails.sidekickLoyalty = loyalty
          }
        })
      })
      return bossSideDetails
    })
    return newBossDetails
    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: constellations, stars } from ./datasets/astronomy
const astronomyPrompts = {
  starsInConstellations() {
    // Return an array of all the stars that appear in any of the constellations
    // listed in the constellations object e.g.
    // [
    //   { name: 'Rigel',
    //     visualMagnitude: 0.13,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 860,
    //     color: 'blue' },
    //   { name: 'Betelgeuse',
    //     visualMagnitude: 0.5,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 640,
    //     color: 'red' }
    // ]

    /* CODE GOES HERE */
      const constalltionKeys = Object.keys(constellations)
      
      const starsArray = constalltionKeys.map(constalltionKey => {
        return constellations[constalltionKey].stars
      }).join()
      
      return stars.filter(star => starsArray.includes(star.name))
  
    // Annotation:
    // Write your annotation here as a comment
  },

  starsByColor() {
    // Return an object with keys of the different colors of the stars,
    // whose values are arrays containing the star objects that match e.g.
    // {
    //   blue: [{obj}, {obj}, {obj}, {obj}, {obj}],
    //   white: [{obj}, {obj}],
    //   yellow: [{obj}, {obj}],
    //   orange: [{obj}],
    //   red: [{obj}]
    // }

    /* CODE GOES HERE */
    const colorOfStarDetails = stars.reduce((obj, star) => {
      if(!obj[star.color]) {
        obj[star.color] = []
      }
      obj[star.color].push(star)
      return obj
    }, {})
    
    return colorOfStarDetails
    // Annotation:
    // Write your annotation here as a comment
  },

  constellationsStarsExistIn() {
    // Return an array of the names of the constellations that the brightest stars are part of e.g.
    // Brightest Stars are indicated by visualMagnitude - the lower the number, the brighter the star

    //  [ "Canis Major",
    //    "Carina",
    //    "Boötes",
    //    "Auriga",
    //    "Orion",
    //    "Lyra",
    //    "Canis Minor",
    //    "The Plow",
    //    "Orion",
    //    "The Little Dipper" ]


    /* CODE GOES HERE */
    const arrangeStars = stars.sort((a, b) => a.visualMagnitude - b.visualMagnitude)

    const constellationsStarsExistIn = arrangeStars.map(star => star.constellation)
    
    const removeBlanks = constellationsStarsExistIn.filter(star => star !== '')
    
    return removeBlanks
    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: charaters, weapons from ./datasets/ultima
const ultimaPrompts = {
  totalDamage() {

    // Return the sum of the amount of damage for all the weapons that our characters can use
    // Answer => 113

    /* CODE GOES HERE */
    const allCharacterDamages = characters.map(character => character.weapons).flat()

    const allWeaponDamages = allCharacterDamages.map(weapon => weapons[weapon].damage)  

    const totalDamage = allWeaponDamages.reduce((sum, damage) => {
      let total = sum + damage
      return total
    }, 0)

    return totalDamage
    // Annotation:
    // Write your annotation here as a comment
  },

  charactersByTotal() {

    // Return the sum damage and total range for each character as an object.
    // ex: [ { Avatar: { damage: 27, range: 24 }, { Iolo: {...}, ...}

    /* CODE GOES HERE */
    const characterDetails = characters.reduce((obj, character) => {
      character.weapons.map(weapon => {
        if(!obj[character.name]) {
          obj[character.name] = {}
          obj[character.name].damage = 0
          obj[character.name].range = 0
        }
        obj[character.name].damage += weapons[weapon].damage
        obj[character.name].range += weapons[weapon].range
      })
      return obj
    }, {})
    
    const characterDetailKeys = Object.keys(characterDetails)
    
    const newCharacterDetails = characterDetailKeys.map(key => {
      let object = {}
      object[key] = characterDetails[key]
      return object
    })
    return newCharacterDetails
    // Annotation:
    // Write your annotation here as a comment
  },
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: dinosaurs, humans, movies from ./datasets/dinosaurs
const dinosaurPrompts = {
  countAwesomeDinosaurs() {
    // Return an object where each key is a movie title and each value is the
    // number of awesome dinosaurs in that movie. e.g.:
    // {
    //   'Jurassic Park': 5,
    //   'The Lost World: Jurassic Park': 8,
    //   'Jurassic Park III': 9,
    //   'Jurassic World': 11,
    //   'Jurassic World: Fallen Kingdom': 18
    // }

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  averageAgePerMovie() {
    /* Return an object where each key is a movie director's name and each value is
        an object whose key is a movie's title and whose value is the average age
        of the cast on the release year of that movie.
      e.g.:
      {
        'Steven Spielberg':
          {
            'Jurassic Park': 34,
            'The Lost World: Jurassic Park': 37
          },
        'Joe Johnston':
          {
            'Jurassic Park III': 44
          },
        'Colin Trevorrow':
          {
            'Jurassic World': 56
           },
        'J. A. Bayona':
          {
            'Jurassic World: Fallen Kingdom': 59
          }
      }
    */

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  uncastActors() {
    /*
    Return an array of objects that contain the names of humans who have not been cast in a Jurassic Park movie (yet), their nationality, and their imdbStarMeterRating. The object in the array should be sorted alphabetically by nationality.

    e.g.
      [{
        name: 'Justin Duncan',
        nationality: 'Alien',
        imdbStarMeterRating: 0
      },
      {
        name: 'Karin Ohman',
        nationality: 'Chinese',
        imdbStarMeterRating: 0
      },
      {
        name: 'Tom Wilhoit',
        nationality: 'Kiwi',
        imdbStarMeterRating: 1
      }, {
        name: 'Jeo D',
        nationality: 'Martian',
        imdbStarMeterRating: 0
      }]
    */

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  actorsAgesInMovies() {
    /*
    Return an array of objects for each human and the age(s) they were in the movie(s) they were cast in, as an array of age(s). Only include humans who were cast in at least one movie.

    e.g.
    [ { name: 'Sam Neill', ages: [ 46, 54 ] },
      { name: 'Laura Dern', ages: [ 26, 34 ] },
      { name: 'Jeff Goldblum', ages: [ 41, 45, 63, 66 ] },
      { name: 'Richard Attenborough', ages: [ 70, 74, 92, 95 ] },
      { name: 'Ariana Richards', ages: [ 14, 18 ] },
      { name: 'Joseph Mazello', ages: [ 10, 14 ] },
      { name: 'BD Wong', ages: [ 33, 55, 58 ] },
      { name: 'Chris Pratt', ages: [ 36, 39 ] },
      { name: 'Bryce Dallas Howard', ages: [ 34, 37 ] } ]
    */

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  }
};

module.exports = {
  breweryPrompts,
  turingPrompts,
  clubPrompts,
  bossPrompts,
  classPrompts,
  modPrompts,
  kittyPrompts,
  cakePrompts,
  astronomyPrompts,
  ultimaPrompts,
  nationalParksPrompts,
  weatherPrompts,
  bookPrompts,
  dinosaurPrompts
};
