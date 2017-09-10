(function () {
  'use strict';

  describe('Chapter 3 coding challenge test', function () {
    let stack1 = new MinStack();
    let tripleStack1 = new TripleStack(4);
    let setOfStack1 = new SetOfStack(3);

    describe('Question 3.1', function () {
      describe('Triple stack functionality test', function () {

        beforeEach(function () {
          tripleStack1.push(1, 'a');
          tripleStack1.push(1, 'b');
          tripleStack1.push(2, 'f');
        });

        afterEach(function () {
          tripleStack1.popAll();
        });

        it('Should be able to push value in to triple stack', function () {
          expect(tripleStack1.storage.length).toBe(4);
        });

        it('Should be able to push values in to third stack', function () {
          tripleStack1.push(3, 'g');
          tripleStack1.push(3, 'h');
          tripleStack1.push(3, 'i');
          expect(tripleStack1.storage[6]).toBe('g');
          expect(tripleStack1.storage[7]).toBe('h');
          expect(tripleStack1.storage[8]).toBe('i');
        });

        it('Should be able to pop last value from the selected stack', function () {
          tripleStack1.push(3, 'g');
          tripleStack1.push(3, 'h');
          tripleStack1.push(3, 'i');
          tripleStack1.pop(3);
          tripleStack1.pop(2);
          expect(tripleStack1[8]).toBe(undefined);
          expect(tripleStack1[3]).toBe(undefined);
        });

        it('Should be able to peek in to the last element of the selected stack', function () {
          expect(tripleStack1.peek(1)).toBe('b');
          expect(tripleStack1.peek(2)).toBe('f');
        });
      });
    });

    describe('Question 3.2', function () {
      describe('Stack with min() functionality test', function () {

        afterEach(function () {
          stack1.popAll();
        });

        it('Should push min value to minStorage stack', function () {
          stack1.push(7);
          stack1.push(5);
          stack1.push(8);
          expect(stack1.minStorage[1]).toBe(5);
          expect(stack1.minStorage[0]).toBe(7);
        });

        it('Should pop min value in minStorage accordingly', function () {
          stack1.push(7);
          stack1.push(5);
          stack1.push(8);
          stack1.push(9);
          stack1.push(5);
          stack1.push(2);
          stack1.pop();
          expect(stack1.minStorage[2]).toBe(5);
          stack1.pop();
          expect(stack1.minStorage[1]).toBe(5);
          stack1.pop();
          stack1.pop();
          expect(stack1.minStorage[1]).toBe(5);
          stack1.pop();
          expect(stack1.minStorage[1]).toBe(undefined);
          expect(stack1.minStorage[0]).toBe(7);
        });
      });

      describe('Stack peekMin() functionality test', function () {
        beforeEach(function () {
          stack1.push(7);
          stack1.push(5);
          stack1.push(8);
          stack1.push(9);
          stack1.push(5);
          stack1.push(2);
        });

        afterEach(function () {
          stack1.popAll();
        });

        it('Should return current min value', function () {
          expect(stack1.peekMin()).toBe(2);
          stack1.pop();
          expect(stack1.peekMin()).toBe(5);
          stack1.pop();
          stack1.pop();
          expect(stack1.peekMin()).toBe(5);
          stack1.pop();
          expect(stack1.peekMin()).toBe(5);
          stack1.pop();
          expect(stack1.peekMin()).toBe(7);
        });
      });
    });

    describe('Question 3.3', function () {
      describe('SetOfStack push() functionality', function () {

        beforeEach(function () {
          setOfStack1.push('a');
          setOfStack1.push('b');
          setOfStack1.push('c');
          setOfStack1.push('d');
          setOfStack1.push('e');
        });

        afterEach(function () {
          setOfStack1.popAll();
        });

        it('Should add value to stack, when full it create a new substack and store additional value', function () {
          let subStack = setOfStack1.storage[setOfStack1.subStackCounter];
          expect(subStack[0]).toBe('d');
          expect(subStack[1]).toBe('e');
        });
      });

      describe('SetOfStack pop() functionality', function () {

        beforeEach(function() {
          setOfStack1.push('a');
          setOfStack1.push('b');
          setOfStack1.push('c');
          setOfStack1.push('d');
          setOfStack1.push('e');
        });

        afterEach(function () {
          setOfStack1.popAll();
        });

        it('Should pop value from stack, once current stack is empty and if privious exist, it will pop item from previous stack', function () {
          expect(setOfStack1.pop()).toBe('e');
          expect(setOfStack1.pop()).toBe('d');
          expect(setOfStack1.pop()).toBe('c');
          expect(setOfStack1.pop()).toBe('b');
          expect(setOfStack1.pop()).toBe('a');
          expect(setOfStack1.pop()).toBe('setOfStack is empty!');
        });
      });

      describe('SetOfStack peek() functionality', function () {

        afterEach(function () {
          setOfStack1.popAll();
        });

        it('Should return the last value', function () {
          expect(setOfStack1.peek()).toBe('setOfStack is empty!');
        });

        it('Should return the last value', function () {
          setOfStack1.push('a');
          setOfStack1.push('b');
          setOfStack1.push('c');
          expect(setOfStack1.peek()).toBe('c');
        });
      });
    });

  });
})();