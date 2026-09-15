const fs = require('fs');
const status=(err)=>{
    if(err)console.log("Error",err)
    else console.log("done")
}
//writefile-- used to create file
//  fs.writeFile('Hey.txt','hey this is starting of file',function(err){
//     if(err)
//         console.log("Error in writing file",err);
     
//     else
//         console.log("File written successfully");
    
//  })

 //appendile -- used to add data in existing file
//  fs.appendFile('Hey.txt','Its a data added my apped file',function(err){
//     if(err)console.log("Error",err)
//     else console.log("done")
//  })

//rename file- used to change the name of file
//  fs.rename('Hey.txt','Hello.txt',function(err){
//     if(err)console.log("Error",err)
//     else console.log("File renamed successfully")
//  })

//copy file- used to copy the file
// fs.copyFile('Hello.txt','copy.txt',status)

//unlink file- used to delete the file
// fs.unlink('copy.txt',status)

//rmdir/rm- used to delete the directory
// fs.rm('./index.txt',{recursive:true},status)

//readfile- used to read the file
// fs.readFile('./Hello.txt',(err,data)=>{
//     if(err)console.log("Error",err)
//     else console.log(data.toString ())})
// another way
// fs.readFile('./Hello.txt','utf-8',(err,data)=>{
//     if(err)console.log("Error",err)
//     else console.log(data)
// })


