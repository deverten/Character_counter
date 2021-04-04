 
 
 function doThis(){
    var tweet = document.getElementById("input-tweet").value;
 var tweetLength = tweet.length;
 document.getElementById("count").innerHTML = tweetLength + " characters typed!";

 if (tweetLength >= 0 && tweetLength <= 10){
    return document.body.style.background = 'green';
}
else if (tweetLength >= 11 && tweetLength <= 20){
   return  document.body.style.background = 'red';
}
else if (tweetLength >= 21 && tweetLength <= 30){
    return document.body.style.background = 'yellow';
}
else {
    return document.body.style.background = 'green';
}
 }
 

 






 


    



