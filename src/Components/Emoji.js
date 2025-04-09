import { useState } from "react";

function Emoji () {
    const [text, setText] = useState('')

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

          }


    return (
        <div>
            <h1>Emoji Search</h1>
        </div>
    )
}