async function getStuff(url) {
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    console.log(data, response.status);
  } else {
    throw new Error(`returned an error with code ${response.status}`);
  }

}

getStuff('https://pokeapi.co/api/v2/pokemon/1').catch((err) => console.error(err));
