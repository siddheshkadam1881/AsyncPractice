var async =require('async');
var arrayObj=[];
async.parallel([
 first1=function(callback)
   {
     console.log("hii1");
     var person=
         {
             name:"siddhesh"
         }
     
     callback(null,person);
   },
   first2= function(callback)
   {
    console.log("hii2");  
    const params = {
        Bucket: "BUCKET_NAME",
        Key: "file.originalname"
        } 
     callback(null,params);
   }
],
function(err,data)
{
console.log(data[0]);
console.log(data[1]);
//console.log("hii3");
});









