export const useData = () => {
  return {
    async fetchJoke() {
      try {
        const URL = "https://official-joke-api.appspot.com/random_joke";
        const response = await fetch(URL);
        return await response.json();
      } catch (err) {
        console.log(err);
      }
    },
  };
};
