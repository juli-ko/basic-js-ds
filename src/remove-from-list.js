const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */

function removeKFromList(initialList, k) {
  //если ничего не передано в к, или изначчльный список пуст и удалять нечего сразу возвращаем начальный список
  if (!k || initialList === []) return initialList; 
  if (initialList.value === k) initialList = initialList.next;


  let currNode = initialList;
  //проходимся по элементам списка (условие: пока текущий список не будет равен null)
  while (currNode.next) {
    if (k === currNode.next.value) {
      currNode.next = currNode.next.next; //после предыдущего yзла, будет идти не current, а следующий элемент
    } else {
      currNode = currNode.next; //переходим к следующему элемнту списка
    }
  }
  return initialList;
}

module.exports = {
  removeKFromList
};
