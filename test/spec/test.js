(function () {
  'use strict';

  describe('Chapter 1 coding challenge test', function () {
    describe('question 1.1', function () {
      it('should return a message to user if the string is empty', function () {
        expect(isUnique('')).toBe('Please input a string with length > 0');
      });

      it('should check if each characters in given string is unique', function () {
        expect(isUnique('world')).toBe(true);
      });

      it('should return false if the string don\'t have unique characters', function () {
        expect(isUnique('woorld')).toBe(false);
      });

    });

    describe('question 1.2', function () {
      it('should return message to user if either string is empty', function () {
        expect(checkPermutation('', '')).toBe('Please input strings with length > 0')
      });

      it('should return false if one string length doesn\'t match the other string length', function () {
          expect(checkPermutation('woorld', 'wooorld')).toBe(false);
      });

      it('should return false if str2 does not have letters exist in str1', function (){
        expect(checkPermutation('woorld', 'weerld')).toBe(false);
      });

      it('should return false if string 2 is not permutation of string 1', function () {
        expect(checkPermutation('world', 'woold')).toBe(false);
      });

      it('should return true if string 2 is permutation of string 1', function () {
        expect(checkPermutation('worldd', 'orldwd')).toBe(true);
      });


    });
  });

})();
