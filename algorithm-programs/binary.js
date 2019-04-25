/****************************************************************************************************************
 *  Execution       :   1. default node         cmd> node binary.js                                              *
 *  Purpose         : Compute the binary representation of n                                                     *
 *                                                                                                               *
 *  @file           : Sqrt.js                                                                                    *
 *  @overview       : To compute the binary representation of n, we consider the powers of 2 less than or        *
 *                     equal to n in decreasing order to determine which belong in the binary                    *
 *                     decomposition (and therefore correspond to a 1 bit in the binary representation).         *
 *  @author         :                                                                                            *
 *  @version        : 1.0                                                                                        *
 *  @since          : 25/04/2019                                                                                 * 
 *                                                                                                               *
 ****************************************************************************************************************/   

const read = require("readline-sync");
const utility = require("./utility");
let decimal = read.question(" Enter the Decimal Number:- ");
utility.binary(decimal);