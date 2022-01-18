// Display/UI
document.getElementById("key0").style.display = "none"
document.getElementById("key1").style.display = "none"

var boardSize = window.prompt("Size of the board. (it will be a square so this is the length and width.)");
var numberOfMines = window.prompt("Number of Mines on the map.");
var showMineNum = false

var widthLengthMines = (boardSize * boardSize) + (numberOfMines * 10)

import { TILE_STATUSES, createBoard, marktile, revealTile, checkWin, checkLose } from "./minesweeper.js"

const BOARD_SIZE = boardSize
const NUMBER_OF_MINES = numberOfMines

const board = createBoard(BOARD_SIZE, NUMBER_OF_MINES)
const boardElement = document.querySelector(".board")
const messageText = document.querySelector(".subtext")

boardElement.style.setProperty("--size", BOARD_SIZE)

board.forEach(row => {
    row.forEach(tile => {
        boardElement.append(tile.element)
        tile.element.addEventListener("click", () => {
            revealTile(board, tile)
            checkGameEnd()
        })
        tile.element.addEventListener("contextmenu", e => {
            e.preventDefault()
            marktile(tile)
            listMinesLeft()
        })
    })
})
document.getElementById("subtext").innerHTML = "Mines Left: " + NUMBER_OF_MINES

function listMinesLeft() {
    const markedTilesCount = board.reduce((count, row) => {
        return (
            count + row.filter(tile => tile.status === TILE_STATUSES.MARKED).length
        )
    }, 0)
        document.getElementById("subtext").innerHTML = "Mines Left: " + (NUMBER_OF_MINES - markedTilesCount)
}

function checkGameEnd(){
    const win = checkWin(board)
    const lose = checkLose(board)

    if (win || lose) {
            boardElement.addEventListener("click", stopProp, {capture: true})
            boardElement.addEventListener("contextmenu", stopProp, {capture: true})
    }

    if(win){
        messageText.textContent = "You Win!!!"
        board.forEach(row =>{
            row.forEach(tile =>{
                if ((tile.mine) && (tile.status === TILE_STATUSES.HIDDEN)) {widthLengthMines = widthLengthMines + 10}
                if (tile.status === TILE_STATUSES.MARKED || TILE_STATUSES.NUMBER || TILE_STATUSES.HIDDEN || TILE_STATUSES.MINE) {tile.status = TILE_STATUSES.WIN}
            })
        })
        document.getElementById("subsubtext").innerHTML = "Points: " + widthLengthMines
    }
    if(lose){
        messageText.textContent = "You Lost, to restart just refresh the page."
        board.forEach(row =>{
            row.forEach(tile =>{
                if (tile.status === TILE_STATUSES.MARKED && tile.mine) {tile.status = TILE_STATUSES.Y}
                if (tile.status === TILE_STATUSES.MARKED && !tile.mine) {tile.status = TILE_STATUSES.N}
                if (tile.mine) revealTile(board, tile)
            })
        })
    }
}

function stopProp(e) {
    e.stopImmediatePropagation()
}

//Settings

document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.getElementById("settingSwitch2");
  
    checkbox.addEventListener('change', function () {
      if (checkbox.checked) {
        // do this
        console.log("block")
        document.getElementById("key0").style.display = "block"
        document.getElementById("key1").style.display = "block"
      } else {
        // do that
        console.log("none")
        document.getElementById("key0").style.display = "none"
        document.getElementById("key1").style.display = "none"
      }
    })
})