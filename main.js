/*
get a random number less than 10,
then, wait three seconds
then, write the number to the hard drive
Then, once all that is done, console log "I'm done!"

CONSTRAINTS
- You must use "getNumLessThan.js" to generate your random number. Note: the "getNumLessThan.js" file is just an overly complicated way to make getting a random number asynchronous (there is no reason for it to be asynchronous, other than as an exercise).
- No editing any file except main.js (comments are the exception)
*/



/* 
I 
O  writing a random number less than 10 to a file in three seconds
C use all these functions
E
 */
const getNumLessThanTen = require('./getNumLessThan.js')
const waitOneSecond = require("./waitOneSecond.js")
const writeToHardDrive = require('./writeToHardDrive')

 const main = function(){
     //get10
     getNumLessThanTen((err, numData) =>{
         waitOneSecond((err, message) => {
             waitOneSecond((err, message) => {
                waitOneSecond((err, message) => {
                    writeToHardDrive(numData, (err, message) => {
                        if(err) {
                            throw(err)
                        } else{console.log('im done');}
                    })
                })
             })
         })
     })
     //wait 1 second 3 times
     //write to file
 }

 main();