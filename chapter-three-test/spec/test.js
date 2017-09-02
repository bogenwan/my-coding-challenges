(function () {
  'use strict';

  describe('Chapter 3 coding challenge test', function () {
    let stack1 = new Stack();
    let tripleStack1 = new tripleStack(4);

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

  });
})();