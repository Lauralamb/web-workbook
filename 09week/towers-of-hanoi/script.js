'use strict';

$(document).ready(function() {
  $(".draggable").draggable({
    revert: 'invalid'
  })
$(".droppable").droppable({
  drop: function (event,ui){
    $(ui.draggable).appendTo(this).attr('style', 'position: "relative"');
  }
})






});
