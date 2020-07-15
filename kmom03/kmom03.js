/**
 * MA1487 matmod
 * kmom03
 */

// Name: Paul Moreland
// Acronym: pamo18

const gaussian = require('gaussian');

function distribution(mean, stdDev) {
    return gaussian(mean, Math.pow(stdDev, 2));
}

/**
 * How to create a distribution for exercise01-09
 *
 * const dist = distribution(mean, stdDev);
 *
 * Probability Functions
 *
 * dist.pdf(x): Pr(X=x), the probability density function, which describes the probability of a random variable taking on the value x
 * dist.cdf(x): Pr(X≤x) the cumulative distribution function, which describes the probability of a random variable falling in the interval (−∞, x]
 * dist.ppf(x): the percent point function, the inverse of cdf
 *
 */

/**
 * Arithmetic mean
 *
 * Write a function that computes and return the arithmetic mean of the elements
 * in the array x with 4 decimal precision.
 *
 * @param {number[]} x
 * @return {number} The arithmetic mean of the elements in the array x
 */
function mean(x) {
    let total = 0;
    let mean;

    x.forEach(function(num) {
        total += num;
    });

    mean = total / x.length;

    return mean.toFixed(4);
}

/**
 * Standard deviation
 *
 * Write a function that computes and the sample standard deviation of the elements in
 * the array x with 4 decimal precision.
 *
 * @param {number[]} elements
 * @return {number} The standard deviation of the elements in x
 */

function standardDeviation(x) {
    let mean = this.mean(x);
    let diffSqrd = 0;
    let variance;
    let stddev;

    x.forEach(function(num) {
        diffSqrd += Math.pow(num - mean, 2);
    });

    variance = diffSqrd / (x.length - 1);
    stddev = Math.sqrt(variance).toFixed(4);

    return stddev;
}

/**
 * Exercise01
 *
 * @return {number} The probability of Pr(X ≤ 1.2) when X is N(0,1) with 4 decimal precision
 */
function exercise01() {
    let dist = distribution(0, 1);
    let res = dist.cdf(1.2);
    return res.toFixed(4);
}

/**
 * exercise02
 *
 * @return {number} The probability of Pr(X > 1.2) when X is N(0,1) with 4 decimal precision
 */
function exercise02() {
    let dist = distribution(0, 1);
    let res = 1 - dist.cdf(1.2);
    return res.toFixed(4);
}

/**
 * exercise03
 *
 * @return {number} The probability of Pr(X ≤ 7) when X is N(5,2) with 4 decimal precision
 */
function exercise03() {
    let dist = distribution(5, 2);
    let res = dist.cdf(7);
    return res.toFixed(4);
}

/**
 * exercise04
 *
 * @return {number} The probability of Pr(3 < X ≤ 5) when X is N(5,2) with 4 decimal precision
 */
function exercise04() {
    let dist = distribution(5, 2);
    let a = 1 - dist.cdf(3);
    let b = dist.cdf(5);
    let res = (a + b) - 1;

    return res.toFixed(4);
}

/**
 * exercise05
 *
 * @return {number} The probability of Pr(X ≤ -1) when X is N(0,1) with 4 decimal precision
 */
function exercise05() {
    let dist = distribution(0, 1);
    let res = dist.cdf(- 1);
    return res.toFixed(4);
}

/**
 * exercise06
 *
 * @param {number} mean mean μ
 * @param {number} stdDev standard deviation σ
 * @param {number} a lower bound
 * @param {number} b upper bound

 * @return {number} the probability of Pr(a ≤ X ≤ b) when X is
 * N(μ,σ) with 4 decimal precision
 */
function exercise06(mean, stdDev, a, b) {
    if (b < a) {
        return 0;
    }

    let dist = distribution(mean, stdDev);
    let c = 1 - dist.cdf(a);
    let d = dist.cdf(b);
    let res = (c + d) - 1;
    return res.toFixed(4);
}

/**
 * exercise07
 *
 * A coffee vending machine dispenses coffee, in a way such that the volume
 * is normally distributed with mean 1.8 dl and standard deviation 0.1 dl.
 *
 * A coffee cup can hold up to 2.0 dl of coffee.
 *
 * Calculate and return the probability with 3 decimal precision that a cup
 * will be overflowed
 *
 * @return {number} The probability of a cup will be overflown with 3 decimal precision.
 *
 */
function exercise07() {
    let mean = 1.8;
    let stdDev = 0.1;
    let cup = 2;
    let dist = distribution(mean, stdDev);
    let res = 1 - dist.cdf(cup);

    return res.toFixed(3);
}

/**
 * Let X and Y be two independent stochastic variables such that X is N(a,b)
 * and Y is N(c,d). Then  Z = X+Y is N(a+c,sqrt(b^2 + d^2)), and Z = X-Y is N(a-c, sqrt(b^2+d^2))
 * *
 * Return the probability of Pr(X+Y ≤ 2) when X is N(2,3), and Y is N(1,4) with 4 decimal precision
 * @return {number}
 */
function exercise08() {
    let mean = 2 + 1;
    let stdDev = Math.sqrt(Math.pow(3, 2) + Math.pow(4, 2));
    let dist = distribution(mean, stdDev);
    let res = dist.cdf(2);

    return res.toFixed(4);
}

/**
 * The score of student test A is normally distributed with mean 48 and standard deviation 5
 * The score of student test B is normally distributed with mean 40 and standard deviation 4
 *
 * Let X be the result from a random choosen student who took test A
 * Let Y be the result from a random choosen student who took test B
 *
 * Calculate and return the probaility Pr(X > Y) with 4 decimal precision
 * Hint. Pr(X > Y)= Pr(X-Y > 0)
 */
function exercise09() {
    let mean = 48 - 40;
    let stdDev = Math.sqrt(Math.pow(5, 2) + Math.pow(4, 2));
    let dist = distribution(mean, stdDev);
    let res = 1 - dist.cdf(0);

    return res.toFixed(4);
}

module.exports.mean = mean;
module.exports.standardDeviation = standardDeviation;
module.exports.exercise01 = exercise01;
module.exports.exercise02 = exercise02;
module.exports.exercise03 = exercise03;
module.exports.exercise04 = exercise04;
module.exports.exercise05 = exercise05;
module.exports.exercise06 = exercise06;
module.exports.exercise07 = exercise07;
module.exports.exercise08 = exercise08;
module.exports.exercise09 = exercise09;
