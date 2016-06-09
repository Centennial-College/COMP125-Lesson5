/**
 * FileName: app.js
 * 
 * @author Kevin Ma
 * @date June 1, 2016
 * 
 * StudentID: 300867968
 * website: comp125-s2016-lesson4.azurewebsites.net
 * @description This file is the main javascript file for the website
 */

// IIFE - Immediately Invoked Function Expression
(function () {
    "use strict";   // executionable command

    // define an array of HTML elements
    var paragraphElements = [];

    // second way to define an array
    // var paragraphs = new Array();

    paragraphElements[0] = document.getElementById("paragraphOne");
    paragraphElements[1] = document.getElementById("paragraphTwo");
    paragraphElements[2] = document.getElementById("paragraphThree");

    // define your paragraphs array
    var paragraphs = [];

    // create a reference to the sendButton 
    var sendButton = document.getElementById("sendButton");

    // check to see if sendButton exists 
    if (sendButton) {
        // event listener 
        sendButton.addEventListener("click", sendButtonClicked);
    }

    // event handler function 
    function sendButtonClicked(event) {
        console.log("Clicked!");
    }

    // create a reference to the firstName field
    var firstName = document.getElementById("firstName");

    // create a reference to the form
    var contactForm = document.getElementById("contactForm");

    if (contactForm) {
        // event listener with inline anonymous event handler function 
        // also called a callback function - function triggered in line like this 
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();
            console.log("submitted");
            showFormInput();
            contactForm.reset();
        });
    }

    /**
     * This function shows the input from each form field on the
     * console
     * 
     * @method showFormInput
     * @return {void} 
     */
    function showFormInput() {
        console.log("+++++++++++++++++++++++++++++++++++++++");
        console.log("First Name: " + firstName.value);
        console.log("+++++++++++++++++++++++++++++++++++++++");
    }


    // data for my pages
    paragraphs[0] = "<span class='firstSentence'>This is my first paragraph.</span> It is only visible on the first page. This next sentence is to prove that this really works!! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis pellentesque enim nec faucibus. Curabitur ac odio ac libero scelerisque aliquam vel facilisis ante. Ut ut arcu diam. Ut condimentum mollis nibh, ac commodo tortor tincidunt et. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse consectetur, ligula nec imperdiet ullamcorper, risus sapien maximus tortor, id malesuada tortor mi vitae tortor. Aliquam malesuada nibh sit amet mi suscipit, quis porta risus porta. Nunc rutrum molestie eros nec ornare. Nam at auctor risus. Sed vulputate sem id rutrum vehicula. Cras viverra, libero nec convallis semper, nulla velit lobortis libero, eu hendrerit sem tortor vitae ante."
    paragraphs[1] = "<span class='firstSentence'>This is my second paragraph.</span> It is only visible on the second page. Praesent vestibulum, metus ut gravida imperdiet, metus neque pretium magna, eu ultricies ante arcu sed velit. Mauris vulputate magna ac diam facilisis malesuada. Duis quis faucibus eros. Cras faucibus molestie ex et tempus. Proin lacus neque, pharetra ac neque nec, sodales vestibulum sem. Curabitur egestas lectus vel nisl commodo, id laoreet nisl convallis. In diam risus, porta quis leo vel, vehicula eleifend lorem. Proin quam erat, sodales eget bibendum at, convallis at purus. Donec neque ligula, blandit ac facilisis at, laoreet nec nulla. Duis lacinia consequat risus vel mattis."
    paragraphs[2] = "<span class='firstSentence'>This is my third paragraph.</span> It is only visible on the third page. Aenean fringilla enim at quam ultrices rutrum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse sollicitudin venenatis arcu id cursus. In hac habitasse platea dictumst. Morbi ac pharetra diam, a dapibus mauris. Curabitur ornare nec mauris sit amet pharetra. Integer ut arcu eu sem ultricies ullamcorper. Etiam nec eros lorem."

    // check to see if paragraph one exists
    // this is bad form because it checks the property every single iteration, inefficient
    // for (var index = 0; index < paragraphElements.length; index++) {
    var paragraphElementsLength = paragraphElements.length;
    
    // if paragraph exists then populate each paragraph on the page 
    for (var index = paragraphElementsLength; index >= 0; index--) {
        if (paragraphElements[index]) {
            paragraphElements[index].innerHTML = paragraphs[index];

        }
    }

})();