import { useState } from "react";
import ListeEmoji from "./assets/emojiList.json";
import "./App.css";
import Search from "./components/Search/Search";
import Line from "./components/Line/Line";
import Footer from "./components/Footer/Footer";

function App() {
  const [searchItem, setSearchItem] = useState("");
  let limitedList = ListeEmoji;
  if (searchItem.trim() === "") {
    limitedList = ListeEmoji.slice(0, 15);
  }
  return (
    <div className="container">
      <Search
        keyword={searchItem}
        onChange={(searchTerm) => setSearchItem(searchTerm)}
      />
      {limitedList.map((emoji) => (
        <Line key={emoji.title} emoji={emoji} searchedEmoji={searchItem} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
