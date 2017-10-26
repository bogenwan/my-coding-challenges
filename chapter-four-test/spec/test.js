const testDirectedGraph = require('../../chapter-four-problems/util/DirectedGraph.js');

(function () {
  'use strict'

  describe('Chapter 4 coding challenge test', function () {
    let testGraph = new testDirectedGraph();

    describe('Chapter 4.1 Test directed graph and route between node function', function () {

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

  });
})();