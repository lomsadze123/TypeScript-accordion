import { styled } from "styled-components"
import Accordion from "./components/Accordion"


function App() {

  return (
    <Body>
      <Accordion />
    </Body>
  )
}

export default App

const Body = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`