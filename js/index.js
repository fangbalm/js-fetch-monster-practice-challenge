

// CREATE MONSTER FORM 



// STEP 1 == GRAB ELEMENTS OFF THE DOM 

const createMonster = document.querySelector('#create-monster')
const monsterContainer = document.querySelector('#monster-container')
const monstersPerPage = 50

// NOTE: IF ELEMENTS AREN'T BEING GRABBED, MAKE SURE THE CONTENT IS BEING LOADED PROPERLY. CHECK HTML DEFERS/SCRIPT TAGS/DOMCONTENTLOADED  



// STEP 2 == NETWORK FETCH (GET) REQUEST TO GET MONSTER ARRAY
function getMonsters() {
    fetch(`http://localhost:3000/monsters?_limit=${monstersPerPage}`) //denoting the (?) and _limit= is what stops the fetch request at 50
    .then(response => response.json())
    .then(createMonsterDiv)
}

// STEP 3 == CREATE THE HTML TO HOLD THE ARRAY INFORMATION
function createMonsterDiv(monsterArray) {
    monsterArray.forEach(monster => {
        // You could either do innerHTML or assign individual elements 
        monsterContainer.innerHTML += `
        <div class="monster" data-id=${monster.id}>
        <h4>Name: ${monster.name}</h2>
        <h4>Age: ${monster.age}</h2>
        <p><strong>Description:</strong> ${monster.description}</p>
        </div>
        `
    })
}

// STEP 4 ==  NETWORK FETCH (POST) REQUEST TO GET MONSTER ARRAY

function createForm(){
    createMonster.innerHTML += `
        <form class="add-monster-form">
            <h3>Create A Monster!</h3>
            <input
                type="text"
                name="name"
                value=""
                placeholder="Enter name..."
                class="input-text"
            />
            <br />
            <input
                type="text"
                name="age"
                value=""
                placeholder="Enter age..."
                class="input-text"
            />
            <br />
            <input
                type="text"
                name="description"
                value=""
                placeholder="Enter description..."
                class="input-text"
            />
            <br />
            <br>
            <input 
                type="submit" 
                name="submit" 
                value="Create Monster" 
                class="submit" 
            />
        </form>`
}



// INVOKING FUNCTIONS
getMonsters()
createForm()