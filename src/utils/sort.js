export const sortAlphabeticallyByName = (a, b) => {
  if(a.name < b.name) return -1;
  if(a.name > b.name) return 1;
  return 0;
}

export const sortAlphabeticallyByDisplayName = (a, b) => {
  if(a.displayName < b.displayName) return -1;
  if(a.displayName > b.displayName) return 1;
  return 0;
}
