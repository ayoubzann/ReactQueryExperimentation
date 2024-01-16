export type SwObj = {
    name: string;
  };

export const fetchSwapi = async (): Promise<SwObj[]> => {
const res = await fetch("https://swapi.py4e.com/api/people");
const data = await res.json();
return data.results;
}