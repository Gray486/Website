var games = ["dark web tycoon", "mine sweeper", "smashkarts", "tank trouble", "swamp attack", "slope", "1v1.lol", "madalinstuntcars", "burrito bison"]
let searchInput = ""
var filteredGames
var removedElements = []
var notRemovedElements = []

document.getElementById("searchbar").addEventListener('keyup', (x) => {
    searchInput = x.target.value.toLowerCase();

    filteredGames = games.filter((y) => {
        return (
            y.includes(searchInput)
        )
    })

    var inCurrent = {};
    removedElements = []
    for(let x of filteredGames)
    inCurrent[x] = true;
    for(let x of games)
    if(!inCurrent[x])
    removedElements.push(x)

    for (let i=0; i < removedElements.length; i++) {
        document.getElementById(removedElements[i]).style.display = "none"
    }

    for (let i=0; i < filteredGames.length; i++) {
        document.getElementById(filteredGames[i]).style.display = "block"
    }

})