import { useQuery } from "react-query";
import { fetchSwapi } from "../utils";

type SwObj = {
  name: string;
};



const SWCard = () => {
  const query = useQuery(["StarWarsCharacters"], fetchSwapi);
  console.log(query.data);

  let content;

  switch (query.status) {
    case "success":
      content = query.data.map((data: SwObj, index: number) => {
        return <div key={index}>{data.name}</div>;
      });
      break;
    case "loading":
      content = <h2>Loading...</h2>;
      break;
    case "error":
      content = <>Error: {query.error.message}</>;
      break;
  }

  return <div>{content}</div>;
};

export default SWCard;
