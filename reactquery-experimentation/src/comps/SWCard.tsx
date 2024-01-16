import { useQuery } from "react-query";
import { fetchSwapi } from "../utils";

type SwObj = {
  name: string;
};

const SWCard = () => {
  const query = useQuery(["StarWarsCharacters"], fetchSwapi);
  console.log(query.data);

  if (query.status === "error") {
    return <p> Error: Something went wrong. Refresh the page, or try again later.</p>;
  }

  if (query.status === "loading") return <p>Loading...</p>;

  if (query.status === "idle") return <p>Idle</p>;

  console.log(query.data[0].name);

  return (
    <div>
      {query.data.map((data: SwObj, index: number) => {
        return <div key={index}>{data.name}</div>;
      })}
    </div>
  );
};

export default SWCard;
