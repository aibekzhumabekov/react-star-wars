const BASE_URL ='https://swapi.co/api/';

export function fetchAllPlanets(){
    return fetch(`${BASE_URL}planets`, {mode:'cors'}).then(res => res.json());
}

export function fetchAllStarships() {
    return fetch(`${BASE_URL}starships`, {model:'cors'}).then(res => res.json());
}