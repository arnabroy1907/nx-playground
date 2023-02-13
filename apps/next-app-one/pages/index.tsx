import { ClientSharedUiShOne, PrettyJson } from '@nx-playground/client/shared/ui-sh-one';
import { getMsOneUtilData, getMsTwoUtilData } from '@nx-playground/client/shared/utils';
import { useState } from 'react';
import styled from 'styled-components';

const StyledPage = styled.div`
  .page {
  }
`;

const ApiArea = styled.div`
  margin: 1rem;
  padding: 1rem;
  border: 1px solid #ccc;

  button: {
    width: 20rem;
    heigth: 2rem;
  }
`;

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.styled-components file.
   */

  const [oneData, setOneData] = useState();
  const [twoData, setTwoData] = useState();

  const getMSOneData = async () => {
    const msOneData = await getMsOneUtilData();
    setOneData(msOneData);
  }

  const getMSTwoData = async () => {
    const msTwoData = await getMsTwoUtilData();
    setTwoData(msTwoData);
  }

  return (
    <StyledPage>
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1>
              <span> Hello there, </span>
              Welcome next-app-one
            </h1>
          </div>
          <div>
            <ClientSharedUiShOne appName='next-app-one' />
          </div>
          <ApiArea>
            <h3> Get Micro Service One Utils Data </h3>
            <button type='submit' onClick={getMSOneData} >Get</button>
            {oneData && <PrettyJson data={oneData} />}
          </ApiArea>
          <ApiArea>
            <h3> Get Micro Service Two Utils Data </h3>
            <button type='submit' onClick={getMSTwoData} >Get</button>
            {twoData && <PrettyJson data={twoData} />}
          </ApiArea>
        </div>
      </div>
    </StyledPage>
  );
}

export default Index;
