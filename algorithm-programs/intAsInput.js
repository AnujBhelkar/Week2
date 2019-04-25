/****************************************************************************************************************
 *  Execution       :   1. default node         cmd> node intAsInput.js                                              *
 *  Purpose         : Compute the binary representation of n                                                     *
 *                                                                                                               *
 *  @file           : Sqrt.js                                                                                    *
 *  @overview       : i. Swap nibbles and find the new number.                                                   *
 *                    ii. Find the resultant number is the number is a power of 2.                               *
 *  @author         :                                                                                            *
 *  @version        : 1.0                                                                                        *
 *  @since          : 25/04/2019                                                                                 * 
 *                                                                                                               *
 ****************************************************************************************************************/   

const read = require("readline-sync");
const utility = require("./utility");
let decimal = read.question(" Enter the Decimal Number:- ");
utility.intAsInput(decimal);