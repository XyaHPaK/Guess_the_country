import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, Route, Link, Switch, Redirect,
} from 'react-router-dom';
import {
  fullCounties, asiaChange, europeChange, africaChange,
  southAmericaChange, northAmericaChange, oceaniaChange,
} from './countries';
import Game from './game';
import EndGame from './endGame';
import StartPage from './startGame';


class Start extends React.Component {
  constructor() {
    super();
    this.state = {
      countries: {
        all: [fullCounties.concat(), asiaChange.concat(), europeChange.concat(), africaChange.concat(), southAmericaChange.concat(),
          northAmericaChange.concat(), oceaniaChange.concat()],
        copy: [fullCounties.concat(), asiaChange.concat(), europeChange.concat(), africaChange.concat(), southAmericaChange.concat(),
          northAmericaChange.concat(), oceaniaChange.concat()],
      },
      display: {
        wrap: 'none',
        wrapStart: 'block',
        endGame: 'none',
        btnContinue: 'none',
      },
      counts: {
        win: 0,
        lose: 0,
        hints: 3,
      },
			 recordes: {
        flagsRecordsPoint: [null, null, null, null, null, null, null],
        flagsRecordsName: [null, null, null, null, null, null, null],
        capitalsRecordsPoint: [null, null, null, null, null, null, null],
        capitalsRecordsName: [null, null, null, null, null, null, null],
      },
      path: {
        opacity: [0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7],
      },
      buttonHint: {
        background: require('../assets/images/button1.png'),
        disabled: false,
      },
      backgrounds: [require('../assets/images/BtnBlkWhtBrdr.png'), require('../assets/images/BtnBlkWhtBrdr.png'),
        require('../assets/images/BtnBlkWhtBrdr.png'), require('../assets/images/BtnBlkWhtBrdr.png')],
      value: [],
      valueCapital: [],
      className: ['unblok', 'unblok', 'unblok', 'unblok'],
      checkedChangeGame: [true, false],
      checkedChangeGameName: ['Угадай страну по флагу', 'Угадай столицу страны'],
      checkedContinent: [true, false, false, false, false, false, false],
      checkedContinentName: ['Весь мир', 'Азия', 'Европа', 'Африка', 'Южная Америка', 'Северная Америка', 'Океания'],
      positionRight: -100,
      positionRightTable: -100,
      positionLeftRules: -100,
    };
    this.onChange = this.onChange.bind(this);
    this.onStart = this.onStart.bind(this);
    this.onBack = this.onBack.bind(this);
    this.onChangeContinent = this.onChangeContinent.bind(this);
    this.onChangeGame = this.onChangeGame.bind(this);
    this.onHints = this.onHints.bind(this);
    this.onOptions = this.onOptions.bind(this);
    this.onRecordsTable = this.onRecordsTable.bind(this);
    this.onRules = this.onRules.bind(this);
    this.onContinue = this.onContinue.bind(this);
    this.onBackFromEnd = this.onBackFromEnd.bind(this);
    this.onInteractive = this.onInteractive.bind(this);
  }

  componentDidUpdate() {
    const local = JSON.stringify(this.state);
    localStorage.setItem('saveGame', local);
  }


  componentWillMount() {
    const getLocal = JSON.parse(localStorage.getItem('saveGame'));
    if (getLocal) {
      this.setState({
        ...getLocal,
        className: ['unblok', 'unblok', 'unblok', 'unblok'],
        buttonHint: {
          background: require('../assets/images/button1.png'),
          disabled: false,
        },
        backgrounds: [require('../assets/images/BtnBlkWhtBrdr.png'), require('../assets/images/BtnBlkWhtBrdr.png'),
          require('../assets/images/BtnBlkWhtBrdr.png'), require('../assets/images/BtnBlkWhtBrdr.png')],

      });
    }

    const getRecords = JSON.parse(localStorage.getItem('recordes'));
    if (getRecords) {
      this.setState({
        recordes: {
          ...getRecords,
        },
      });
    }
  }


  onAfterCheck() {
    const arr = this.state.countries.all.concat();
    const arrCopy = this.state.countries.copy.concat();
    arr.splice(0, 1);
    function compareRandom(a, b) {
      return Math.random() - 0.5;
		  }
		  arr.sort(compareRandom);
		 const arrSort = [arr[0], arr[1], arr[2], arr[3]];
		  arrSort.sort(compareRandom).sort(compareRandom);
    this.setState({
      countries: {
        all: arr,
        copy: arrCopy,
      },
      value: [arrSort[0].country, arrSort[1].country,
        arrSort[2].country, arrSort[3].country],
      valueCapital: [arrSort[0].capital, arrSort[1].capital,
        arrSort[2].capital, arrSort[3].capital],
      backgrounds: [require('../assets/images/BtnBlkWhtBrdr.png'), require('../assets/images/BtnBlkWhtBrdr.png'),
						 require('../assets/images/BtnBlkWhtBrdr.png'), require('../assets/images/BtnBlkWhtBrdr.png')],
      className: ['unblok', 'unblok', 'unblok', 'unblok'],
      buttonHint: {
        background: require('../assets/images/button1.png'),
        disabled: false,
      },
    });
    this.state.checkedContinent.map((value, index) => {
      if (value) {
        if (this.state.counts.lose > 2 || this.state.counts.win === this.state.countries.copy[index].length - 6) {
          this.setState({
            display: {
              wrap: 'none',
              endGame: 'block',
              wrapStart: 'none',
            },
          });
        }
      }
    });
  }

  onAnimationHints(index) {
    for (let i = 0; i < this.state.backgrounds.length; i++) {
      this.state.backgrounds[i] = require('../assets/images/BtnBlkWhtBrdr.png');
      this.state.backgrounds[index] = require('../assets/images/buttonDblue.png');
    }
    this.setState({
      backgrounds: this.state.backgrounds,
    });
  }

  saveRecords() {
    if (this.state.checkedChangeGame[0]) {
      for (let i = 0; i < this.state.checkedContinent.length; i++) {
        if (this.state.checkedContinent[i]) {
          if (+JSON.parse(localStorage.getItem(`Флаги(${this.state.checkedContinentName[i]})`)) < this.state.counts.win) {
            const recordesFlag = JSON.stringify(this.state.counts.win);
            this.state.recordes.flagsRecordsPoint[i] = this.state.counts.win;
            localStorage.setItem(`Флаги(${this.state.checkedContinentName[i]})`, recordesFlag);
            this.state.recordes.flagsRecordsName[i] = `Флаги(${this.state.checkedContinentName[i]})`;
          }
        }
      }
    } else if (this.state.checkedChangeGame[1]) {
      for (let i = 0; i < this.state.checkedContinent.length; i++) {
        if (this.state.checkedContinent[i]) {
          if (+JSON.parse(localStorage.getItem(`Столицы(${this.state.checkedContinentName[i]})`)) < this.state.counts.win) {
            const recordesCap = JSON.stringify(this.state.counts.win);
            this.state.recordes.capitalsRecordsPoint[i] = this.state.counts.win;
            localStorage.setItem(`Столицы(${this.state.checkedContinentName[i]})`, recordesCap);
            this.state.recordes.capitalsRecordsName[i] = `Столицы(${this.state.checkedContinentName[i]})`;
          }
        }
      }
    }
    this.setState({
      recordes: {
        ...this.state.recordes,
      },
    });
    localStorage.setItem('recordes', JSON.stringify(this.state.recordes));
  }


  onChangeGame(index) {
    const checked = this.state.checkedChangeGame;
    for (let i = 0; i < checked.length; i++) {
      index === i ? checked[index] = true : checked[i] = false;
    }
    this.setState({
      checkedChangeGame: checked,
    });
  }

  onChangeContinent(index) {
    const checked = this.state.checkedContinent;
    for (let i = 0; i < checked.length; i++) {
      index === i ? checked[index] = true : checked[i] = false;
    }
    this.setState({
      checkedContinent: checked,
    });
  }

  onInteractive(index) {
    for (let i = 0; i < this.state.checkedContinent.length; i++) {
      if (index === 0) {
        for (let i = 0; i < this.state.checkedContinent.length; i++) {
          this.state.checkedContinent[0] = true;
          this.state.checkedContinent[i] = false;
          this.state.path.opacity[i] = 0.1;
        }
      } else if (i === index) {
        this.state.checkedContinent[i] = true;
        this.state.path.opacity[i] = 0.1;
      } else {
        this.state.checkedContinent[i] = false;
        this.state.path.opacity[i] = 0.7;
      }
    }
    this.setState({
      checkedContinent: this.state.checkedContinent,
    });
  }

  onRecordsTable() {
    if (this.state.positionRightTable === -100) {
      const id = setInterval(() => {
        this.setState({
          positionRightTable: this.state.positionRightTable + 10,
        });
        if (this.state.positionRightTable === 0) { clearInterval(id); }
      }, 4);
    } else if (this.state.positionRightTable === 0) {
      const id = setInterval(() => {
        this.setState({
          positionRightTable: this.state.positionRightTable - 10,
        });
        if (this.state.positionRightTable === -100) { clearInterval(id); }
      }, 4);
    }
  }

  onRules() {
    if (this.state.positionLeftRules === -100) {
      const id = setInterval(() => {
        this.setState({
          positionLeftRules: this.state.positionLeftRules + 10,
        });
        if (this.state.positionLeftRules === 0) { clearInterval(id); }
      }, 4);
    } else if (this.state.positionLeftRules === 0) {
      const id = setInterval(() => {
        this.setState({
          positionLeftRules: this.state.positionLeftRules - 10,
        });
        if (this.state.positionLeftRules === -100) { clearInterval(id); }
      }, 4);
    }
  }

  onOptions() {
    if (this.state.positionRight === -100) {
      const id = setInterval(() => {
        this.setState({
          positionRight: this.state.positionRight + 10,
        });
        if (this.state.positionRight === 0) { clearInterval(id); }
      }, 4);
    } else if (this.state.positionRight === 0) {
      const id = setInterval(() => {
        this.setState({
          positionRight: this.state.positionRight - 10,
        });
        if (this.state.positionRight === -100) { clearInterval(id); }
      }, 4);
    }
  }

  onContinue() {
    this.setState({
      display: {
        ...this.state.display,
        wrapStart: 'none',
        wrap: 'block',
      },
    });
  }


  onBack() {
    this.setState({
      display: {
        wrap: 'none',
        wrapStart: 'block',
        endGame: 'none',
        btnContinue: 'block',
      },
    });
  }

  onBackFromEnd() {
    if (this.state.counts.lose) {
      this.setState({
        display: {
          wrap: 'none',
          wrapStart: 'block',
          endGame: 'none',
          btnContinue: 'none',
        },
      });
    }
  }


  onHints() {
    if (this.state.counts.hints > 0) {
      this.setState({
        buttonHint: {
          background: require('../assets/images/BtnRedWhtBkg.png'),
          disabled: true,

        },
        className: ['blok', 'blok', 'blok', 'blok'],
      });
      new Promise((res, rej) => {
        let index = 0;
        let count = 0;
        const id = setInterval(() => {
          count += 10;
          index++;

          if (index === 4) {
            index = 0;
          }
          this.onAnimationHints(index);
          if (count === 200) {
            clearInterval(id);
            this.state.backgrounds.map((value, index) => {
              this.state.backgrounds[index] = require('../assets/images/BtnBlkWhtBrdr.png');
              if (this.state.checkedChangeGame[0] ? (this.state.value[index] === this.state.countries.all[0].country)
                : (this.state.valueCapital[index] === this.state.countries.all[0].capital)) {
                this.state.backgrounds[index] = require('../assets/images/BtnDgreen.png');
              }
            });
            res(this.setState({
              backgrounds: this.state.backgrounds,
              counts: {
                ...this.state.counts,
                win: this.state.counts.win + 1,
                hints: this.state.counts.hints - 1,
              },
            }));
          }
        }, 100);
      }).then(res => new Promise((res, rej) => {
        setTimeout(() => {
          this.onAfterCheck();
          this.saveRecords();
        }, 2000);
      }));
    }
  }


  onStart() {
    const arr = this.state.countries.copy.concat();

    function compareRandom(a, b) {
      return Math.random() - 0.5;
		  }
    for (let i = 0; i < this.state.checkedContinent.length; i++) {
      if (this.state.checkedContinent[i]) {
        this.setState({
          countries: {
            all: arr[i].sort(compareRandom),
            copy: this.state.countries.copy,
          },
          value: [arr[i][0].country, arr[i][1].country,
            arr[i][2].country, arr[i][3].country].sort(compareRandom),
          valueCapital: [arr[i][0].capital, arr[i][1].capital,
            arr[i][2].capital, arr[i][3].capital].sort(compareRandom),
          display: {
            wrap: 'block',
            wrapStart: 'none',
            endGame: 'none',
          },
          counts: {
            win: 0,
            lose: 0,
            hints: 3,
          },
        });
      }
    }
  }

  onChange(index) {
    const className = this.state.className;
    if (className[index] != 'blok') {
      this.setState({
        className: ['blok', 'blok', 'blok', 'blok'],
      });
      const bcg = this.state.backgrounds;
      bcg[index] = require('../assets/images/buttonDblue.png');
      this.setState({
        backgrounds: bcg,
        buttonHint: {
          background: require('../assets/images/BtnRedWhtBkg.png'),
          disabled: true,
        },
      });
      new Promise((res, rej) => {
        setTimeout(() => {
          for (let i = 0; i < this.state.value.length; i++) {
            if (this.state.checkedChangeGame[0] ? (this.state.value[i] === this.state.countries.all[0].country)
              : (this.state.valueCapital[i] === this.state.countries.all[0].capital)) {
              if (index === i) {
                this.setState({
                  counts: {
                    ...this.state.counts,
                    win: this.state.counts.win + 1,
                    lose: this.state.counts.lose,
                  },
                });
                this.saveRecords();
              } else {
                this.setState({
                  counts: {
                    ...this.state.counts,
                    win: this.state.counts.win,
                    lose: this.state.counts.lose + 1,
                  },
                });
              }
              const bcg = this.state.backgrounds;
              bcg[index] = require('../assets/images/BtnRedWhtBkg.png');
              bcg[i] = require('../assets/images/BtnDgreen.png');
              this.setState({
                backgrounds: bcg,
              });
            }
          }
          res(this.state.countries);
        }, 2000);
      })
        .then(res => new Promise((res, rej) => {
          setTimeout(() => {
            this.onAfterCheck();
          }, 2000);
        }));
    }
  }

  render() {
    return (
      <div>

        <Game {...this.state} onHints={this.onHints} onChange={this.onChange} onBack={this.onBack} />
        <StartPage
          {...this.state}
          onOptions={this.onOptions}
          onChangeContinent={this.onChangeContinent}
          onChangeGame={this.onChangeGame}
          onStart={this.onStart}
          onRecordsTable={this.onRecordsTable}
          onRules={this.onRules}
          onContinue={this.onContinue}
          onInteractive={this.onInteractive}
        />
        <EndGame {...this.state} onStart={this.onStart} onBackFromEnd={this.onBackFromEnd} />

      </div>

    );
  }
}

ReactDOM.render(<Start />,
  document.getElementById('root'));
