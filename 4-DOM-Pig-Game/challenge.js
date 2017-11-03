var scores, roundScore, activePlayer, gamePlaying;

init();

var lastDice;

document.querySelector('.btn-roll').addEventListener('click', function() {
		if(gamePlaying) {
			// Crio um numero aleatorio entre 1 e 6.
			var dice1 = Math.floor(Math.random() * 6) + 1;
			var dice2 = Math.floor(Math.random() * 6) + 1;
			// Retorno o resultado
			document.getElementById('dice-1').style.display = 'block';
			document.getElementById('dice-2').style.display = 'block';
			document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
			document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';

			if(dice1 !== 1 && dice2 !== 1) {
				roundScore += dice1 + dice2;
				document.querySelector('#current-' + activePlayer).textContent = roundScore;
			} else {
				nextPlayer();
			}
		}
			/*
			if(dice !== 1) {
				// Somo ao score
				roundScore += dice;
				//Insere o valor apenas como um texto puro
				document.querySelector('#current-' + activePlayer).textContent = roundScore;
			} else {
				// Operador ternario
				nextPlayer();
			}
		}
		*/
});

document.querySelector('.btn-hold').addEventListener('click', function() {
		if(gamePlaying) {
			//Soma o placar atual ao GLOBAL
		  scores[activePlayer] += roundScore;
			//Atualiza a interface
		  document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
			var input = document.querySelector('.final-score').value;
			var winningScore;

			if(input) {
				winningScore = input;
			} else {
				winningScore = 100;
			}
			console.log(input);
			//Verifica se e vencedor
		  if(scores[activePlayer] >= winningScore) {
				document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
				document.getElementById('dice-1').style.display = 'none';
				document.getElementById('dice-2').style.display = 'none';
				document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
				document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
				gamePlaying = false;
			} else {
				nextPlayer();
			}
		}
});

function nextPlayer() {
	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
	roundScore = 0;

	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';

	//document.querySelector('.player-0-panel').classList.remove('active');
	//document.querySelector('.player-1-panel').classList.add('active');
	//O toggle faz o mesmo.
	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');

	document.getElementById('dice-1').style.display = 'none';
	document.getElementById('dice-2').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
	scores = [0, 0];
	activePlayer = 0;
	roundScore = 0;
	gamePlaying = true;
	//Tratar o css do elemento. No caso, o none deixa em "branco"
	document.getElementById('dice-1').style.display = 'none';
	document.getElementById('dice-2').style.display = 'none';
	//Busca o elemento pelo Id, e mais rapido que o querySelector
	document.getElementById('score-0').textContent = '0';
	document.getElementById('score-1').textContent = '0';
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';
	document.getElementById('name-0').textContent = 'Player 1';
	document.getElementById('name-1').textContent = 'Player 2';
	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');
	document.querySelector('.player-0-panel').classList.add('active');
}
