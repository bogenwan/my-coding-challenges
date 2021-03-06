const testDirectedGraph = require('../../chapter-four-problems/util/DirectedGraph.js');
const testBinarySearchTree = require('../../chapter-four-problems/util/BinarySearchTree.js');
const chapterFourFunctions = require('../../chapter-four-problems/chapter-four-problems.js');
const testMinimalTree = chapterFourFunctions.minimalTree;
const testListOfDepth = chapterFourFunctions.listOfDepths;
const testCheckBalanced = chapterFourFunctions.checkBalanced;
const testCreateTree = chapterFourFunctions.createTree;
const testCheckBST = chapterFourFunctions.checkBST;

    // let someUnsortedArray = [5, 7, 3, 9, 8, 10, 11, 2, 4, 1, 12];
    // let someBinaryTree = new testBinarySearchTree
    // let someTree = testCreateTree(someUnsortedArray, someBinaryTree);
    // console.log(testCheckBalanced(someTree.root.right.right));

(function () {
  'use strict'

  describe('Chapter 4 coding challenge test', function () {
    let testGraph = new testDirectedGraph();
    let testBinaryTree = new testBinarySearchTree();
    let sortedArray = [1, 2, 3, 4, 5, 6, 7];
    let unsortedArray = [5, 7, 3, 9, 8, 10, 11, 2, 4, 1, 12];

    describe('Question 4.1 Test directed graph and route between node function', function () {

      beforeEach(function () {
        testGraph.addNode('A');
        testGraph.addNode('B');
        testGraph.addNode('C');
        testGraph.addNode('D');
        testGraph.addNode('E');
        testGraph.addEdge('A', 'B');
        testGraph.addEdge('A', 'C');
        testGraph.addEdge('B', 'E');
        testGraph.addEdge('D', 'B');
      });

      afterEach(function () {
        testGraph.removeAll();
      });

      it('Should have node A in graph', function () {
        expect(testGraph.contains('A')).toBe(true);
      });

      it('Should have node B in graph', function () {
        expect(testGraph.contains('B')).toBe(true);
      });

      it('Should have node C in graph', function () {
        expect(testGraph.contains('C')).toBe(true);
      });

      it('Should not have node F in graph', function () {
        expect(testGraph.contains('F')).toBe(false);
      });

      it('Should have edge from node A to B in graph', function () {
        expect(testGraph.hasEdge('A', 'B')).toBe(true);
      });

      it('Should have edge from node D to B in graph', function () {
        expect(testGraph.hasEdge('D', 'B')).toBe(true);
      });

      it('Should have edge from node E to A in graph', function () {
        expect(testGraph.hasEdge('E', 'A')).toBe(false);
      });

      it('Should have route from node A to E in graph', function () {
        expect(testGraph.routeBetweenNode('A', 'E')).toBe(true);
      });

      it('Should not have route from node A to D in graph', function () {
        expect(testGraph.routeBetweenNode('A', 'D')).toBe(false);
      });

      it('Should have route from node D to E in graph', function () {
        expect(testGraph.routeBetweenNode('D', 'E')).toBe(true);
      });

      it('Should not have route from node C to D in graph', function () {
        expect(testGraph.routeBetweenNode('C', 'D')).toBe(false);
      });
    });

    describe('Question 4.2 test minimal tree functionality', function () {

      beforeEach(function () {
        testMinimalTree(sortedArray, testBinaryTree);
      });

      afterEach(function () {
        testBinaryTree.removeAll();
      });

      it('Should contain root node with value 4', function () {
        expect(testBinaryTree.root.value).toBe(4);
      });

      it('Should have value 2 at root note.left.value', function () {
        expect(testBinaryTree.root.left.value).toBe(2);
      });

      it('Should have value 6 at root note.right.value', function () {
        expect(testBinaryTree.root.right.value).toBe(6);
      });

      it('Should have value 7 at root note.right.right.value', function () {
        expect(testBinaryTree.root.right.right.value).toBe(7);
      });

      it('Should have value 1 at root note.left.left.value', function () {
        expect(testBinaryTree.root.left.left.value).toBe(1);
      });
    });

    describe('Question 4.3 test listOfDepth functionality', function () {

      beforeEach(function () {
        testMinimalTree(sortedArray, testBinaryTree);
      });

      afterEach(function () {
        testBinaryTree.removeAll();
      });

      it('Should have an arrayOfList length of 3', function () {
        expect(testListOfDepth(testBinaryTree).length).toBe(3);
      });

      it('Should have value of 4 in the first list in arraylist ', function () {
        expect(testListOfDepth(testBinaryTree)[0].head.value).toBe(4);
      });

      it('Should have value of 2 in the second list in arraylist ', function () {
        expect(testListOfDepth(testBinaryTree)[1].head.value).toBe(2);
      });

      it('Should have value of 6 in the second node of second list in arraylist ', function () {
        expect(testListOfDepth(testBinaryTree)[1].head.next.value).toBe(6);
      });

      it('Should have value of 1 in the first node of third list in arraylist ', function () {
        expect(testListOfDepth(testBinaryTree)[2].head.value).toBe(1);
      });

      it('Should have value of 7 in the last node of third list in arraylist ', function () {
        expect(testListOfDepth(testBinaryTree)[2].head.next.next.next.value).toBe(7);
      });
    });

    describe('Question 4.4 test checkBalanced functionality', function () {

      beforeEach(function () {
        testCreateTree(unsortedArray, testBinaryTree);
      });

      afterEach(function () {
        testBinaryTree.removeAll();
      });

      it('Should check root node and return false because it is not balanced', function () {
        expect(testCheckBalanced(testBinaryTree.root)).toBe(false);
      });

      it('Should check root node.right and return false because it is unbalanced', function () {
        expect(testCheckBalanced(testBinaryTree.root.right)).toBe(false);
      });

      it('Should check root node.left and return true because it is balanced', function () {
        expect(testCheckBalanced(testBinaryTree.root.left)).toBe(true);
      });

      it('Should check root node.left.right and return true because it have no length', function () {
        expect(testCheckBalanced(testBinaryTree.root.left.right)).toBe(true);
      });
    });

    describe('Question 4.5 test Validat BST', function () {

      beforeEach(function () {
        testCreateTree(unsortedArray, testBinaryTree);
      });

      afterEach(function () {
        testBinaryTree.removeAll();
      });

      it('Should check if tree is binary search tree and return true', function () {
        expect(testCheckBST(testBinaryTree.root)).toBe(true);
      });
    });

  });
})();