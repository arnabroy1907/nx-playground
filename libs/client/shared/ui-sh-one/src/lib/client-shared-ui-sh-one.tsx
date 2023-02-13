import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ClientSharedUiShOneProps {
  appName: string;
}

const StyledClientSharedUiShOne = styled.div`
  color: blue;
  padding: 2rem;
  background-color: #faa;
  border: 2px solid red;
  border-radius: 5px;
`;

export function ClientSharedUiShOne(props: ClientSharedUiShOneProps) {
  return (
    <StyledClientSharedUiShOne>
      <h1>Welcome to ClientSharedUiShOne!</h1>
      <h4>{props.appName}</h4>
    </StyledClientSharedUiShOne>
  );
}

export default ClientSharedUiShOne;
