import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const useFetch = ({url, key}) => {
  const getData = async () => {
    // API'dan to'g'ridan-to'g'ri ma'lumotni olamiz
    const res = await axios.get(`https://fakestoreapi.com/${url}`);
    return res.data; 
  }

  const { data, isLoading, isFetching, error } = useQuery({
    queryKey: key,
    queryFn: getData,
  })

  // data bu yerda endi to'g'ridan-to'g'ri productlar massivi bo'ladi
  return { data, isLoading, isFetching, error }
}

export default useFetch