import styled from 'styled-components'

const DivScreen = styled.div`
  margin-left: calc(1px + 15vw);
  padding: 0;
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
  @media (max-width: 990px) {
    margin: 0;
  }
`
export default DivScreen
