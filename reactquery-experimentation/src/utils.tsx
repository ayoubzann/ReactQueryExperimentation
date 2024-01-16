

export const fetchSwapi = async () => {
const res = await fetch("https://swapi.py4e.com/api/people");
const data = await res.json();
return data.results;
}