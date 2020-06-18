import React, { Component } from 'react';
import data from './data'

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
    let morseCode = '';

    for (let i = 0; i < value.length; i++) {
      morseCode += data[value.charAt(i).toLowerCase()];
      console.log(morseCode)
    }

    return this.setState({ morseCode });
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
