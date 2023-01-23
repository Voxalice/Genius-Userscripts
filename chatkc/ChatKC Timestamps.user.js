// ==UserScript==
// @name         ChatKC Timestamps
// @namespace    https://github.com/Voxalice/
// @version      2
// @description  Automatically adds timestamps to messages.
// @author       Voxalice
// @match        https://stream.mattkc.com/
// @match        https://stream.mattkc.com/chat/
// @icon         https://mattkc.com/favicon.ico
// @grant        none
// ==/UserScript==

socket.onmessage = ((e)=>{
    var b = JSON.parse(e.data);
    if (b.type == "chat") {
        document.querySelector("head").insertAdjacentHTML("beforeend",` <style>.bgtext{color:gray;font-size:75%}</style>`)
        document.querySelector(`[data-message-id='${lastMessageReceived}']`).insertAdjacentHTML("beforeend",` <span class='bgtext'>(${new Date(b.data.time).toLocaleString()})</span>`)
    }
});
