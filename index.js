let playerA = ''
let playerB = ''
let moves = -1
let finished = false;
let winner = -1;

const restartGame = () => {
    $('#modal-wrapper').css("display", "none");
    setTimeout(startGame, 500);
}

const checkForWinner = () => {

    let btns = $(".box");

    const cond1 = (btns.get(0).innerText === btns.get(1).innerText && btns.get(1).innerText === btns.get(2).innerText) && (btns.get(0).disabled && btns.get(1).disabled && btns.get(2).disabled);
    const cond2 = (btns.get(3).innerText === btns.get(4).innerText && btns.get(4).innerText === btns.get(5).innerText) && (btns.get(3).disabled && btns.get(4).disabled && btns.get(5).disabled);
    const cond3 = (btns.get(6).innerText === btns.get(7).innerText && btns.get(7).innerText === btns.get(8).innerText) && (btns.get(6).disabled && btns.get(7).disabled && btns.get(8).disabled);
    const cond4 = (btns.get(0).innerText === btns.get(3).innerText && btns.get(3).innerText === btns.get(6).innerText) && (btns.get(0).disabled && btns.get(3).disabled && btns.get(6).disabled);
    const cond5 = (btns.get(1).innerText === btns.get(4).innerText && btns.get(4).innerText === btns.get(7).innerText) && (btns.get(1).disabled && btns.get(4).disabled && btns.get(7).disabled);
    const cond6 = (btns.get(2).innerText === btns.get(5).innerText && btns.get(5).innerText === btns.get(8).innerText) && (btns.get(2).disabled && btns.get(5).disabled && btns.get(8).disabled);
    const cond7 = (btns.get(0).innerText === btns.get(4).innerText && btns.get(4).innerText === btns.get(8).innerText) && (btns.get(0).disabled && btns.get(4).disabled && btns.get(8).disabled);
    const cond8 = (btns.get(2).innerText === btns.get(4).innerText && btns.get(4).innerText === btns.get(6).innerText) && (btns.get(2).disabled && btns.get(4).disabled && btns.get(6).disabled);

    console.log(cond2);

    switch (true) {
        case cond1:
            if (btns.get(0).innerText === playerA) {
                finished = true;
                winner = 0;
            } else if (btns.get(0).innerText === playerB) {
                finished = true;
                winner = 1;
            }
            break;
        case cond2:
            if (btns.get(3).innerText === playerA) {
                finished = true;
                winner = 0;
            } else if (btns.get(3).innerText === playerB) {
                finished = true;
                winner = 1;
            }
            break;
        case cond3:
            if (btns.get(6).innerText === playerA) {
                finished = true;
                winner = 0;
            } else if (btns.get(6).innerText === playerB) {
                finished = true;
                winner = 1;
            }
            break;
        case cond4:
            if (btns.get(0).innerText === playerA) {
                finished = true;
                winner = 0;
            } else if (btns.get(0).innerText === playerB) {
                finished = true;
                winner = 1;
            }
            break;
        case cond5:
            if (btns.get(1).innerText === playerA) {
                finished = true;
                winner = 0;
            } else if (btns.get(1).innerText === playerB) {
                finished = true;
                winner = 1;
            }
            break;
        case cond6:
            if (btns.get(2).innerText === playerA) {
                finished = true;
                winner = 0;
            } else if (btns.get(2).innerText === playerB) {
                finished = true;
                winner = 1;
            }
            break;
        case cond7:
            if (btns.get(0).innerText === playerA) {
                finished = true;
                winner = 0;
            } else if (btns.get(0).innerText === playerB) {
                finished = true;
                winner = 1;
            }
            break;
        case cond8:
            if (btns.get(2).innerText === playerA) {
                finished = true;
                winner = 0;
            } else if (btns.get(2).innerText === playerB) {
                finished = true;
                winner = 1;
            }
            break;

    }

    if (finished || moves === 9) {
        setTimeout(declareWinner, 1000);
        // declareWinner()
    }

}

const declareWinner = () => {
    if (moves === 9) {
        // finished = true;
        winner = -1;
        $('#modal-wrapper').css("display", "block");
        $('.winner-title').html('.. Game Tie ..');
        return;
    }
    if (winner === 0 && finished) {
        $('#modal-wrapper').css("display", "block");
        $('.winner-title').html('&#X1F490 Player A won &#X1F490');
    } else if (winner === 1 && finished) {
        $('#modal-wrapper').css("display", "block");
        $('.winner-title').html('&#X1F490 Player B won &#X1F490');
    }
    $('.start-btn').text('start');
}

const handleClick = (event) => {

    if (moves !== -1) {
        if (moves % 2 === 0) {
            event.target.innerText = playerA;
            event.target.style.color = 'white';
            event.target.disabled = true;
        } else {
            event.target.innerText = playerB;
            event.target.style.color = 'white';
            event.target.disabled = true;
        }
        ++moves;
        // console.log(moves);
        checkForWinner();
    } else {
        alert('Start by clicking button...')
    }

}

const startGame = () => {

    $('.start-btn').text('Restart');

    let btns = $('.box');
    btns.each((index, element) => {
        $(element).unbind().on('click', handleClick);
        $(element).css("color", "transparent");
        $(element).prop('disabled', false)
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



