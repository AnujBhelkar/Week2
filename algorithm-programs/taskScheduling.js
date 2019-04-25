/****************************************************************************************************************
 *  Execution       :   1. default node         cmd> node taskScheduling.js                                      *
 *  Purpose         : Compute long list of tasks that you need to do today. To accomplish task you need M        *
 *                     minutes, and the deadline for this task is D                                              *
 *                                                                                                               *
 *  @file           : taskScheduling.js                                                                                    *
 *  @author         : ANUJ                                                                                           *
 *  @version        : 1.0                                                                                        *
 *  @since          : 25/04/2019                                                                                 * 
 *                                                                                                               *
 ****************************************************************************************************************/   

const read = require("readline-sync");
const utility = require("./utility");
let task = read.question(" Enter Number of task:- ");
utility.taskScheduling(task);