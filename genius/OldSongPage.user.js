// ==UserScript==
// @name         Genius - Bring Back Old Song Page
// @namespace    https://github.com/Voxalice/
// @version      2
// @description  Disables new song page
// @author       Voxalice
// @match        https://genius.com/*
// @icon         https://genius.com/favicon.ico
// @grant        none
// ==/UserScript==
window.location.href.endsWith("lyrics")&&(window.location.href+="?bagon=1");
