'use strict'
$(document).ready(function() {


// $('.workButton').click(function(){
//     $('.workContent').toggle();
// });
// $( ".work" ).hover(function(){
//     $(this).on('click',  event =>{
//         $(event.currentTarget)
//         .addClass('work:hover')
//         .fadeIn("slow",function(){
//             $(this).css({opacity:0.5})
//             $(this).children('.square').fadeOut("slow")
//             $(this).children('.square').hide()
//             $('.square').children('week1').show()
//         })
//     });
//     $(this).on('mouseleave', event =>{
//         $(event.currentTarget)
//         .removeClass('work:hover')
//         .fadeIn("slow",function(){
//             $(this).css({opacity:1.0})
//             $(this).children('.square').fadeIn("slow")
//             $(this).children('.square').show()
            

//         })
//     });
// });
// $(".work").on('mouseover click', function (event) {
//     if (event.type === "mouseover") {
//         $(event.currentTarget).addClass('work:hover')
//     } else if (event.type === "click") {
//         $(event.currentTarget).fadeIn("slow",function(){
//         $(this).css({opacity:0.5})
//         $(this).children('.square').hide()
//         $('.week').fadeIn()
//         $('.week').addClass('.display')
//     })
//     }
// });
// $(".work").on('mouseleave', function (event) {
//     $('.week').removeClass('.display')
//     $('.week').hide()
//     $(this).children('.square').show()
//     $(this).addClass('.work')
// })
// //need to fix this for each week to display the diff content

// //this finds all divs but div.div does not select the children for the stuff above
// var allDivElements = $('div');
// $( "div.div" ).find(allDivElements);
// console.log(allDivElements);

// //need to code pushed to open class 1 content

// //clicked state
// $('.square').on('click', function(){
//     $('.square').removeClass('.selected');
//     $(this).addClass('.selected');
//

//toggles each week from clicking class
//class1
const $sqc1 = $('.sqc1');
const $class1Content = $('.class1Content');
const $class1container = $('.class1container');
$sqc1.on('click',function(e) {
        e.preventDefault();
        $class1container.slideToggle();
    });
    //class2
const $sqc2 = $('.sqc2');
const $class2Content = $('.class2Content');
const $class2container = $('.class2container');
$sqc2.on('click',function(e) {
        e.preventDefault();
        $class2container.slideToggle();
    });
    //class3
const $sqc3 = $('.sqc3');
const $class3Content = $('.class3Content');
const $class3container = $('.class3container');
$sqc3.on('click',function(e) {
        e.preventDefault();
        $class3container.slideToggle();
    });
});


//onhover make the bg of the button transition to vertical - maybe basic CSS and later change to JS
//nake it to where only 1 classes content is visible at a time and maybe have same bg color behind the 'button' 
//make it look like a clicked state?
//pop out the weeks work when hovered?