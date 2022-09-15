import type { NextPage } from "next";
import { useRecoilValue } from "recoil";
import { testAtomState, validatorsQuery } from "../data/testData";

const Home: NextPage = () => {
  const message = useRecoilValue(testAtomState);
  const validators = useRecoilValue(validatorsQuery);
  return (
    <div>
      <h1>{message}</h1>
      <div>{JSON.stringify(validators)}</div>
    </div>
  );
};

export default Home;
