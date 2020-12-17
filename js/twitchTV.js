const twitchSearchBtn = document.getElementById("twitch_search");
const twitchInput = document.getElementById("twitch_input");
const twitchDiv = document.getElementById("twitch-embed");
let inputValue = "kotton";

let twitchEmbed = new Twitch.Embed("twitch-embed", {
    width: 1000,
    height: 600,
    channel: inputValue,
});

twitchSearchBtn.addEventListener("click", (event) => {
    event.preventDefault();

    inputValue = "";
    twitchDiv.innerHTML = "";

    inputValue = twitchInput.value;

    let twitchEmbed = new Twitch.Embed("twitch-embed", {
        width: 1000,
        height: 600,
        channel: inputValue,
    });

});