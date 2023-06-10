let playerA = ''
let playerB = ''
let moves = -1
let finished = false;
let winner = -1;

const restartGame = () => {
    document.getElementById('modal-wrapper').style.display = 'none';
    setTimeout(startGame, 500);
}

const checkForWinner = () => {

    let btns = document.querySelectorAll('.box');

    // const cond1 = (btns.item(0).innerText && btns.item(0).disabled === btns.item(1).innerText && btns.item(1).disabled === btns.item(2).innerText && btns.item(2).disabled)

    const cond1 = (btns.item(0).innerText === btns.item(1).innerText && btns.item(1).innerText === btns.item(2).innerText) && (btns.item(0).disabled && btns.item(1).disabled && btns.item(2).disabled);
    const cond2 = (btns.item(3).innerText === btns.item(4).innerText && btns.item(4).innerText === btns.item(5).innerText) && (btns.item(3).disabled && btns.item(4).disabled && btns.item(5).disabled);
    const cond3 = (btns.item(6).innerText === btns.item(7).innerText && btns.item(7).innerText === btns.item(8).innerText) && (btns.item(6).disabled && btns.item(7).disabled && btns.item(8).disabled);
    const cond4 = (btns.item(0).innerText === btns.item(3).innerText && btns.item(3).innerText === btns.item(6).innerText) && (btns.item(0).disabled && btns.item(3).disabled && btns.item(6).disabled);
    const cond5 = (btns.item(1).innerText === btns.item(4).innerText && btns.item(4).innerText === btns.item(7).innerText) && (btns.item(1).disabled && btns.item(4).disabled && btns.item(7).disabled);
    const cond6 = (btns.item(2).innerText === btns.item(5).innerText && btns.item(5).innerText === btns.item(8).innerText) && (btns.item(2).disabled && btns.item(5).disabled && btns.item(8).disabled);
    const cond7 = (btns.item(0).innerText === btns.item(4).innerText && btns.item(4).innerText === btns.item(8).innerText) && (btns.item(0).disabled && btns.item(4).disabled && btns.item(8).disabled);
    const cond8 = (btns.item(2).innerText === btns.item(4).innerText && btns.item(4).innerText === btns.item(6).innerText) && (btns.item(2).disabled && btns.item(4).disabled && btns.item(6).disabled);

    switch (true) {
        case cond1:
            if (btns.item(0).innerHTML === playerA) {
                finished = true;
                winner = 0;
            } else if (btns.item(0).innerHTML === playerB) {
                finished = true;
                winner = 1;
            }
            break;
        case cond2:
            if (btns.item(3).innerHTML === playerA) {
                finished = true;
                winner = 0;
            } else if (btns.item(3).innerHTML === playerB) {
                finished = true;
                winner = 1;
            }
            break;
        case cond3:
            if (btns.item(6).innerHTML === playerA) {
                finished = true;
                winner = 0;
            } else if (btns.item(6).innerHTML === playerB) {
                finished = true;
                winner = 1;
            }
            break;
        case cond4:
            if (btns.item(0).innerHTML === playerA) {
                finished = true;
                winner = 0;
            } else if (btns.item(0).innerHTML === playerB) {
                finished = true;
                winner = 1;
            }
            break;
        case cond5:
            if (btns.item(1).innerHTML === playerA) {
                finished = true;
                winner = 0;
            } else if (btns.item(1).innerHTML === playerB) {
                finished = true;
                winner = 1;
            }
            break;
        case cond6:
            if (btns.item(2).innerHTML === playerA) {
                finished = true;
                winner = 0;
            } else if (btns.item(2).innerHTML === playerB) {
                finished = true;
                winner = 1;
            }
            break;
        case cond7:
            if (btns.item(0).innerHTML === playerA) {
                finished = true;
                winner = 0;
            } else if (btns.item(0).innerHTML === playerB) {
                finished = true;
                winner = 1;
            }
            break;
        case cond8:
            if (btns.item(2).innerHTML === playerA) {
                finished = true;
                winner = 0;
            } else if (btns.item(2).innerHTML === playerB) {
                finished = true;
                winner = 1;
            }
            break;

    }

    if (finished || moves === 9) {
        declareWinner()
    }

}

const declareWinner = () => {
    if (moves === 9) {
        finished = true;
        document.getElementById('modal-wrapper').style.display = 'block';
    }
    if (winner === 0 && finished) {
        document.getElementById('modal-wrapper').style.display = 'block';
        document.querySelector(".winner-title").innerHTML = '&#X1F490 Player A won &#X1F490'
    } else if (winner === 1 && finished) {
        document.getElementById('modal-wrapper').style.display = 'block';
        document.querySelector(".winner-title").innerHTML = 'Player B won ...'
    }
    document.querySelector('.start-btn').innerText = "Start";
}

const handleClick = (event) => {

    if (moves !== -1) {
        if (moves % 2 === 0) {
            event.target.innerText = playerA;
            event.target.style.color = 'black';
            event.target.disabled = true;
        } else {
            event.target.innerText = playerB;
            event.target.style.color = 'black';
            event.target.disabled = true;
        }
        ++moves;
        // console.log(moves);
        checkForWinner();
    } else {
        alert('Start by clicking button...')
    }
    // console.log(event.target.innerText);

}

const startGame = () => {

    document.querySelector('.start-btn').innerText = "Restart";

    let btns = document.querySelectorAll('.box');
    btns.forEach(element => {
        element.addEventListener('click', handleClick);
        element.style.color = 'transparent';
        element.disabled = false;
        // console.log(element.name);
    })

    finished = false
    moves = 0
    let randNum = Math.floor((Math.random() * 10) + 1)

    if (randNum % 2 === 0) {
        playerA = 'X';
        playerB = 'O'
    } else {
        playerA = 'O';
        playerB = 'X';
    }
    alert('PlayerA : \'' + playerA + '\' and PlayerB : \'' + playerB + '\'');

}



