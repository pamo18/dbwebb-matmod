/*
 * MA1487 Matematisk modellering
 * Kursmoment 02
 * Pamo18
 * Paul Moreland
 */


/**
 * Exercise01
 * Given two events A and B, such that
 *
 * Pr(A) = 0.16
 * Pr(A ∩ B) = 0.003
 * Pr(CA ∩ B) = 0.12
 *
 * Compute the probability Pr(A ∪ B) with 3 decimal precision
 *
 * @returns {Number} the probability Pr(A ∪ B) with 3 decimal precision
 */
function exercise01() {
    let a = 0.16;
    let compAb = 0.12;
    let res = a + compAb;

    return res.toFixed(3);
}


/**
 * Exercise02
 * Given two events A and B, such that
 *
 * Pr(A) = 0.16
 * Pr(A ∩ B) = 0.003, and
 * Pr(CA ∩ B) = 0.12
 *
 * Compute the probability Pr(B) with 3 decimal precision
 *
 * @returns {Number} the probability Pr(B) with 3 decimal precision
 */
function exercise02() {
    let a = 0.16;
    let ab = 0.003;
    let compAb = 0.12;
    let b = compAb + ab;

    return b.toFixed(3);
}

/**
 * Exercise03
 * Given two events A and B, such that
 *
 * Pr(A) = 0.16
 * Pr(A ∩ B) = 0.003, and
 * Pr(CA ∩ B) = 0.12
 *
 * Compute the probability Pr(A ∩ CB) with 3 decimal precision
 *
 * @returns {Number} the probability Pr(A ∩ CB) with 3 decimal precision
 */
function exercise03() {
    let a = 0.16;
    let ab = 0.003;
    let compAb = 0.12;
    let aCompB = a - ab;

    return aCompB.toFixed(3);
}


/**
 * Exercise04
 * Let A and B be events such that
 *
 * Pr(A) = x,
 * Pr(B) = y, and
 * Pr(A ∩ B) = z
 *
 * Write a function to determine the probability of Pr(CA ∩ CB),
 * (the probability that neither of the events A nor B occurs)
 * with 3 decimal precision
 *
 * @param {Number} x probability Pr(A)
 * @param {Number} y probability Pr(B)
 * @param {Number} z probability Pr(A ∩ B)
 * @returns {Number} probability of Pr(CA ∩ CB) with 3 decimal precision
 */
function exercise04(x, y, z) {
    let res = 1 - x - y + z;

    return res.toFixed(3);
}


/**
 * Exercise05
 * Let A, B and C be event such that
 *
 * Pr(A) = 0.2
 * Pr(B) = 0.3
 * Pr(C) = 0.4
 * The events A and B are independent
 * The events A and C are independent
 * The events B anc C can not occur simultaneously
 *
 * Compute and the return the probability that at
 * least one event will occur (Pr(A ∪ B ∪ C) )with 3 decimal precision
 *
 * @returns {Number} the probability Pr(A ∪ B ∪ C) with 3 decimal precision
 */
function exercise05() {
    let a = 0.2;
    let b = 0.3;
    let c = 0.4;
    let aPlusBPlusC = a + b + c;
    let ab = a * b;
    let ac = a * c;
    let bc = 0;
    let simAbc = 0;
    // Pr(A ∪ B ∪ C) = P(A) + P(B) + P(C) - P(A ∩ B) - P(A ∩ C) - P(B ∩ C) + P(A ∩ B ∩ C)
    let res = aPlusBPlusC - ab - ac - bc + simAbc;

    return res;
}

/**
 * Exercise06
 * Let A and B be event such that
 * Pr(A) = x
 * Pr(B) = y
 * Pr(A ∩ B) = z
 *
 * Compute and the return the probability Pr(A|B) with 3 decimal precision
 *
 * @returns {Number} the probability Pr(A|B) with 3 decimal precision
 */
function exercise06(x, y, z) {
    let res = z / y;

    return res.toFixed(3);
}

/**
 * Exercise07
 * Let A and B be two events such that
 * Pr(A ∩ B) = 0.212, and
 * P(CA ∩ B) = 0.431
 *
 * Compute and return the probability Pr(A|B) with 3 decimal precision
 *
 *
 * @returns {Number} the probability Pr(A|B) with 3 decimal precision
 */
function exercise07() {
    let ab = 0.212;
    let compAb = 0.431;
    let b = ab + compAb;
    let res = ab / b;

    return res.toFixed(3);
}

/**
 * Exercise 08
 * Let A and B be two events such that
 * P(A) = 0.8
 * P(A ∩ B) = 0.2, and
 * P(A ∪ B) = 0.9.
 *
 * Compute and return the probability Pr(A|B) with 3 decimal precision
 *
 * @returns {Number} the probability Pr(A|B) with 3 decimal precision
 */
function exercise08() {
    let a = 0.8;
    let aAndb = 0.2;
    let aOrB = 0.9;
    // P(A ∪ B) = Pr(A) + Pr(B) − Pr(A ∩ B)
    let b = (aOrB + aAndb) - a;
    let res = aAndb / b;

    return res.toFixed(3);
}

/**
 * Exercise09
 * A regular 6-sided die is tossed twice.
 *
 * Compute and return the probability of an odd sum of the dots with
 * 3 decimal precision given that the sum of the dots is 11 or greater.

 *  @returns {Number} the probability of 2 dice showing an odd sum given
 *                      given that the sum of the dots is 11 or greater
 *                      with 3 decimal precision
 *
 */
function exercise09() {
    // Pr(A∣B) = Pr(A n B) / Pr(B)
    // Pr(A∩B) = Pr(A)⋅Pr(B|A)
    let outcomes = 6 * 6; // 36
    let a = 2 / 6; // (5,6) & (6,5)
    let ba = 1 / 6; // (6) or (5)
    let aAndB = a * ba; //sum is 11 (5,6) & (6,5)
    let b = 3 / outcomes; //roll 11 or above (5,6) & (6,5) & (6,6)
    let res = aAndB / b;

    return res.toFixed(3);
}

/**
 * Exercise10
 * A gambler is playing a game where the probability of winning is x.
 * Suppose the gambler is playing the game 10 times.
 *
 * Compute and return the probability that the gambler will win the game
 * exactly n times with 3 decimal precision.
 *
 * @param {Number} x probability of winning the game
 * @param {Number} n games won
 * @returns {Number} probability that the gambler will win the game
 *                     exactly n times with 3 decimal precision.
 */
function exercise10(x, n) {
    let N = 10;

    function factorial(n) {
        let fac = 1;
        for (let i = 2; i <= n; i++) {
            fac = fac * i;
        }
        return fac;
    }

    let facN = factorial(N);
    let facn = factorial(n);
    let a = facN / (facn * (factorial(N - n)));

    let b = Math.pow(x, n);
    let c = Math.pow(1 - x, N - n);
    let binDist = a * b * c;

    return binDist.toFixed(3);
}


/**
 * Exercise11 (Bayes' theorem)
 *
 * A fictional university offers three different programmes A,B, and C.
 * Currently 30 students are enrolled in A, 60 in students in B, and 60 students in C.
 *
 * A student enrolled in the A-programme passes an exam with 0.6 probability
 * A student enrolled in the B-programme passes an exam with 0.5 probability
 * A student enrolled in the B-programme passes an exam with 0.4 probability
 *
 * Student X passed the exam.
 * Compute and return the probaility student X is enrolled in the A-programme
 * with 3 decimal precision
 */
function exercise11() {
    let a = 30;
    let b = 60;
    let c = 60;
    let prA = 0.6;
    let prB = 0.5;
    let prC = 0.4;
    let students = a + b + c;

    // (Pr(Ak) * Pr(B|Ak)) / sum i = 1nPr(Ai) * Pr(B|Ai)

    let prAk = prA;
    let prBAk = a / students;
    let prA1BA1 = ((a / students) * prA);
    let prA2BA2 = ((b / students) * prB);
    let prA3BA3 = ((c / students) * prC);

    let res = (prAk * prBAk) / (prA1BA1 + prA2BA2 + prA3BA3);

    return res.toFixed(3);
}

/**
 * Exercise12 (Bayes' theorem)
 * In a employee survey, the results shows that x% of the M male employee are satisfied
 * with their salary, and y% of the F female employee are satisfied with their salary.
 *
 * Compute and return the probability a satisfied person is a female
 *
 */
function exercise12(x, y, M, F) {
    let prM = x;
    let prF = y;
    let employees = M + F;

    // (Pr(Ak) * Pr(B|Ak)) / sum i = 1nPr(Ai) * Pr(B|Ai)

    let prAk = y;
    let prBAk = (F / employees);
    let prA1BA1 = ((M / employees) * prM);
    let prA2BA2 = ((F / employees) * prF);

    let res = (prAk * prBAk) / (prA1BA1 + prA2BA2);

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
