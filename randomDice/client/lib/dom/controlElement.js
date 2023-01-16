import { typeError } from "../error/typeError.js";

export function disableElement(node) {
  if (node.nodeType !== document.ELEMENT_NODE) {
    typeError("disableElement 함수의 인자는 DOM 요소 노드 이어야 합니다.");
  }
  node.disable = true;
}

export function ensableElement(node) {
  if (node.nodeType !== document.ELEMENT_NODE) {
    typeError("disableElement 함수의 인자는 DOM 요소 노드 이어야 합니다.");
  }
  node.disable = false;
}
