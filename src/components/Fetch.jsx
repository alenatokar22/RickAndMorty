import { useState, useEffect } from "react";

const URL = "https://rickandmortyapi.com/api/character/";

async function fetchData(characterId) {
  let response = await fetch(URL + characterId);
  let data = await response.json();
  data = JSON.stringify(data);
  data = JSON.parse(data);

  return data;
}

export async function getCharacter({ params }) {
  const dataResponse = await fetchData(params.characterId);
  return dataResponse;
}

export const getFetchData = () => {
  const [paramsQuery, setParamsQuery] = useState("");
  const [dataResponse, setDataResponse] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(URL + (paramsQuery === "" ? "" : "?" + paramsQuery))
      .then((response) => {
        if (response.ok) {
          return response.json();
        }

        throw new Error(NETWORK_ERROR_CODE, { cause: response.status });
      })
      .then(setDataResponse)
      .catch(setError);
  }, [paramsQuery]);


  return { dataResponse, error, setParamsQuery };
};
