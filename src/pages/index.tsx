// material-ui
import { styled } from '@mui/material/styles';

// project imports
import { useRouter } from 'next/dist/client/router';
import { useEffect } from 'react';

// =============================|| LANDING MAIN ||============================= //

const Landing: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/dashboard/default');
  }, []);

  return <></>;
};

export default Landing;
