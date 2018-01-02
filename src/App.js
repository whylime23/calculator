/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react'
import './App.css'

class App extends Component {
  render () {
    return (
      <body>
        <div id='container'>
          <div className='cal-body'>
            <div className='header'>
              <h6>Electronic Calculator</h6>
            </div>
            <div className='display'>
              <div className='mem-input'>
                0
              </div>
              <div className='act-input'>
                0
              </div>
            </div>
            <div className='buttons-all'>
              <div className='container'>
                <div className='row first-row'>
                  <div className='col button-single button-special' id='AC'>
                    AC
                  </div>
                  <div className='col button-single button-special' id='CE'>
                    CE
                  </div>
                  <div className='col button-single' id='divide'>
                    ÷
                  </div>
                  <div className='col button-single' id='multiply'>
                    x
                  </div>
                </div>
                <div className='row second-row'>
                  <div className='col button-single'>
                    7
                  </div>
                  <div className='col button-single'>
                    8
                  </div>
                  <div className='col button-single'>
                    9
                  </div>
                  <div className='col button-single' id='minus'>
                    -
                  </div>
                </div>
                <div className='row third-row'>
                  <div className='col button-single'>
                    4
                  </div>
                  <div className='col button-single'>
                    5
                  </div>
                  <div className='col button-single'>
                    6
                  </div>
                  <div className='col button-single' id='plus'>
                    +
                  </div>
                </div>
                <div className='row fourth-row'>
                  <div className='col button-single'>
                    1
                  </div>
                  <div className='col button-single'>
                    2
                  </div>
                  <div className='col button-single'>
                    3
                  </div>
                  <div className='col button-single' id='equals'>
                    =
                  </div>
                </div>
                <div className='row fifth-row'>
                  <div className='col button-single'>
                    0
                  </div>
                  <div className='col button-single'>
                    0
                  </div>
                  <div className='col button-single'>
                    .
                  </div>
                  <div className='col button-single' id='equals'>
                    =
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='footer container-fluid'>
            Designed and coded by <a className='emily-link' href='https://www.freecodecamp.com/whylime23' target='_blank'>Emily Taylor</a> using CodePen and Chrome web developer tools.
          </div>
        </div>
      </body>
    )
  }
}

export default App
