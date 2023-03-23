
"use strict";
import { timeConvertor } from "./utils.js";
const timer = document.querySelector(".main-time");
const actionBtns = document.querySelectorAll(".main-menu-item");
const startBtn = document.getElementById("startBtn");

let time = 1500;
let intervalID;