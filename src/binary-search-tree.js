const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require("../extensions/list-tree.js");

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootOfTree = null
  }

  root() {
    return this.rootOfTree
  }

  add(data) {
    //положи в корень, то что вернет функция
    this.rootOfTree = replaceNewNode(this.rootOfTree,data)
    // в функции описываем общую логику как для дерева, так и любого поддерева
    function replaceNewNode(node,data){
      //чтобы завершить рекурсию добавляем проверки
      //проверка1 - 
      if (!node){
        return new Node(data);
      }
      //проверка2 - если такой узел уже существует - возвращаем текущий узел (в дереве только уникальные элементы)
      if (data === node.data ){
        return node;
      }
      //самая главная проверка - если значение которое хотим добавить, меньше,чем текущий узел, смотрим влево..
      if (data < node.data){
        node.left = replaceNewNode (node.left, data)
      }else{
        node.right = replaceNewNode(node.right, data);
      }
    }
  }

  has(data) {
    return searchInside(this.rootOfTree, data);

    function searchInside(node, data) {
      //вариант остановки рекурсии "не нашел"
      if (!node) {
        return false;
      }
      //запуск рекурсии
      if (data < node.data) {
        return searchInside(node.left, data);
      } 
      if (data > node.data) {
        return searchInside(node.right, data);
      }
      //вариант "нашел"
      return true;
    }
  }

  find(data) {
    return searchDataInside(this.rootOfTree, data);

    function searchDataInside(node, data) {
      //вариант остановки рекурсии "не нашел"
      if (!node) {
        return null
      };
      //вариант "нашел"
      if (node.data === data){
        return node.data;
      } 
      //запуск рекурсии
      if(data < node.data){
        return searchDataInside(node.left, data);
      }else{
        return searchDataInside(node.right, data);
      }
    }
  }

  remove(data) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};