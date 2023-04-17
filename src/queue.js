const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */


class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  getUnderlyingList() {
    return this.head
  }

  enqueue(value) { //append (добавляет в хвост списка)
    let newNode = new ListNode(value);

    if (!this.tail) { //если список пуст, то добавленный элемент будет еще и хэдом
      this.head = newNode;
      this.tail = newNode;
    }else{
      this.tail.next =newNode;
      this.tail = newNode;
    }
  }

  dequeue() { //delete head
    if (!this.head) {  //в списке ничего нет
      return null;
    }

    const deletedNode = this.head;
    if (this.head === this.tail) { //в списке один элемент, то есть мы удаляем все
      this.head = null;
      this.tail = null;

      return deletedNode;
    }

    //если в списке больше 1 элемента, переносим head на 1 элемент назад
    this.head = this.head.next
    
    return deletedNode.value;  
  }    
}



module.exports = {
  Queue
};
