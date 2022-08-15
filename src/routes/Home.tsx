import React, { useState } from "react";

const Home = () => {
  const [twitter, setTwitter] = useState("");
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setTwitter(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
      <button>Twitter</button>
    </form>
  );
};
export default Home;
