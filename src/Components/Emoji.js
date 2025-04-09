import { useState } from "react";

function Emoji () {
    const [text, setText] = useState("")

    const emojiMapping = {
        happy: "😄",
        sad: "😔",
        angry: "😡",
        pizza: "🍕",
        burger: "🍔",
        confused: "😕",
        crying: "😭",
        blushing: "😊",
        cool: "😎",
        cold: "🥶",
        love: "💗",
        shell: "🐚",
        wave: "🌊",
        moon: "🌙",
        star:  "💫",
        trophy: "🏆",
        cricket: "🏏",
        badminton: "🏸",
        flamingo: "🦩",
        dolphin: "🐬",
        tulip: "🌷",
        bubble: "🫧",
        laptop: "💻",

        };

        const replacewithEmojis = (input) => {
            return input.split("").map(word => emojiMapping[word.toLowerCase()] || word).join("");
        };
 
        const handleChange = (e) => {
            setText(e.target.value)
        };


    return (
        <div className="cont">
            <h1>Emoji Search</h1>
        </div>
    )
}