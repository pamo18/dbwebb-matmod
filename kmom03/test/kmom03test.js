const assert = require('chai').assert;
const kmom03 = require('../kmom03.js');

describe('Kmom03 tests', function () {
    it('Mean of [21.3232, 38.3422, 12.7212, 41.6178] should be 28.5011', function () {
        assert.equal(kmom03.mean([21.3232, 38.3422, 12.7212, 41.6178]), 28.5011)
    })

    it('Population standard deviation of [21.3232, 38.3422, 12.7212, 41.6178] should be 13.7771', function () {
        assert.equal(kmom03.standardDeviation([21.3232, 38.3422, 12.7212, 41.6178]), 13.7771)
    })

    it('Exercise01: Probability of Pr(X <= 1.2) should be 0.8849', function () {
        assert.equal(kmom03.exercise01(), 0.8849);
    });

    it('Exercise02:Probability of Pr(X > 1.2) should be 0.1151', function () {
        assert.equal(kmom03.exercise02(), 0.1151);
    });

    it('Exercise03: Probability of Pr(X ≤ 7) when X is N(5,2) should be 0.8413', function () {
        assert.equal(kmom03.exercise03(), 0.8413);
    });

    it('Exercise04: Probability of Pr(3 < X ≤ 5) when X is N(5,2) should be 0.3413', function () {
        assert.equal(kmom03.exercise04(), 0.3413);
    });

    it('Exercise05: Pr(X ≤ -1) when X is N(0,1) should be 0.1587', function () {
        assert.equal(kmom03.exercise05(), 0.1587);
    });

    it('Exercise06: Pr(0 < X ≤ 1) when X is N(0,1) should be  0.3413', function () {
        assert.equal(kmom03.exercise06(0, 1, 0, 1), 0.3413);
    });

    it('Exercise06: Pr(-2 < X ≤ 11) when X is N(2,2) should be 0.9772', function () {
        assert.equal(kmom03.exercise06(2, 2, -2, 11), 0.9772);
    });

    it('Exercise06: Pr(5.4 < X ≤ 6.78) when X is N(6.22, 1) should be 0.5062', function () {
        assert.equal(kmom03.exercise06(6.22, 1, 5.4, 6.78), 0.5062);
    });


    it('Exercise07: Probability of cup will be overflown is 0.023', function () {
        assert.equal(kmom03.exercise07(), 0.023);
    });

    it('Exercise08: Pr(X+Y ≤ 2) should return 0.4207', function () {
        assert.equal(kmom03.exercise08(), 0.4207);
    });

    it('Exercise09: Pr(X>Y) should return 0.8942', function () {
        assert.equal(kmom03.exercise09(), 0.8942);
    });
})


