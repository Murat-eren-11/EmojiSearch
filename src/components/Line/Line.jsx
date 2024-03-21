import "./Line.css";
import { useState } from "react";

const Line = ({ emoji, searchedEmoji }) => {
  const searchTermLower = searchedEmoji.toLowerCase();
  const keywordsLower = emoji.keywords && emoji.keywords.toLowerCase();
  const [isHovered, setIsHovered] = useState(false);

  if (keywordsLower && keywordsLower.indexOf(searchTermLower) !== -1) {
    return (
      <div
        className="ligne"
        onClick={() => {
          navigator.clipboard.writeText(emoji.symbol);
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span>
          {emoji.symbol} {emoji.title}
        </span>
        {isHovered && <span className="copiemoi">Click to copy</span>}
      </div>
    );
  }
  return null;
};
export default Line;
