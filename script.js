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

//classes
const $class1Content = $('.class1Content');
const $class1container = $('.class1container');
const $sqc1 = $('.sqc1');
const $sqc2 = $('.sqc2');
const $class2Content = $('.class2Content');
const $class2container = $('.class2container');
const $sqc3 = $('.sqc3');
const $class3Content = $('.class3Content');
const $class3container = $('.class3container');

//weeks
const $week1 = $('.week1');
const $week2 = $('.week2');
const $week3 = $('.week3');
const $week4 = $('.week4');
const $week5 = $('.week5');
const $week6 = $('.week6');
const $week7 = $('.week7');
const $week8 = $('.week8');
const $week9 = $('.week9');
const $week10 = $('.week10');
const $week11 = $('.week11');
const $sq1 = $('.sq1');
const $sq2 = $('.sq2');
const $sq3 = $('.sq3');
const $sq4 = $('.sq4');
const $sq5 = $('.sq5');
const $sq6 = $('.sq6');
const $sq7 = $('.sq7');
const $sq8 = $('.sq8');
const $sq9 = $('.sq9');
const $sq10 = $('.sq10');
const $sq11 = $('.sq11');
const $box1 = $('.box1');
const $box2 = $('.box2');
const $box3 = $('.box3');
const $box4 = $('.box4');
const $box5 = $('.box5');
const $box6 = $('.box6');
const $box7 = $('.box7');
const $box8 = $('.box8');
const $box9 = $('.box9');
const $box10 = $('.box10');
const $box11 = $('.box11');

//toggles each week from clicking class
//class1
$class1Content.hide();

$sqc1.mouseover(function () {
    $class1Content.slideDown('slow');
});

$class1container.mouseleave(function () {
    $class1Content.slideUp('slow');
});
    //class2
    $class2Content.hide();

    $sqc2.mouseover(function () {
        $class2Content.slideDown('slow');
    });
    
    $class2container.mouseleave(function () {
        $class2Content.slideUp('slow');
    });
    //class3
$class3Content.hide();

$sqc3.mouseover(function () {
    $class3Content.slideDown('slow');
});

$class3container.mouseleave(function () {
    $class3Content.slideUp('slow');
});


    //toggle each week's project links
    $week1.hide();

    $box1.mouseover(function () {
        $week1.slideDown('slow');
    });
    
    $box1.mouseleave(function () {
        $week1.slideUp('fast');

    $week2.hide();

        $box2.mouseover(function () {
            $week2.slideDown('slow');
        });
        
        $box2.mouseleave(function () {
            $week2.slideUp('fast');
        });
    $week3.hide();

        $box3.mouseover(function () {
            $week3.slideDown('slow');
        });
        
        $box3.mouseleave(function () {
            $week3.slideUp('fast');
        });
        $week4.hide();

        $box4.mouseover(function () {
            $week4.slideDown('slow');
        });
        
        $box4.mouseleave(function () {
            $week4.slideUp('fast');
        });
        $week5.hide();

        $box5.mouseover(function () {
            $week5.slideDown('slow');
        });
        
        $box5.mouseleave(function () {
            $week5.slideUp('fast');
        });
        $week6.hide();

        $box6.mouseover(function () {
            $week6.slideDown('slow');
        });
        
        $box6.mouseleave(function () {
            $week6.slideUp('fast');
        });
        $week7.hide();

        $box7.mouseover(function () {
            $week7.slideDown('slow');
        });
        
        $box7.mouseleave(function () {
            $week7.slideUp('fast');
        });
        $week8.hide();

        $box8.mouseover(function () {
            $week8.slideDown('slow');
        });
        
        $box8.mouseleave(function () {
            $week8.slideUp('fast');
        });
        $week9.hide();

        $box9.mouseover(function () {
            $week9.slideDown('slow');
        });
        
        $box9.mouseleave(function () {
            $week9.slideUp('fast');
        });
        $week10.hide();

        $box10.mouseover(function () {
            $week10.slideDown('slow');
        });
        
        $box10.mouseleave(function () {
            $week10.slideUp('fast');
        });
        $week11.hide();

        $box11.mouseover(function () {
            $week11.slideDown('slow');
        });
        
        $box11.mouseleave(function () {
            $week11.slideUp('fast');
        });

});
});


//onhover make the bg of the button transition to vertical - maybe basic CSS and later change to JS
//nake it to where only 1 classes content is visible at a time and maybe have same bg color behind the 'button' 
//make it look like a clicked state?
//pop out the weeks work when hovered