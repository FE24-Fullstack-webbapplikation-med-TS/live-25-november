import "./index.css";

import { useState } from "react";

import { Button } from "@jokeApp/button";
import { useData } from "../data";
import { type Joke } from "@jokeApp/types";

function LandingPage() {
  const [joke, setJoke] = useState<Joke | null>(null);
  const { fetchJoke } = useData();

  async function getJoke() {
    const joke: Joke = await fetchJoke();
    setJoke(joke);
  }

  return (
    <main className="landing-page">
      <h2 className="landing-page__setup"> {joke?.setup}</h2>
      <h2 className="landing-page__punchline"> {joke?.punchline}</h2>
      <Button
        variant="regular"
        onClick={() => {
          getJoke();
        }}
        text="Fetch a joke"
      ></Button>
    </main>
  );
}

export { LandingPage };
