import type { Character, RickMortyCharacterResponse } from "../types/api";


export async function getAllCharactersByPage(): Promise<Character[]> {
  const response = await fetch('https://rickandmortyapi.com/api/character/', {
    method: 'GET',
    headers: {
      "Content-Type": "aplication/json",
    },
  })

  // const characterResponse = (await response.json()) as RickMortyCharacterResponse
  // return characterResponse.results

  const {results: characters} = (await response.json()) as RickMortyCharacterResponse
  return characters
}