/****************************************************************************************************************
 *  Execution       :   1. default node         cmd> node sqrt.js                                                *
 *  Purpose         : Compute the square root of a nonnegative number c given in the input using Newton's method *
 *                                                                                                               *
 *  @file           : Sqrt.js                                                                                    *
 *  @overview       : Square root of a nonnegative number c given in the input                                   *
 *  @author         :                                                                                            *
 *  @version        : 1.0                                                                                        *
 *  @since          : 25/04/2019                                                                                 * 
 *                                                                                                               *
 ****************************************************************************************************************/   

const read = require("readline-sync");
const utility = require("./utility");
let sqrt = read.question(" Enter the value ");
utility.squrt(sqrt);