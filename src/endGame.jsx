import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, Route, Link, Switch, Redirect,
} from 'react-router-dom';

export default function EndGame(props) {
  return (
    <div id="end" style={{ display: props.display.endGame }}>


      {	props.checkedContinent.map((value, index) => {
        if (value) {
          if (props.counts.win === props.countries.copy[index].length - 6) {
            return (
              <div key={index} id="endText">
OMG!!!
                <br />
                {' '}
You are GENIUS
              </div>
            );
          }
          if (props.counts.lose > 2) {
            return (<div key={index}>

              <div key={props.counts.lose} id="endText">GAME OVER</div>
              <div key={props.counts.lose + 1} id="loose">
ВАШ РЕЗУЛЬТАТ
                {
		props.counts.win
	}
                {' '}
                {(props.counts.win > 9 && props.counts.win < 21)
		|| (props.counts.win > 109 && props.counts.win < 121) ? 'БАЛЛОВ'
                  : props.counts.win % 10 === 1 ? 'БАЛЛ' : (props.counts.win % 10 > 1 && props.counts.win % 10 < 5) ? 'БАЛЛA'
                    : 'БАЛЛОВ'}
              </div>

                    </div>
            );
          }
        }
      })
}
      <button id="afterEnd" onClick={e => props.onStart()}>Начать Заново</button>
      <button id="endMenu" onClick={e => props.onBackFromEnd()}>В меню</button>
    </div>

  );
}
