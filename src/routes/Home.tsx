import React, { useState, useEffect } from "react";
import { dbService } from "../firebase";

interface TwittersProps {
  id: string;
  createAt?: string;
  text?: string;
}
interface HomeProps {
  userInfo: {
    uid: string;
  };
}
const Home: React.FC<HomeProps> = ({ userInfo }) => {
  const [twitter, setTwitter] = useState("");
  const [twitters, setTwitters] = useState<TwittersProps[]>([]);

  useEffect(() => {
    dbService.collection("twitter").onSnapshot((snapshot) => {
      const nweetArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTwitters(nweetArray);
    });
  }, []);
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setTwitter(value);
  };
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await dbService.collection("twitter").add({
      text: twitter,
      createAt: Date.now(),
      creatorId: userInfo.uid,
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
          <li key={twitter.id}>{twitter.text}</li>
        ))}
      </ul>
    </div>
  );
};
export default Home;
