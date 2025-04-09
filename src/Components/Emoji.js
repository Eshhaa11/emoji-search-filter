import { useState } from "react";

function Emoji () {
    const [text, setText] = useState('')

    const emojiMap = {
        happy: "😄",
        sad: "😔",
        angry: "😡",
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
          }


    return (
        <div>
            <h1>Emoji Search</h1>
        </div>
    )
}