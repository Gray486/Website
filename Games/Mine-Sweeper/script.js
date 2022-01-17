// Display/UI
var boardSize = window.prompt("boardSize");
var numberOfMines = window.prompt("numberOfMines");
var showMineNum = false

import { TILE_STATUSES, createBoard, marktile, revealTile, checkWin, checkLose } from "./minesweeper.js"

const BOARD_SIZE = boardSize
const NUMBER_OF_MINES = numberOfMines

const board = createBoard(BOARD_SIZE, NUMBER_OF_MINES)
const boardElement = document.querySelector(".board")
const messageText = document.querySelector(".subtext")

start1()
start2()

function start1(){
boardElement.style.setProperty("--size", BOARD_SIZE)
}

function start2(){
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
}

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
    var checkbox = document.getElementById("settingSwitch1");
  
    checkbox.addEventListener('change', function () {
      if (checkbox.checked) {
        // do this
        showMineNum = true
      } else {
        // do that
        showMineNum = false
      }
    })
})

document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.getElementById("settingSwitch2");
  
    checkbox.addEventListener('change', function () {
      if (checkbox.checked) {
        // do this
        document.getElementById("key").style.display = "flex"
      } else {
        // do that
        document.getElementById("key").style.display = "none"
      }
    })
})