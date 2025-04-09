import { useState } from "react";
import './Emoji.css';

function Emoji() {
    const [text, setText] = useState("");
    const [emojiText, setEmojiText] = useState("");

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
        star: "💫",
        trophy: "🏆",
        cricket: "🏏",
        badminton: "🏸",
        flamingo: "🦩",
        dolphin: "🐬",
        tulip: "🌷",
        bubble: "🫧",
        laptop: "💻",
    };

    // Function to replace words with emojis
    const replaceWithEmojis = (input) => {
        return input.split(' ').map(word => emojiMapping[word.toLowerCase()] || word).join(' ');
    };

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const handleBlur = () => {
      
        setEmojiText(replaceWithEmojis(text));
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
       
            setEmojiText(replaceWithEmojis(text));
        }
    };

    return (
        <div className="cont">
            <h1>Emoji Search</h1>
            <input
                type="text"
                value={text}
                onChange={handleChange} 
                onBlur={handleBlur} 
                onKeyDown={handleKeyDown} 
                placeholder="Type the kind of emoji you want. (e.g cool, dolphin)"
            />
            <div>
                {emojiText && <p>{emojiText}</p>}
            </div>
        </div>
    );
}

export default Emoji;
