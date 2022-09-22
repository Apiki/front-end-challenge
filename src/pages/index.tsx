import { CommonCard } from '../components/CommonCard';
import { MainCard } from '../components/MainCard';

import { HomeContainer } from './homeStyles';

export default function Home() {
  return (
    <HomeContainer>
      <MainCard />
      <div>
        <CommonCard />
        <CommonCard />
        <CommonCard />
        <CommonCard />
        <CommonCard />
        <CommonCard />
        <CommonCard />
        <CommonCard />
      </div>
    </HomeContainer>
  );
}
