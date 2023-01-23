// ==UserScript==
// @name         ChatKC Timestamps
// @namespace    https://github.com/Voxalice/
// @version      1
// @description  Automatically adds timestamps to messages.
// @author       Voxalice
// @match        https://stream.mattkc.com/
// @match        https://stream.mattkc.com/chat/
// @icon         https://mattkc.com/favicon.ico
// @grant        none
// ==/UserScript==

socket.addEventListener('message', (event) => {
    var b = JSON.parse(event.data);
    if (b.type && b.type == "chat") {
        document.querySelector("[data-message-id='"+lastMessageReceived+"']").insertAdjacentHTML("beforeend", ` <span class='bgtext'>(${new Date(b.data.time).toLocaleString()})</span>`)
        document.querySelector("head").insertAdjacentHTML("beforeend", `<style>.bgtext{color:gray;font-size:75%}`)
    }
});
