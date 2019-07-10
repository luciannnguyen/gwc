console.log('before');

setTimeout(function(){
    console.log('after');
},500);

// showMessage();

function showMessage() {
  var message_list = document.getElementsByClassName("message");
  // console.log(message_list);

  // var i;
  // for (i = 0; i < message_list.length; i++) {
  //   message_list[i].style.display = "block";
  //   console.log("display block " + i);
  //   wait(2000);
  // }

  var index = 0;
  var my_interval = setInterval( displayIndex(), 100);

  function displayIndex() {
    console.log(message_list);
    if (index == message_list.length - 1) {
      console.log("end @ " + index)
      clearInterval(my_interval);
    }
    else {
      console.log(index);
      message_list[index].style.display = "block";
      console.log("display block " + index);
      index++;
    }
  }
}

// manual wait function -- "ms" in milliseconds
// source:
// https://stackoverflow.com/questions/14226803/wait-5-seconds-before-executing-next-line
function wait(ms) {
   var start = new Date().getTime();
   var end = start;

   while(end < start + ms) {
     end = new Date().getTime();
  }
}
