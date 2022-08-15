import React, { useState, useEffect } from "react";
import { dbService } from "../firebase";

interface TwittersProps {
  id: string;
  createAt?: string;
  twitter?: string;
}

const Home = () => {
  const [twitter, setTwitter] = useState("");
  const [twitters, setTwitters] = useState<TwittersProps[]>([]);

  const fetchTiwtters = async () => {
    const dbtwitters = await dbService.collection("twitter").get();
    dbtwitters.forEach((document) => {
      const nweetObject = {
        ...document.data(),
        id: document.id,
      };
      setTwitters((prev) => [nweetObject, ...prev]);
    });
  };
  useEffect(() => {
    fetchTiwtters();
  }, []);
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
    <div>
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
      <ul>
        {twitters.map((twitter) => (
          <li key={twitter.id}>{twitter.twitter}</li>
        ))}
      </ul>
    </div>
  );
};
export default Home;
