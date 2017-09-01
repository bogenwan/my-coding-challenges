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

  });
})();