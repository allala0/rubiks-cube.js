<h1 align="center">Rubiks Cube</h1>
<p align="center">Rubiks cube of any size in browser.</p>
<p align="center"><img src="img/cube.png" width=300;/></p>

## Introduction

Rubiks cube made in <a href='https://threejs.org/'>THREE.js</a>

## How to use

- Clone this repo with:  ```git clone https://github.com/allala0/rubiks-cube.js``` 
- Run this repo code on server ( You can use <a href='server.py'>server.py</a> to run it. )

## Server

<a href='server.py'>server.py</a> is a simple server implementation made in Python3. 

You can run it in terminal with ```server.py``` if you want to host it on localhost.

If you want to specify ip and port use ```server.py ip:port``` ( you could provide only ip, in that case port 8080 will be used ).

## TODO

- [x] **3d rubiks cube of any size**
- [x] **Cube user control system**
- [x] **Scramble function**
- [x] **Unscramble function**
- [x] **Optimalisation: don't create cubies that are not visable (inside cube)**q
- [ ] **Bug fixes - connect tiles with cubie faces in term of mouse click detection**
- [ ] **AI solver**
- [ ] **Cube rotations function**
- [ ] **Functions to make patterns on cube for example: checkers, cube in cube**
- [ ] **Moves containing many layers at the same time in scramble**
- [ ] **Reverse one move function**
- [ ] **Rounded edges of cubie stickers**
- [ ] **Support for phone user controls**
- [ ] **Timer**
- [ ] **Solve stats (time, number of moves, replay)**
- [ ] **Mirror cube**
- [ ] **Pyraminx**
- [ ] **Skweb**
- [ ] **Megaminx**
- [ ] **Square-1**
- [ ] **3x3x2, 3x3x1, 2x2x1**
- [ ] **3x3x1**
- [ ] **2x2x1**

## License

```
MIT License

Copyright (c) 2022 Artur Brytkowski

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```