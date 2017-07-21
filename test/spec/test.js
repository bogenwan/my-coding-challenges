(function () {
  'use strict';

  describe('Chapter 1 coding challenge test', function () {
    describe('question 1.1', function () {
      it('should check if each characters in given string is unique', function () {
        expect(isUnique('world')).toBe(true);
      });

      it('should return false if the string don\'t have unique characters', function () {
        expect(isUnique('woorld')).toBe(false);
      });

      it('should return a message to user if the string is empty', function () {
        expect(isUnique('')).toBe('Please input a string with length > 0');
      });
    });
  });

})();
