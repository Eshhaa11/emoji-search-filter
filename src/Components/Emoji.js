import { useState } from "react";

function Emoji () {
    const [text, setText] = useState('')

    const emojiMap = {
        happy: "😄",
        sad: "😔",
        angry: "😡",
    }


    return (
        <div>
            <h1>Emoji Search</h1>
        </div>
    )
}