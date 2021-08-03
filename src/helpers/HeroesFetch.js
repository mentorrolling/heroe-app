export const buscarHeroes = async (termino) => {
  try {
    const resp = await fetch(
      `https://www.superheroapi.com/api.php/2977672439133477/search/${termino}`
    );
    const data = await resp.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const buscarHeroeById = async (id) => {
  try {
    const resp = await fetch(
      `https://www.superheroapi.com/api.php/2977672439133477/${id}`
    );
    const data = await resp.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};
