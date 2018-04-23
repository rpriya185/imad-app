console.log('Loaded!');
var button = document.getElementbyId('counter');
var counter=0;
button.onClick=function() {
  var request= new XMLhttpRequest();
  request.onreadystatechange=function()
 {
   if(request.readyState===XMLhttpRequest.DONE)  {
       if(request.status===200){
           var counter=request.responseText;
           var span=document.getElementbyId('count');
           span.innerHTML=counter.tostring();
          
       }
   }
 };
  request.open('GET','http://rpriya185.imad.hasura-app.io/counter',true);
  request.send(null);
    
};