import React, { Component } from 'react';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      actualWord: '',
      morseCode: '',
    };
  }

  handleChange = (e) => {
    const plainText = e.target.value;
    this.setState({ actualWord: plainText });
    this.decodeMorse(plainText);
  };

  decodeMorse = (value) => {
    const converter = {
      a: '.-',
      b: '-...',
      c: '-.-.',
      d: '-..',
      e: '.',
      f: '..-.',
      g: '--.',
      h: '....',
      i: '..',
      j: '.---',
      k: '-.-',
      l: '.-..',
      m: '--',
      n: '-.',
      o: '---',
      p: '.--.',
      q: '--.-',
      r: '.-.',
      s: '...',
      t: '-',
      u: '..-',
      v: '...-',
      w: '.--',
      x: '-..-',
      y: '-.--',
      z: '--..',
      '1': '.----',
      '2': '..---',
      '3': '...--',
      '4': '....-',
      '5': '.....',
      '6': '-....',
      '7': '--...',
      '8': '---..',
      '9': '----.',
      '0': '-----',
      '.': '.-.-.-',
      ',': '--..--',
      '?': '..--..',
      "'": '.----.',
      '!': '-.-.--',
      '/': '-..-.',
      '(': '-.--.',
      ')': '-.--.-',
      '&': '.-...',
      ':': '---...',
      ';': '-.-.-.',
      '=': '-...-',
      '+': '.-.-.',
      '-': '-....-',
      _: '..--.-',
      '"': '.-..-.',
      $: '...-..-',
      '@': '.--.-.',
      ' ': ' ',
    };

    let output = '';

    for (let i = 0; i < value.length; i++) {
      output += converter[value.charAt(i).toLowerCase()];
    }

    return this.setState({ morseCode: output });
  };

  render() {
    return (
      <div className="container">
        <div className="row page-header">
          <div className="col-xs-12">
            <h1>Morse Code Converter</h1>

            <p className="lead">Live-convert text to morse code. </p>
          </div>
        </div>

        <form className="form-horizontal">
          <div className="form-group">
            <label htmlFor="morse" className="control-label col-xs-1">
              Plain Text
            </label>

            <div className="col-xs-11">
              <input
                type="text"
                className="form-control"
                id="morse"
                autoComplete="off"
                onChange={this.handleChange}
              ></input>
            </div>
          </div>

          <div className="form-group">
            <label className="control-label col-xs-1">Morse</label>

            <div className="col-xs-11">
              <pre id="text">{this.state.morseCode}</pre>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
