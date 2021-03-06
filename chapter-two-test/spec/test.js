(function () {
  'use strict';

  describe('Chapter 2 coding challenge test', function () {
    let linkedList = new SinglyList();
    let linkedList2 = new SinglyList();

    describe('Question 2.1', function () {

      beforeEach(function () {
        linkedList.add(1);
        linkedList.add(2);
        linkedList.add(2);
        linkedList.add(3);
      });

      afterEach(function () {
        linkedList.removeAll();
      });

      it('Should remove duplicate node from linked list', function () {
        linkedList.removeDub();
        expect(linkedList.length).toBe(3);
      });
    });

    describe('Question 2.2', function () {

      beforeEach(function () {
        linkedList.add(1);
        linkedList.add(2);
        linkedList.add(3);
        linkedList.add(4);
        linkedList.add(5);
        linkedList.add(6);
      });

      afterEach(function () {
        linkedList.removeAll();
      });

      it('Should find 2nd to last element', function () {
        expect(linkedList.findKthToLast(2)).toBe(4);
      });

      it('Should find 4th to last element', function () {
        expect(linkedList.findKthToLast(4)).toBe(2);
      });

      it('Should find 0th to last element', function () {
        expect(linkedList.findKthToLast(0)).toBe(6);
      });

      it('Should find 5th to last element', function () {
        expect(linkedList.findKthToLast(5)).toBe(1);
      });
    });

    describe('Question 2.3', function () {

      describe('Test empty list', function () {
        it('Should return a message if the list is empty', function () {
          expect(linkedList.removeMiddle(1)).toBe('This list is empty!');
        });
      });

      describe('Test remove head and tail', function () {

        beforeEach(function () {
          linkedList.add(1);
          linkedList.add(6);
        });

        afterEach(function () {
          linkedList.removeAll();
        });

        it('Should return a message if trying to remove first or last node', function () {
          expect(linkedList.removeMiddle(1)).toBe('Can\'t remove head or last node');
          expect(linkedList.removeMiddle(6)).toBe('Can\'t remove head or last node');
        });
      });

      describe('Test functionality', function () {

        beforeEach(function () {
          linkedList.add(1);
          linkedList.add(2);
          linkedList.add(3);
          linkedList.add(4);
          linkedList.add(5);
          linkedList.add(6);
        });

        afterEach(function () {
          linkedList.removeAll();
        });

        it('Should remove the node contain the given value in the middle of the list', function () {
          linkedList.removeMiddle(4);
          expect(linkedList.length).toBe(5);
          linkedList.removeMiddle(2);
          expect(linkedList.length).toBe(4);
          linkedList.removeMiddle(5);
          expect(linkedList.length).toBe(3);
        });
      });

      describe('Test if no such value in list', function () {

        beforeEach(function () {
          linkedList.add(1);
          linkedList.add(2);
          linkedList.add(3);
        });

        afterEach(function() {
        linkedList.removeAll();
        });

        it('Should return a message', function () {
          expect(linkedList.removeMiddle(5)).toBe('No such value in this list');
        });
      });
    });

    describe('Question 2.4', function () {

      beforeEach(function () {
        linkedList.add(2);
        linkedList.add(3);
        linkedList.add(9);
        linkedList.add(6);
        linkedList.add(1);
        linkedList.add(4);
      });

      afterEach(function () {linkedList.removeAll()});

      it('Should arrage linked list with smaller number to the left and higher number to the right with given value as pivot', function () {
        let sortedLinkedList = linkedList.partition(linkedList, 6);
        expect(sortedLinkedList.findKthToLast(0)).toBe(6);
        expect(sortedLinkedList.findKthToLast(2)).toBe(4);
        expect(sortedLinkedList.findKthToLast(4)).toBe(3);
        expect(sortedLinkedList.findKthToLast(6)).toBe(2);
        expect(sortedLinkedList.length).toBe(6);
      });
    });

    describe('Question 2.5', function () {
      describe('Equal length list test', function () {
        beforeEach(function () {
          linkedList.add(7);
          linkedList.add(1);
          linkedList.add(6);
          linkedList2.add(5);
          linkedList2.add(9);
          linkedList2.add(2);
        });

        afterEach(function () {
          linkedList.removeAll();
          linkedList2.removeAll();
        });

        it('Should return linked list sum', function () {
          let sumListTest = sumLists(linkedList, linkedList2);
          expect(sumListTest.findKthToLast(2)).toBe(2);
          expect(sumListTest.findKthToLast(1)).toBe(1);
          expect(sumListTest.findKthToLast(0)).toBe(9);
        });
      });

      describe('Unequal length list test', function () {
        beforeEach(function () {
          linkedList.add(7);
          linkedList.add(1);
          linkedList.add(6);
          linkedList.add(3);
          linkedList.add(6);
          linkedList2.add(5);
          linkedList2.add(9);
          linkedList2.add(2);
        });

        afterEach(function () {
          linkedList.removeAll();
          linkedList2.removeAll();
        });

        it('Should return linked list sum for unequal length list', function () {
          let sumListTest2 = sumLists(linkedList, linkedList2);
          expect(sumListTest2.findKthToLast(0)).toBe(6);
          expect(sumListTest2.findKthToLast(1)).toBe(3);
          expect(sumListTest2.findKthToLast(2)).toBe(9);
          expect(sumListTest2.findKthToLast(3)).toBe(1);
          expect(sumListTest2.findKthToLast(4)).toBe(2);
        });
      });
    });

    describe('Question 2.6', function () {
      describe('Test odd length list', function () {
        beforeEach(function () {
          linkedList.add(1);
          linkedList.add(2);
          linkedList.add(3);
          linkedList.add(2);
          linkedList.add(1);
        });

        afterEach(function () {
          linkedList.removeAll();
        });

        it('Should return true if odd length list is palindrome', function () {
          expect(palindromeList(linkedList)).toBe(true);
        });

        it('Should return true if odd length list is not palindrome', function () {
          linkedList.add(2);
          linkedList.add(3);
          expect(palindromeList(linkedList)).toBe(false);
        });
      });

      describe('Test even number list', function () {
        beforeEach(function () {
          linkedList.add(1);
          linkedList.add(2);
          linkedList.add(2);
          linkedList.add(1);
        });

        afterEach(function () {
          linkedList.removeAll();
        });

        it('Should return true if even length list is palindrome', function () {
          expect(palindromeList(linkedList)).toBe(true);
        });

        it('Should return false if even length list is not a palindrome', function () {
          linkedList.add(3);
          linkedList.add(4);
          expect(palindromeList(linkedList)).toBe(false);
        });
      });
    });

    describe('Question 2.7', function () {
      describe('Test on non intersecting even list', function () {

        beforeEach(function () {
          linkedList.add(1);
          linkedList.add(2);
          linkedList.add(3);
          linkedList.add(4);
          linkedList.add(5);
          linkedList2.add(6);
          linkedList2.add(7);
          linkedList2.add(3);
          linkedList2.add(4);
          linkedList2.add(5);
        });

        afterEach(function () {
          linkedList.removeAll();
          linkedList2.removeAll();
        });

        it('Should return a message if no intersection found on an even list', function () {
          expect(intersectionList(linkedList, linkedList2)).toBe('No intersection found in both list!');
        });
      });

      describe('Test on non intersecting uneven list', function () {
        beforeEach(function () {
          linkedList.add(1);
          linkedList.add(2);
          linkedList.add(3);
          linkedList.add(4);
          linkedList.add(5);
          linkedList2.add(8);
          linkedList2.add(6);
          linkedList2.add(7);
          linkedList2.add(3);
          linkedList2.add(4);
          linkedList2.add(5);
        });

        afterEach(function () {
          linkedList.removeAll();
          linkedList2.removeAll();
        });

        it('Should return a message if no intersection found on an uneven list', function () {
          expect(intersectionList(linkedList, linkedList2)).toBe('No intersection found in both list!');
        });
      });

      describe('Test on intersecting even linked list', function () {
        beforeEach(function () {
          linkedList.add(9);
          linkedList.add(1);
          linkedList.add(3);
          linkedList.add(8);
          linkedList.add(2);
          linkedList.add(4);
          linkedList.add(7);
          linkedList2.add(5);
          linkedList2.add(6);
        });

        afterEach(function () {
          linkedList.removeAll();
          linkedList2.removeAll();
        });

        it('Should return the intersecting node', function () {
          let linkedList2Pointer = linkedList2.head.next;
          let linkedListPointer = linkedList.head.next.next.next;
          linkedList2Pointer.next = linkedListPointer.next;
          linkedList2.length = 5;
          expect(intersectionList(linkedList, linkedList2)).toBe(linkedListPointer.next);
        });
      });

      describe('Test on intersecting uneven linked list', function () {
        beforeEach(function () {
          linkedList.add(1);
          linkedList.add(3);
          linkedList.add(8);
          linkedList.add(2);
          linkedList.add(4);
          linkedList.add(7);
          linkedList2.add(5);
          linkedList2.add(6);
        });

        afterEach(function () {
          linkedList.removeAll();
          linkedList2.removeAll();
        });

        it('Should return the intersecting node', function () {
          let linkedList2Pointer = linkedList2.head.next;
          let linkedListPointer = linkedList.head.next.next;
          linkedList2Pointer.next = linkedListPointer.next;
          linkedList2.length = 5;
          expect(intersectionList(linkedList, linkedList2)).toBe(linkedListPointer.next);
        });
      });
    });

    describe('Question 2.8', function () {
      describe('Circular linked list test', function () {
        beforeEach(function () {
          linkedList.add(1);
          linkedList.add(2);
          linkedList.add(3);
          linkedList.add(4);
          linkedList.add(5);
          let listPointer = linkedList.head.next.next.next.next;
          listPointer.next = linkedList.head.next.next;
        });

        afterEach(function () {
          linkedList.removeAll();
        });

        it('Should return the node where the circulation begins', function () {
          expect(circularList(linkedList)).toBe(linkedList.head.next.next);
        });
      });
    });

  });
})();