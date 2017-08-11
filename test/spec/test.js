(function () {
  'use strict';

  describe('Chapter 1 coding challenge test', function () {
    describe('Question 1.1', function () {
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

    describe('Question 1.2', function () {
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

    describe('Question 1.3', function () {
      it('should return a message if input string is empty and no string length given as second arguments', function () {
        expect(URLify('')).toBe('Please input strings with length > 0 and string length as second ');
      });

      it('should return the input string with each letter space replace my 20%', function () {
        expect(URLify('My name is Johnny   ', 17)).toBe('My%20name%20is%20Johnny');
      });
    });

    describe('Question 1.4', function () {
      it('should return a message if input length is 0', function () {
        expect(palinPermu('')).toBe('please enter a string with length more then 0');
      });

      it('should return true if the string is permutaion of a palindrom', function () {
        expect(palinPermu('Ta ct Coa')).toBe(true);
      });

      it('should return false if the string is not permutation of a palindrom', function () {
        expect(palinPermu('Ta ct Coa ff g')).toBe(false);
      });
    });

    describe('Question 1.5', function () {
      it('should return true if the string is only edited once by removing a character', function () {
        expect(oneAway('pale', 'ple')).toBe(true)
      });

      it('should return true if the string is only edited once by adding a character', function () {
        expect(oneAway('pales', 'pale')).toBe(true);
      });

      it('should return false if the string is edited more then once by adding more character', function () {
        expect(oneAway('palese', 'pale')).toBe(false);
      });

      it('should return false if the string is edited more then once by removing more character', function () {
        expect(oneAway('pale', 'pe')).toBe(false);
      });

      it('should return true if the string is edited no more then once by replaceing character', function () {
        expect(oneAway('pale', 'bale')).toBe(true);
      });

      it('should return false if the string is edited more then once by replaceing character', function () {
        expect(oneAway('pale', 'bake')).toBe(false);
      });
    });

    describe('Question 1.6', function () {
      it('should return the compressed string if it is shorter then the input string', function () {
        expect(stringCompress('aabbcccccaaa')).toBe('a5b2c5');
      });

      it('should return the input string if it is shorter then the compressed string', function () {
        expect(stringCompress('aabbcc')).toBe('aabbcc');
      });
    });

    describe('Question 1.7', function () {
      it('should return a 90 degree clockwise rotated 2x2 matrix', function () {
        expect(rotateMatrix([[1, 2], [3, 4]])).toEqual([[3, 1], [4, 2]]);
      });

      it('should return a 90 degree clockwise rotated 3x3 matrix', function () {
        expect(rotateMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).toEqual([[7, 4, 1], [8, 5, 2], [9, 6, 3]]);
      });

      it('should return a 90 degree clockwise rotated 4x4 matrix', function () {
        expect(rotateMatrix([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]])).toEqual([[13, 9, 5, 1], [14, 10, 6, 2], [15, 11, 7, 3], [16, 12, 8, 4]]);
      });


    })

  });

})();
