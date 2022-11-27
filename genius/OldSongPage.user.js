// ==UserScript==
// @name         Genius - Bring Back Old Song Page
// @namespace    https://github.com/Voxalice/
// @version      3
// @description  Redirects to old song page
// @author       Voxalice
// @match        https://genius.com/*
// @icon         https://genius.com/favicon.ico
// @grant        none
// ==/UserScript==
document.body.innerText.indexOf("We need your help to continue improving contributor features")>9&&(window.location.href+="?bagon=1");
