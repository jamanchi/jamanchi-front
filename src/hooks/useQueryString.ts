import { useSearchParams } from 'react-router-dom';

const useQueryString = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const getParams = (key: string) => searchParams.get(key);

  const addParams = (key: string, value: string) => {
    searchParams.append(key, value);
    setSearchParams(searchParams);
  };

  const setParams = (key: string, value: string) => {
    searchParams.set(key, value);
    setSearchParams(searchParams);
  };

  const deleteAllParams = () => {
    setSearchParams('');
  };

  return {
    getParams,
    addParams,
    setParams,
    deleteAllParams,
  };
};

export default useQueryString;
