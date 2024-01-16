export type Person = {
    name: string;
  };

export const fetchJsonServer = async (): Promise<Person[]> => {
const res = await fetch("http://localhost:3000/person/");
const data = await res.json();
return data;
};

export const postJsonServer = async(): Promise<Person> => {
const res = await fetch("http://localhost:3000/person/", {
    method: "POST",
    headers: {
        "Content-Type" : "application/json",
    },
    body: JSON.stringify(
        {
            name: "Beyonce",
            status: "Legend"
        }
    )
});

return res.json();
};