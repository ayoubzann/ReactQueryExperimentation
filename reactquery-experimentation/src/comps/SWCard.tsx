import { useQuery, useMutation, useQueryClient } from "react-query";
import { Person, fetchJsonServer, postJsonServer } from "../utils";

const SWCard = () => {
  const query = useQuery({queryKey: ["People"], queryFn: fetchJsonServer});
  console.log(query.data);

  const queryClient = useQueryClient();

  const postMutation = useMutation(postJsonServer, {
    onSuccess: () => {
        queryClient.invalidateQueries("People")
    }
  });

  if (query.status === "error") {
    return <p> Error: Something went wrong. Refresh the page, or try again later.</p>;
  }

  if (query.status === "loading") return <p>Loading...</p>;

  if (query.status === "idle") return <p>Idle</p>;

  const handleAddPerson = () => {
    postMutation.mutate();
  };


  return (
    <div>
        <button onClick={handleAddPerson} disabled={postMutation.isLoading}>
        {postMutation.isLoading ? 'Adding...' : 'Add Person'}
      </button>
      {query.data.map((data: Person, index: number) => {
        return <div key={index}>{data.name}</div>
      })}
    </div>
  );
};

export default SWCard;
