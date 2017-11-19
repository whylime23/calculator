import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <body>
      <div id="container">

        <!-- Calculator body -->
        <div class="cal-body">

          <!-- Header -->
          <div class="header">
            <h6>Electronic Calculator</h6>
          </div>

          <!-- Display -->

          <div class="display">

            <!-- Display: Memory Input -->

            <div class="mem-input">
              0
            </div>

            <!-- Display: Active Input -->

            <div class="act-input">
              0
            </div>

          </div> <!-- end of display -->

          <!-- Buttons -->
          <div class="buttons-all">
          <div class="container">
            <div class="row first-row">
              <div class="col button-single button-special" id="AC">
                AC
              </div>
              <div class="col button-single button-special" id="CE">
                CE
              </div>
              <div class="col button-single" id="divide">
                ÷
              </div>
              <div class="col button-single" id="multiply">
                x
              </div>
            </div> <!-- end of first-row -->
            <div class="row second-row">
              <div class="col button-single">
                7
              </div>
              <div class="col button-single">
                8
              </div>
              <div class="col button-single">
                9
              </div>
              <div class="col button-single" id="minus">
                -
              </div>
            </div> <!-- end of second row -->
            <div class="row third-row">
              <div class="col button-single">
                4
              </div>
              <div class="col button-single">
                5
              </div>
              <div class="col button-single">
                6
              </div>
              <div class="col button-single" id="plus">
                +
              </div>
            </div> <!-- end of third-row -->
            <div class="row fourth-row">
              <div class="col button-single">
                1
              </div>
              <div class="col button-single">
                2
              </div>
              <div class="col button-single">
                3
              </div>
              <div class="col button-single" id="equals">
                =
              </div>
            </div> <!-- end of fourth-row -->
            <div class="row fifth-row">
              <div class="col button-single">
                0
              </div>
              <div class="col button-single">
                0
              </div>
              <div class="col button-single">
                .
              </div>
              <div class="col button-single" id="equals">
                =
              </div>
            </div> <!-- end of fifth-row -->
          </div> <!-- end of container -->
          </div> <!-- end of buttons-all -->

        </div> <!-- end of cal-body -->

        <!-- Footer section -->

        <div class="footer container-fluid">
          Designed and coded by <a class="emily-link" href="https://www.freecodecamp.com/whylime23" target="_blank">Emily Taylor</a> using CodePen and Chrome web developer tools.
        </div> <!-- end of footer -->

      </div> <!-- end of container -->
      </body>
    );
  }
}

export default App;
