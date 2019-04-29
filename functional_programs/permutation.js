var util=require('../utility/utility');

var readline=require('readline-sync');
function permutation()
{
  var string= readline.question('Enter the String ');
  var vr=util.permutation("",string,0,string.length-1);
}
permutation();
