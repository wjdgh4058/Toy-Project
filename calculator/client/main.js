/* eslint no-undef:'warn' */
/* eslint no-unused-vars: 'off' */

import {
  getNode,
  addClass,
  removeClass,
  syntaxError,
  insertLast,
  refError,
} from "./lib/index.js";

const done = getNode("#done");
const firstInput = getNode("#firstNumber");
const secondInput = getNode("#secondNumber");
const result = getNode(".result");

// e.preventDefault();

function getInputValue(node) {
  if (typeof node === "string") node = getNode(node);
  if (node.tagName !== "INPUT")
    refError("getInputValue 함수는 INPUT ELEMENT만 허용합니다.");
  return node.value;
}

function sum(valueA, valueB) {
  return valueA + valueB;
}

function clearContents(node) {
  if (typeof node === "string") node = getNode(node);
  node.textContent = "";
}

function handler(e) {
  e.preventDefault();

  let firstValue = +getInputValue(firstInput);
  let secondValue = +getInputValue(secondInput);
  let total = sum(firstValue, secondValue);

  clearContents(result);

  insertLast(".result", total);
}

function inputHandler() {
  let firstValue = +getInputValue(firstInput);
  let secondValue = +getInputValue(secondInput);
  let total = sum(firstValue, secondValue);

  clearContents(result);

  insertLast(".result", total);
}

done.addEventListener("click", handler);

firstInput.addEventListener("change", inputHandler);
secondInput.addEventListener("change", inputHandler);
