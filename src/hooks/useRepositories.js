import { useEffect } from 'react';
import { ALL_RESPOSITORIES } from '../graphql/queries'
import { useQuery } from '@apollo/client'

const useRepositories = () => {
  const { data, loading, refetch } = useQuery(ALL_RESPOSITORIES);

  const repositories = data?.repositories;

  useEffect(() => {
    refetch();
  }, []);

  return { repositories, loading, refetch };
};

export default useRepositories;