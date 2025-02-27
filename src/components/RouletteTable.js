import React from "react";

const RouletteTable = () => {
  return (
    <div className="card br-10">
      <div className="card-body p-4 pt-0">
        <div className="wheel">
          <img
            src={require("../assets/images/wheel-full.png")}
            className="wheel-pos wheel-pos-anim"
            alt="Roulette Wheel"
          />
          <div className="wheel-mask">
            <img
              src={require("../assets/images/wheel-mask.png")}
              className="wheel-mask-img"
              alt="Wheel Mask"
            />
          </div>
        </div>
        <div className="mt-2">
          <div className="d-grid grid-cols-3x gap-2 mb-2">
            <button className="btn btn-outline-warning keyboardBtn relative">
              <svg
                className="w-4 h-4 svg-color"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <svg
                  id="Layer_1"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 800 699.94"
                >
                  <path d="M799.49,665.25s34.73-503.39-466.42-497.36V0L0,280.73l333.55,228.1v-156.12s258.65-69.45,465.94,312.54Z"></path>
                </svg>
              </svg>
              Undo
            </button>
            <div className="text-center">
              Last 5 Bets
              <div className="d-grid grid-cols-5 m-auto w-75 gap-2">
                <div className="relative text-white border keyboardBtn round red">
                  <span className="text-white/90">3</span>
                </div>
                <div className="relative text-white border keyboardBtn round black">
                  <span className="text-white/90">6</span>
                </div>
                <div className="relative text-white border keyboardBtn round red">
                  <span className="text-white/90">14</span>
                </div>
                <div className="relative text-white border keyboardBtn round black">
                  <span className="text-white/90">35</span>
                </div>
                <div className="relative text-white border keyboardBtn round red">
                  <span className="text-white/90">16</span>
                </div>
              </div>
            </div>
            <button className="btn btn-outline-warning keyboardBtn relative">
              <svg
                className="w-4 h-4 svg-color"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <svg
                  id="Layer_1"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 800 699.94"
                >
                  <path d="M450,712.5H150c-62.03,0-112.5-50.47-112.5-112.5V225c-20.71,0-37.5-16.79-37.5-37.5s16.79-37.5,37.5-37.5h75v-37.5C112.5,50.47,162.97,0,225,0h150c62.03,0,112.5,50.47,112.5,112.5v37.5h75c20.71,0,37.5,16.79,37.5,37.5s-16.79,37.5-37.5,37.5v375c0,62.03-50.47,112.5-112.5,112.5ZM112.5,225v375c0,20.68,16.82,37.5,37.5,37.5h300c20.68,0,37.5-16.82,37.5-37.5V225H112.5ZM187.5,150h225v-37.5c0-20.68-16.82-37.5-37.5-37.5h-150c-20.68,0-37.5,16.82-37.5,37.5v37.5ZM375,562.5c-20.71,0-37.5-16.79-37.5-37.5v-187.5c0-20.71,16.79-37.5,37.5-37.5s37.5,16.79,37.5,37.5v187.5c0,20.71-16.79,37.5-37.5,37.5ZM225,562.5c-20.71,0-37.5-16.79-37.5-37.5v-187.5c0-20.71,16.79-37.5,37.5-37.5s37.5,16.79,37.5,37.5v187.5c0,20.71-16.79,37.5-37.5,37.5Z"></path>
                </svg>
              </svg>
              Clear Bets
            </button>
          </div>

          <div className="d-grid grid-cols-[auto_45px_1fr] gap-2">
            <div className="d-flex">
              <button className="btn btn-success w-100 h-100 p-1">
                <div className="flex flex-col items-center gap-1">
                  <span className="text-2xl">0</span>
                </div>
              </button>
            </div>

            <div className="d-grid grid-rows-3 gap-2">
              <div className="d-grid gap-2">
                <div className="d-grid grid-cols-13 gap-2">
                  <button className="btn px-1 relative text-white border keyboardBtn red">
                    <span className="text-white/90">3</span>
                  </button>
                  <button className="btn px-1 relative text-white border keyboardBtn black">
                    <span className="text-white/90">6</span>
                  </button>
                  <button className="btn px-1 relative text-white border keyboardBtn red">
                    <span className="text-white/90">9</span>
                  </button>
                  <button className="btn px-1 relative text-white border keyboardBtn red">
                    <span className="text-white/90">12</span>
                  </button>
                  <button className="btn px-1 relative text-white border keyboardBtn black">
                    <span className="text-white/90">15</span>
                  </button>
                  <button className="btn px-1 relative text-white border keyboardBtn red">
                    <span className="text-white/90">18</span>
                  </button>
                  <button className="btn px-1 relative text-white border keyboardBtn red">
                    <span className="text-white/90">21</span>
                  </button>
                  <button className="btn px-1 relative text-white border keyboardBtn black">
                    <span className="text-white/90">24</span>
                  </button>
                  <button className="btn px-1 relative text-white border keyboardBtn red">
                    <span className="text-white/90">27</span>
                  </button>
                  <button className="btn px-1 relative text-white border keyboardBtn red">
                    <span className="text-white/90">30</span>
                  </button>
                  <button className="btn px-1 relative text-white border keyboardBtn black">
                    <span className="text-white/90">33</span>
                  </button>
                  <button className="btn px-1 relative text-white border keyboardBtn red">
                    <span className="text-white/90">36</span>
                  </button>
                  <button className="btn px-1 btn-outline-warning keyboardBtn relative">
                    2:1
                  </button>
                </div>
              </div>

              <div className="d-grid gap-2">
                <div className="d-grid grid-cols-13 gap-2">
                  <button className="btn px-1 relative text-white border keyboardBtn black">
                    <span className="text-white/90">2</span>
                  </button>
                  <button className="btn px-1 relative text-white border keyboardBtn red">
                    <span className="text-white/90">5</span>
                  </button>
                  <button className="btn px-1 relative text-white border keyboardBtn black">
                    <span className="text-white/90">8</span>
                  </button>
                  <button className="btn px-1 relative text-white border keyboardBtn black">
                    <span className="text-white/90">11</span>
                  </button>
                  <button className="btn px-1 relative text-white border keyboardBtn red">
                    <span className="text-white/90">14</span>
                  </button>
                  <button className="btn px-1 relative text-white border keyboardBtn black">
                    <span className="text-white/90">17</span>
                  </button>
                  <button className="p-1 relative text-white border keyboardBtn black">
                    <span className="text-white/90">20</span>
                  </button>
                  <button className="btn px-1 relative text-white border keyboardBtn red">
                    <span className="text-white/90">23</span>
                  </button>
                  <button className="btn px-1 relative text-white border keyboardBtn black">
                    <span className="text-white/90">26</span>
                  </button>
                  <button className="btn px-1 relative text-white border keyboardBtn black">
                    <span className="text-white/90">29</span>
                  </button>
                  <button className="btn px-1 relative text-white border keyboardBtn red">
                    <span className="text-white/90">32</span>
                  </button>
                  <button className="btn px-1 relative text-white border keyboardBtn black">
                    <span className="text-white/90">35</span>
                  </button>
                  <button className="btn px-1 btn-outline-warning keyboardBtn relative">
                    2:1
                  </button>
                </div>
              </div>

              <div className="d-grid gap-2">
                <div className="d-grid grid-cols-13 gap-2">
                  <button className="btn px-1 relative text-white border keyboardBtn red">
                    <span className="text-white/90">1</span>
                  </button>
                  <button className="btn px-1 relative text-white border keyboardBtn black">
                    <span className="text-white/90">4</span>
                  </button>
                  <button className="btn px-1 relative text-white border keyboardBtn red">
                    <span className="text-white/90">7</span>
                  </button>
                  <button className="btn px-1 relative text-white border keyboardBtn red">
                    <span className="text-white/90">10</span>
                  </button>
                  <button className="btn px-1 relative text-white border keyboardBtn black">
                    <span className="text-white/90">13</span>
                  </button>
                  <button className="btn px-1 relative text-white border keyboardBtn red">
                    <span className="text-white/90">16</span>
                  </button>
                  <button className="btn px-1 relative text-white border keyboardBtn red">
                    <span className="text-white/90">19</span>
                  </button>
                  <button className="btn px-1 relative text-white border keyboardBtn black">
                    <span className="text-white/90">22</span>
                  </button>
                  <button className="btn px-1 relative text-white border keyboardBtn red">
                    <span className="text-white/90">25</span>
                  </button>
                  <button className="btn px-1 relative text-white border keyboardBtn red">
                    <span className="text-white/90">28</span>
                  </button>
                  <button className="btn px-1 relative text-white border keyboardBtn black">
                    <span className="text-white/90">31</span>
                  </button>
                  <button className="btn px-1 relative text-white border keyboardBtn red">
                    <span className="text-white/90">34</span>
                  </button>
                  <button className="btn px-1 btn-outline-warning keyboardBtn relative">
                    2:1
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="d-grid grid-cols-3 gap-2 mt-2">
            <button className="btn position-relative btn-outline-warning keyboardBtn relative">
              1ST 12
              <span className="position-absolute start-100 translate-middle badge rounded-pill bg-danger text-white">
                1
              </span>
            </button>
            <button className="btn btn-outline-warning keyboardBtn relative">
              2ND 12
            </button>
            <button className="btn btn-outline-warning keyboardBtn relative">
              3RD 12
            </button>
          </div>

          <div className="d-grid grid-cols-6 gap-2 mt-2">
            <button className="btn btn-outline-warning keyboardBtn relative">
              1 - 18
            </button>
            <button className="btn btn-outline-warning keyboardBtn relative">
              EVEN
            </button>
            <button className="btn btn-outline-warning keyboardBtn relative red">
              RED
            </button>
            <button className="btn btn-outline-warning keyboardBtn relative black">
              BLACK
            </button>
            <button className="btn btn-outline-warning keyboardBtn relative">
              ODD
            </button>
            <button className="btn btn-outline-warning keyboardBtn relative">
              19 - 36
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RouletteTable;
