import { useState } from "react";

export default function EmojiPicker(): JSX.Element {
  const [emojiValueFromCurrentRender, queueRerenderWithNewEmojiValue] =
    useState<string>();
  const [favouriteValueFromCurrentRender, queueRerenderWithNewFavouriteValue] =
    useState<string>();

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
    queueRerenderWithNewFavouriteValue(emojiValueFromCurrentRender);
  };

  return (
    <>
      <h1>🤸👀🔆Emoji picker🚀🎆👍</h1>
      <p>Your stored emoji: {favouriteValueFromCurrentRender}</p>
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
    </>
  );
}
