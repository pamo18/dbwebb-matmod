const assert = require("chai").assert;
const f = require("../kmom02");

describe("Kmom02", function () {
    it("Exercise01", function () {
        assert.equal(f.exercise01(), 0.280);
    });

    it("Exercise02", function () {
        assert.equal(f.exercise02(), 0.123);
    });

    it("Exercise03", function () {
        assert.equal(f.exercise03(), 0.157);
    });

    it("Exercise04", function () {
        assert.equal(f.exercise04(0.5, 0.6, 0.2), 0.100);
        assert.equal(f.exercise04(0.321, 0.416, 0.102), 0.365);
    });

    it("Exercise05", function () {
        assert.equal(f.exercise05(), 0.760);
    });

    it("Exercise06", function () {
        assert.equal(f.exercise06(0.5, 0.8, 0.4), 0.500);
        assert.equal(f.exercise06(0.5, 0.7, 0.4), 0.571);
    });

    it("Exercise07", function () {
        assert.equal(f.exercise07(), 0.330)
    })

    it("Exercise08", function () {
        assert.equal(f.exercise08(), 0.667)
    })


    it("Exercise09", function () {
        assert.equal(f.exercise09(), 0.667)
    })

    it("Exercise10", function () {
        assert.equal(f.exercise10(0.5, 4), 0.205)
        assert.equal(f.exercise10(0.8, 7), 0.201)
    })

    it("Exercise11", function () {

        assert.equal(f.exercise11(), 0.250)
    })

    it("Exercise12", function () {
        assert.equal(f.exercise12(0.55, 0.45, 50, 60), 0.495)
        assert.equal(f.exercise12(0.08, 0.05, 30, 10), 0.172)
    })
})
