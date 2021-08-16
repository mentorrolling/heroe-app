export const getHeroes = async (termino) => {
  try {
    const resp = await fetch(
      `https://superheroapi.com/api.php/2977672439133477/search/${termino}`
    );
    const data = await resp.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getHeroeId = async (id) => {
  try {
    const resp = await fetch(
      `https://superheroapi.com/api.php/2977672439133477/${id}`
    );
    const data = await resp.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};
