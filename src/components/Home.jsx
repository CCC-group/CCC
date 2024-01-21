import { Typography } from '@mui/material'

const Home = () => {
  return (
    <div className="home">
      <div className='home-1'>
        <Typography variant='h4' fontWeight={'light'}>Welcome to Crystal Clear Consulting</Typography>
        <div className='home-2'>
          <Typography variant='h1' fontWeight={'bolder'}>WE HELP TO CREATE FINANCIAL SECURITY</Typography>
        </div>
        <div className='home-2'>
          <Typography variant='h6' fontWeight={'light'}>We empower individuals, families, and small business owners to achieve financial clarity, amplify generational wealth, and expand businesses through life insurance and strategic approaches!</Typography>
        </div>
      </div>
    </div>
  );
};

export default Home;
