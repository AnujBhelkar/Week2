/****************************************************************************************************************
 *  Execution       :   1. default node         cmd> node guessGame.js                                           *     
 *  Purpose         : Takes a command­line argument N, asks you to think of a number                              *
 *                    between 0 and N­1, where N = 2^n, and always guesses the answer with n                      *
 *                    questions.                                                                                 *
 *                                                                                                               *
 *  @file           : guessGame.js                                                                               *
 *  @overview       : Always guesses the answer with n questions.                                                *                                                                                                        *
 *  @author         : ANUJ                                                                                           *
 *  @version        : 1.0                                                                                        *
 *  @since          : 25/04/2019                                                                                 * 
 *                                                                                                               *
 ****************************************************************************************************************/   

const read = require("readline-sync");
const utility = require("./utility");
utility.guessGame();