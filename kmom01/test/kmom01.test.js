const assert = require("chai").assert;
const f = require("../kmom01");

describe("Part 1 -Set theory", function () {
    it("Exercise01 should return Set([2, 4, 8])", function () {
        const answer = new Set([2, 4, 8]);
        assert.deepEqual(f.exercise01(), answer);
    });

    it("Exercise02 should return Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])", function () {
        const answer = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        assert.deepEqual(f.exercise02(), answer);
    });

    it("Exercise03 should return Set([6])", function () {
        const answer = new Set([6]);
        assert.deepEqual(f.exercise03(), answer);
    });

    it("Exercise04 should return Set([1, 3, 9])", function () {
        const answer = new Set([1, 3, 9]);
        assert.deepEqual(f.exercise04(), answer);
    });

    it("Exercise05 should return Set([5, 7])", function () {
        const answer = new Set([5, 7]);
        assert.deepEqual(f.exercise05(), answer);
    });

    it("Exercise06 should return Set([5, 7])", function () {
        const answer = new Set([5, 7]);
        assert.deepEqual(f.exercise06(), answer);
    });

    it("Exercise07 should return Set([1, 3, 6, 9])", function () {
        const answer = new Set([1, 3, 6, 9]);
        assert.deepEqual(f.exercise07(), answer);
    });

    it("Exercise08", function () {
        const A = new Set([1, 2, 3, 4])
        const B = new Set([1, 2, 3, 4, 5, 6])

        assert.equal(f.exercise08(A, B), true);
        assert.equal(f.exercise08(B, A), false);
        assert.equal(f.exercise08(A, A), false);
    })


    it("Exercise09", function () {
        const A = new Set([1, 2, 3, 4, 5])
        const B = new Set([4, 5, 6, 7, 8])
        const C = new Set([9, 10])

        assert.equal(f.exercise09(A, A), 5)
        assert.equal(f.exercise09(A, B), 8)
        assert.equal(f.exercise09(A, C), 7)
    })

    it("Exercise10", function () {
        const A = new Set([1, 2, 3, 4, "a"])
        const B = new Set(["c", 5, 6])
        const C = new Set(["c", 10])

        assert.equal(f.exercise10(A, B), true)
        assert.equal(f.exercise10(B, C), false)
        assert.equal(f.exercise10(A, A), false)
    })

});


describe("Part 2 -  Probability", function () {
    it("Execise11 should have 3 decimals", function () {
        const decimals = f.exercise11(6, 4).toString().split('.')
        assert.equal(decimals[1].length, 3)
    })

    it("Exercise11", function () {
        assert.equal(f.exercise11(6, 4), 0.167)
        assert.equal(f.exercise11(11, 5), 0.091)
    })


    it("Execise12 should have 3 decimals", function () {
        const decimals = f.exercise12(6, 4).toString().split('.')
        assert.equal(decimals[1].length, 3)
    })

    it("Exercise12", function () {
        assert.equal(f.exercise12(6, 4), 0.667)
        assert.equal(f.exercise12(6, 5), 0.833)
    })

    it("Execise13 should have 3 decimals", function () {
        const decimals = f.exercise13(6, 4).toString().split('.')
        assert.equal(decimals[1].length, 3)
    })

    it("Exercise13", function () {
        assert.equal(f.exercise13(6, 4), 0.333)
        assert.equal(f.exercise13(6, 5), 0.167)
    })

    it("Execise14 should have 3 decimals", function () {
        const decimals = f.exercise14().toString().split('.')
        assert.equal(decimals[1].length, 3)
    })

    it("Exercise14 should be less than 0.34 and greater than 0.33", function () {
        assert.isAbove(f.exercise14(), 0.33)
        assert.isBelow(f.exercise14(), 0.34)
    });
})

describe("Part 3 - Combinatorics", function () {
    it("Exercise 15", function () {
        assert.equal(f.exercise15(0), 1)
        assert.equal(f.exercise15(10), 3628800)
    });


    it("Exercise 16", function () {
        assert.equal(f.exercise16(5, 3), 60)
        assert.equal(f.exercise16(10, 5), 30240)
        assert.equal(f.exercise16(12, 4), 11880)
    });


    it("Exercise 17", function () {
        assert.equal(f.exercise17(10, 3), 120)
        assert.equal(f.exercise17(15, 6), 5005)
        assert.equal(f.exercise17(20, 20), 1)
    });




    it("Exercise 18", function () {
        assert.equal(f.exercise18(3, 2), 1.000)
        assert.equal(f.exercise18(5, 4), 0.476)
        assert.equal(f.exercise18(7, 3), 0.417)
    });
})

