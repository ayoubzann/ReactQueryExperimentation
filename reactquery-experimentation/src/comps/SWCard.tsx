import { useQuery } from 'react-query'
import { fetchSwapi } from '../utils'

const SWCard = () => {

    const query = useQuery("StarWarsCharacters", fetchSwapi);

    console.log(query.data);
  return (
    <div>
        {
            query.data.map((data, index) => {
                return <div key={index}> 
                {data.name}
                </div>
            })
        }
    </div>
  )
}

export default SWCard