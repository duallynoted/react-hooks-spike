import React, { useEffect, useState } from "react";

const initProfile = {
  followers: null,
  publicRepos: null,
};
const initCharacter = {
  name: null,
  birthYear: null,
};
function ApiCalls() {
  const [profile, setProfile] = useState(initProfile);
  const [character, setCharacter] = useState(initCharacter);
  async function getProfile() {
    const apiResponse = await fetch("https://api.github.com/users/duallynoted");
    const results = await apiResponse.json();
    setProfile({
      followers: results.followers,
      publicRepos: results.public_repos,
    });
  }
  async function getCharacters(person) {
    const char = person ? person : 1;
    const apiResponse = await fetch(`https://swapi.dev/api/people/${char}`);
    const results = await apiResponse.json();
    console.log(results);
    setCharacter({
      name: results.name,
      birthYear: results.birth_year,
    });
  }

  useEffect(() => {
    getProfile();
    getCharacters(18);
  }, []);
  return (
    <div>
      <h3>My Github</h3>
      <p>Followers: {profile.followers}</p>
      <p>Public Repos: {profile.publicRepos}</p>
      <h3>Star Wars API</h3>
      {/* Todo: put in an input field with a button to make it dynamic */}
      <p>Character: {character.name}</p>
      <p>Birth Year: {character.birthYear}</p>
    </div>
  );
}
export default ApiCalls;
