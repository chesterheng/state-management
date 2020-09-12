export const FETCH_CHARACTERS = 'FETCH_CHARACTERS';
export const FETCH_CHARACTERS_FULFILLED = 'FETCH_CHARACTERS_FULFILLED'; 

export const fetchCharacters = (searchTerm) => {
  return {
    type: FETCH_CHARACTERS,
    payload: { searchTerm },
  };
};

export const fetchCharactersFulfilled = payload => {
  return {
    type: FETCH_CHARACTERS_FULFILLED,
    payload,
  };
};