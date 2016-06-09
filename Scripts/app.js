/**
 * FileName: app.js
 * 
 * @author Kevin Ma
 * @date June 8, 2016
 * 
 * StudentID: 300867968
 * website: comp125-s2016-lesson5.azurewebsites.net
 * @description This file is the main javascript file for the website
 */

(function () {
    "use strict";

    /**
     * This function uses the document.title to switch javascript function
     * when the page switches.
     * 
     * @function PageSwitcher
     * @returns {void}
     */
    function PageSwitcher() {
        switch (document.title) {
            case "Home":
                Home();
                break;
            case "About Me":
                About();
                break;
            case "Contact Me":
                Contact();
                break;
            case "Projects":
                Projects();
                break;
        }
    }

    /**
     * This function provides JavaScript code for the Home page
     * 
     * @function Home
     * @returns {void}
     */
    function Home() {
        console.log("You are at the Home Page");
    }

    /**
     * This function provides JavaScript code for the Home page
     * 
     * @function About
     * @returns {void}
     */
    function About() {
        console.log("You are at the About Page");
    }

    /**
     * This function provides JavaScript code for the Contact page
     * 
     * @function Contact
     * @returns {void}
     */
    function Contact() {
        console.log("You are at the Contact Page");
    }

    /**
     * This function provides JavaScript code for the Projects page
     * 
     * @function Projects
     * @returns {void}
     */
    function Projects() {
        console.log("You are at the Projects Page");
    }

    window.addEventListener("load", PageSwitcher);

})();