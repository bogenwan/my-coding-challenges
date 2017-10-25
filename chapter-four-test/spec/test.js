const testDirectedGraph = require('../../chapter-four-problems/util/DirectedGraph.js');

(function () {
  'use strict'

  describe('Chapter 4 test', function () {
    let testGraph = new testDirectedGraph();
    testGraph.addNode('A')
    console.log(testGraph)
    it('Should show a graph', function () {
      expect(true).toBe(true);
    });
  });

})();