import {
  diceAnimation,
  disableElement,
  enableElement,
  getNode,
  getNodes,
  insertLast,
  invisibleElement,
  visibleElement,
  attr,
  clearContents,
} from "./lib/index.js";

// const rollingDiceButton = getNode(".buttonGroup > button:nth-child(1)");
// const recordButton = getNode(".buttonGroup > button:nth-child(2)");
const [rollingDiceButton, recordButton, resetButton] = getNodes(
  ".buttonGroup > button"
);

const recordListWrapper = getNode(".recordListWrapper");
const recordList = getNode(".recordList > tbody");

let sum = 0;
let turn = 0;

const renderRecordListItem = (node) => {
  let diceValue = +attr(getNode("#cube"), "data-dice");
  let template = `<tr>
<td>${++turn}</td>
<td>${diceValue}</td>
<td>${(sum += diceValue)}</td>
</tr>`;

  insertLast(node, template);
  recordListWrapper.scrollTop = recordListWrapper.scrollHeight;
};

const clearRecordList = (node) => {
  sum = 0;
  turn = 0;
  clearContents(node);
};

const handleRollingDice = (() => {
  let isRolling = false;
  let stopAnimation;

  return () => {
    if (!isRolling) {
      stopAnimation = setInterval(diceAnimation, 100);
      // recordButton.disabled = true;
      disableElement(recordButton);
      disableElement(resetButton);
    } else {
      clearInterval(stopAnimation);
      // recordButton.disabled = false;
      enableElement(recordButton);
      enableElement(resetButton);
    }
    isRolling = !isRolling;
  };
})();

let handleRecord = () => {
  visibleElement(recordListWrapper);
  renderRecordListItem(recordList);
};

let handleReset = () => {
  invisibleElement(recordListWrapper);
  clearRecordList(recordList);
};

rollingDiceButton.addEventListener("click", handleRollingDice);
recordButton.addEventListener("click", handleRecord);
resetButton.addEventListener("click", handleReset);
