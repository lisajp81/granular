//alert("wotcha"); checked js is working. It is
//Aim is to smooth scroll our page to the correct section when a button is clicked.
//js sytax
//$ = talk to jquery
//S("element").action("what we want to change ", how/what we want to happen we want to change it);


//step 1: attach a click event listener to the arrow button
// the on is the "event listener"
$(".scroll-to").on("click", function(){
//step 2: find the id of the section we want to scroll to and store it
//js naming convention "camel case" used below
//var sectionName = "#first-section"
//The above example would only work on one section. To make the code dynamic and portbale we need to change the value of the sectionName.  ideally we want to grab the href attribute of whichever anchor tag has been clicked on. The href stores the section that we need to scroll to.

//we use jquery keyword "this" in order to access the element that has been clicked on.
//To access the elements' attributes we use the .attr action. This takes one value the name of the attributes that we want to access. We're looing for the href so we add this as a string "href".

var sectionName = $(this).attr("href");
console.log(sectionName);
//step 3: using section id store how many pixels from the top it is.
//need some sort of counter - go to jquery.coom and see if they have written one already e.g. offset. Also need to save the number.
//The offset action allows us to retrieve the current position of an element relative to our page - note we need () to complete this action.
//We need to specify where we want to measure from, so we use .top
//Using these in combination give us a number, which changes depending on the browser height, but always points to the exact location of the section specified.
var sectionPlacement = $(sectionName).offset().top;
//check the value by "printing to the console in your web browser. Use the console regularly to check the script"
//here I have asked the console to log the sectionPLacement values
console.log(sectionPlacement);
//step 4: animate or smoothly scroll our page to this section.
//1st we select our entire page as we want everything to move downwards to where the section is palced. to do thi we add "html,body"
//.animate allows us to animate different properties it takes the follwoing values, property to animate, duration, easing &completion. We only need to use the first two.
//need to move the verticalscroll bar to the position of our section. scrollTop allows us to do this. We add this as the first value as this is what we want to animate. It takes one value, the pxiel height that the scroll bar should be set to.
//we use 1000 as the duration for the animation in ms i.e. 1s
$("html, body").animate({scrollTop: sectionPlacement}, 1000)


//currently the first section flashes then we smoothly transtition (due  to time taken for js to run)
//step 5:Stop the section from flashing before animation takes place.
//to stop slinks fomrjumping to the section, we use return false;  This stops the "im done -carry on with your default bhaviour being sent bacto the ancor tag"
return false;
});
