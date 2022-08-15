import React, { useState } from "react";
import { dbService } from "../firebase";

const Home = () => {
  const [twitter, setTwitter] = useState("");
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setTwitter(value);
  };
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await dbService.collection("twitter").add({
      twitter,
      createAt: Date.now(),
    });
    setTwitter("");
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={twitter}
        onChange={handleInput}
        placeholder="What's on your mind"
        maxLength={120}
      />
      <button type="submit">Twitter</button>
    </form>
  );
};
export default Home;
