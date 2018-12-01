'use strict';

$(document).ready(function() {
  //attributes will be targeted with []
  //player turns works!
  var turn ='X';
  var count = 0;
  $('[data-cell]').on('click', function(){
    if($(this).text() === ''){
    $(this).text(turn);
    count++;
    checkForWin(count);
    if(turn === 'O'){
      turn = 'X';
    }else{
      turn='O';
    }
  }
  })
//all winning conditions - works!
  function checkForWin(tie){
    if(tie === 9){
      $('#announce-winner').text(`It\'s a Tie, Try Again`);
    }
    if($('[data-cell="0"]').text() === turn &&
    $('[data-cell="1"]').text() === turn &&
    $('[data-cell="2"]').text() === turn){
      $('#announce-winner').text(`${turn} wins`);
    }else if($('[data-cell="3"]').text() === turn &&
    $('[data-cell="4"]').text() === turn &&
    $('[data-cell="5"]').text() === turn){
      $('#announce-winner').text(`${turn} wins`);
    }else if($('[data-cell="6"]').text() === turn &&
    $('[data-cell="7"]').text() === turn &&
    $('[data-cell="8"]').text() === turn){
      $('#announce-winner').text(`${turn} wins`);
    }else if($('[data-cell="2"]').text() === turn &&
    $('[data-cell="4"]').text() === turn &&
    $('[data-cell="6"]').text() === turn){
      $('#announce-winner').text(`${turn} wins`);
    }else if($('[data-cell="0"]').text() === turn &&
    $('[data-cell="4"]').text() === turn &&
    $('[data-cell="8"]').text() === turn){
      $('#announce-winner').text(`${turn} wins`);
    }else if($('[data-cell="2"]').text() === turn &&
    $('[data-cell="5"]').text() === turn &&
    $('[data-cell="8"]').text() === turn){
      $('#announce-winner').text(`${turn} wins`);
    }else if($('[data-cell="0"]').text() === turn &&
    $('[data-cell="3"]').text() === turn &&
    $('[data-cell="6"]').text() === turn){
      $('#announce-winner').text(`${turn} wins`);
    }else if($('[data-cell="1"]').text() === turn &&
    $('[data-cell="4"]').text() === turn &&
    $('[data-cell="7"]').text() === turn){
      $('#announce-winner').text(`${turn} wins`);
    }
  }
  //tie conditions - figure out how to make a tie and put up in the else statement
  //if no blank spaces and no winner trigger a tie -  watch the video of class to figure out what else to do
  // function checkForTie(){
  //   if ('[data-cell]').text !=''{
  //     count++;
  //     $('#announce-winner').text(`It\'s a Tie!`);
  //   }
  // }
  //clear button - works!
  $('#clear').click(function(){
    $('[data-cell]').empty();
    $('#announce-winner').text ('');
  });
})
//need to stop game if there is already a declared winner