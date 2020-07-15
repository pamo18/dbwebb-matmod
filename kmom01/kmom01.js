/*
 * MA1487 Matematisk modellering
 * Kursmoment 01
 * Paul Moreland
 * Pamo18
 *
 * Exercise 01-10 Set theory
 * Exercise 11-14 Probability
 * Exercise 15-18 Combinatorics and Probability
 */


/**
 * See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * for documentation for the set object in JavaScript
 *
 * In the following exercises the complements are denoted with prefix C.
 * Thus, CA is the complement of A, C(A ∩ B) is the complement of A ∩ B.
 *
 * The set U is the universal set.
 */


/**
 * Exercise01
 * Create the following sets
 * A = {2,4,6,8}
 * B = {1,2,3,4,8,9}
 *
 * Compute and the return the set A ∩ B
 *
 * @returns {Set} the set A ∩ B
 */
function exercise01() {
    let A = new Set ([2, 4, 6, 8]);
    let B = new Set ([1, 2, 3, 4, 8, 9]);

    let res = new Set([...A].filter(e => B.has(e)));

    return res;
}


/**
 * Exercise02
 * Create the following sets
 * A = {1,3,5,7,9}
 * B = {1,2,3,4,5,6,7,8,9,10}
 *
 * Compute and return the set A ∪ B
 *
 * @returns {Set} the set A ∪ B
 */
function exercise02() {
    let A = new Set ([1, 3, 5, 7, 9]);
    let B = new Set ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    let union = new Set([...A, ...B]);

    return union;
}

/**
 * Exercise03
 * Create the following sets
 * U = {1,2,3,4,5,6,7,8,9}
 * A = {2,4,6,8}
 * B = {1,2,3,4,8,9}
 *
 * @returns {Set} the set A ∩ CB
 */
function exercise03() {
    let U = new Set ([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    let A = new Set ([2, 4, 6, 8]);
    let B = new Set ([1, 2, 3, 4, 8, 9]);

    let comB = new Set([...U].filter(e => !B.has(e)));
    let res = new Set([...comB].filter(e => A.has(e)));

    return res;
}


/**
 * Exercise04
 * Create the following sets
 * U = {1,2,3,4,5,6,7,8,9}
 * A = {2,4,6,8}
 * B = {1,2,3,4,8,9}
 *
 * @returns {Set} the set CA ∩ B
 */
function exercise04() {
    let U = new Set ([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    let A = new Set ([2, 4, 6, 8]);
    let B = new Set ([1, 2, 3, 4, 8, 9]);

    let comA = new Set([...U].filter(e => !A.has(e)));
    let res = new Set([...comA].filter(e => B.has(e)));

    return res;
}


/**
 * Exercise05
 * Create the following sets
 * U = {1,2,3,4,5,6,7,8,9}
 * A = {2,4,6,8}
 * B = {1,2,3,4,8,9}
 *
 * @returns {Set} the set CA ∩ CB
 */
function exercise05() {
    let U = new Set ([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    let A = new Set ([2, 4, 6, 8]);
    let B = new Set ([1, 2, 3, 4, 8, 9]);

    let comA = new Set([...U].filter(e => !A.has(e)));
    let comB = new Set([...U].filter(e => !B.has(e)));

    let res = new Set([...comA].filter(e => comB.has(e)));

    return res;
}

/**
 * Exercise06
 * Create the following sets
 * U = {1,2,3,4,5,6,7,8,9}
 * A = {2,4,6,8}
 * B = {1,2,3,4,8,9}
 *
 * @returns {Set} the set C(A ∪ B)
 */
function exercise06() {
    let U = new Set ([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    let A = new Set ([2, 4, 6, 8]);
    let B = new Set ([1, 2, 3, 4, 8, 9]);

    let union = new Set([...A, ...B]);
    let res = new Set([...U].filter(e => !union.has(e)));

    return res;
}

/**
 * Exercise07
 * Create the following sets
 * U = {1,2,3,4,5,6,7,8,9}
 * A = {2,4,6,8}
 * B = {1,2,3,4,8,9}
 *
 * @returns {Set} the set (A ∩ CB)∪(CA ∩ B)
 */
function exercise07() {
    let U = new Set ([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    let A = new Set ([2, 4, 6, 8]);
    let B = new Set ([1, 2, 3, 4, 8, 9]);

    let comA = new Set([...U].filter(e => !A.has(e)));
    let comB = new Set([...U].filter(e => !B.has(e)));

    let p1 = new Set([...comB].filter(e => A.has(e)));
    let p2 = new Set([...comA].filter(e => B.has(e)));

    let union = new Set([...p1, ...p2]);

    return union;
}

/**
 * Exercise 08
 * Write a function to detemine if A is a proper subset of B
 *
 * @returns {Boolean} true if A is a proper subset of B, otherwise false
 */
function exercise08(A, B) {
    if (A === B) {
        return false;
    }

    let res = true;

    A.forEach(function(e) {
        if (!B.has(e)) {
            res = false;
        }
    });

    return res;
}

/**
 * Exercise09
 * Let A and B be sets. Write a function that returns the number of
 * elements in the set A ∪ B
 *
 * @param {Set} A
 * @param {Set} B
 * @return {Number} the number of elements in the set A ∪ B
 *
 */
function exercise09(A, B) {
    let union = new Set([...A, ...B]);

    return union.size;
}

/**
 * Exercise10
 * Two sets A and B are disjoint if they have no elements in common
 * Write a function to determine if A and B are disjoint
 *
 * @param {Set} A
 * @param {Set} B
 * @return {Boolean} true if A and B are disjoint, otherwise false
 */
function exercise10(A, B) {
    let disjoint = true;

    A.forEach(function(e) {
        if (B.has(e)) {
            disjoint = false;
        }
    });

    return disjoint;
}


/**
 * Exercise11
 * Given a single n-sided symmetrical dice and an integer p such that p <= n.
 * Compute the probability the dice exactly p dots with 3-decimal precision
 *
 * @param {Number} n    Sides of the dice
 * @param {Number} p    Number of dots
 * @returns {Number}    The probability a n-sided dice will show exactly p dots with 3 decimal precision
 */
function exercise11(n, p) {
    let res = 1 / n;

    return res.toFixed(3);
}

/**
 * Exercise12
 * Given a single n-sided symmetrical dice and an integer p such that p <= n.
 * Compute the probability the dice shows p or less dots with 3-decimal precision
 *
 * @param {Number} n    Sides of the dice
 * @param {Number} p    Number of dots
 * @returns {Number}    The probability a n-sided dice will show p dots or less
 * with 3 decimal precision
 */
function exercise12(n, p) {
    let atLeastP = (n - p) / n;
    let res = 1 - atLeastP;

    return res.toFixed(3);
}

/**
 * Exercise13
 * Given a single n-sided symmetrical dice and an integer p such that p <= n.
 * Compute the probability the dice shows at least p dots with 3-decimal precision
 *
 * @param {Number} n    Sides of the dice
 * @param {Number} p    Number of dots
 * @returns {Number}    The probability a n-sided dice will show at least p dots
 * with 3 decimal precision
 */
function exercise13(n, p) {
    let res = (n - p) / n;

    return res.toFixed(3);
}

/**
 * Exercise14
 * A regular six sided dice is tossed 100000 times.
 * Compute the relative frequence of observering a 5 or 6 when tossing a
 * dice with 3 decimal precision
 *
 * @returns {Number}    The relative frequency a dice will show a 5 or 6 with 3 decimal precision
 */
function exercise14() {
    let throws = 100000;
    let p = 2 / 6;
    let outcomes = p * throws;
    let rf = (outcomes / throws).toFixed(3);
    let res = parseFloat(rf);

    return res;
}


/**
 * Exercise15
 * Write a function that returns n factorial (n!)
 *
 * @param {Number} n
 * @return {Number} n-factorial (n!)
 */

function exercise15(n) {
    let fac = 1;
    for (let i = 2; i <= n; i++) {
        fac = fac * i;
    }
    return fac;
}


/**
 * Exercise16
 * Write a function that returns the number of ways you can choose k from n
 * options with respect to order
 *
 * @param {Number} n
 * @param {NUmber} k
 * @return {Number}
 */
function exercise16(n, k) {
    let a = exercise15(n);
    let b = exercise15((n - k));
    let res = a / b;

    return res;
}


/**
 * Exercise17
 * Write a function that return the number of ways you can choose k from n
 * options without respect to order (combinations)
 *
 * @param {Number} n
 * @param {Number} k
 * @return {Number}
 */
function exercise17(n, k) {
    let a = exercise15(n);
    let b = exercise15(k);
    let c = exercise15(n - k);
    let res = a / (b * c);

    return res;
}



/**
 * Exercise16
 * Given a group of n persons and another group of m persons.
 * Five persons are choosen randomly from both groups.
 * Compute the probability 3 persons are chosen from group 1 and 2 persons are
 * choosen from group 2. Return the answer with 3-decimal precision
 *
 * @param {Number} n total number of people in group 1
 * @param {Number} m total number of people in from group 2
 * @return {Number} Probability described above
 */
function exercise18(n, m) {
    let g1 = exercise17(n, 3);
    let g2 = exercise17(m, 2);
    let total = exercise17(n + m, 5);
    let res = (g1 * g2) / total;

    return res.toFixed(3);
}


module.exports.exercise01 = exercise01;
module.exports.exercise02 = exercise02;
module.exports.exercise03 = exercise03;
module.exports.exercise04 = exercise04;
module.exports.exercise05 = exercise05;
module.exports.exercise06 = exercise06;
module.exports.exercise07 = exercise07;
module.exports.exercise08 = exercise08;
module.exports.exercise09 = exercise09;
module.exports.exercise10 = exercise10;
module.exports.exercise11 = exercise11;
module.exports.exercise12 = exercise12;
module.exports.exercise13 = exercise13;
module.exports.exercise14 = exercise14;
module.exports.exercise15 = exercise15;
module.exports.exercise16 = exercise16;
module.exports.exercise17 = exercise17;
module.exports.exercise18 = exercise18;
