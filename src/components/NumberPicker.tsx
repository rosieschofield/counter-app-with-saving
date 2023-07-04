import { useState } from "react";
import "./styles.css";

export default function EmojiPicker(): JSX.Element {
  const [emojiValueFromCurrentRender, queueRerenderWithNewEmojiValue] =
    useState<string>("");
  const [favouriteValueFromCurrentRender, queueRerenderWithNewFavouriteValue] =
    useState<string[]>([]);

  const handleChooseCanEmoji = () => {
    queueRerenderWithNewEmojiValue("🥫");
  };

  const handleChooseSquidEmoji = () => {
    queueRerenderWithNewEmojiValue("🦑");
  };
  const handleChooseCarEmoji = () => {
    queueRerenderWithNewEmojiValue("🚙");
  };
  const handleChooseBikeEmoji = () => {
    queueRerenderWithNewEmojiValue("🚲");
  };
  const handleChooseRadioEmoji = () => {
    queueRerenderWithNewEmojiValue("📻");
  };

  const handleChooseUnicornEmoji = () => {
    queueRerenderWithNewEmojiValue("🦄");
  };

  const handleChooseElephantEmoji = () => {
    queueRerenderWithNewEmojiValue("🐘");
  };
  
  
  const handleStoreCurrentEmoji = () => {
    queueRerenderWithNewFavouriteValue(prevValues => [...prevValues.slice(-4), emojiValueFromCurrentRender,]);
  };


  return (
    <section>
      <h1>🤸👀🔆Emoji picker🚀🎆👍</h1>
      <p>Your last 5 emojis: {favouriteValueFromCurrentRender.map((x,index)=><li key={x[index]}>{x}</li>)}</p>
      <p>Current Emoji: {emojiValueFromCurrentRender}</p>
      <button onClick={handleChooseCanEmoji}>🥫</button>
      <button onClick={handleChooseSquidEmoji}>🦑</button>
      <button onClick={handleChooseCarEmoji}>🚙</button>
      <button onClick={handleChooseBikeEmoji}>🚲</button>
      <button onClick={handleChooseRadioEmoji}>📻</button>
      <button onClick={handleChooseUnicornEmoji}>🦄</button>
      <button onClick={handleChooseElephantEmoji}>🐘</button>
      <hr />
      <button onClick={handleStoreCurrentEmoji}>Store current emoji</button>
    </section>
  );
}
