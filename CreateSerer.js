const fs = require ('fs')
// Create /Update method 1
fs.appendFile ('file1.txt' , 'Helo World' , function(err){
    if (err) console.log(err)
    else console.log ("saved")
})
// Create /Update method 2
fs.writeFile ('file1.txt' , 'Helo World' , function(err){
    if (err) console.log(err)
    else console.log ("saved")
})

//Delete files
fs.unlink("file1.txt" , function(err){
    if (err) console.log(err)
    else console.log("Donee ")
})

//Rename files
fs.rename('file1.txt' , 'fille22.txt', function(err){
    if(err) console.log(err)
    else console.log ("Doneeeee")
})