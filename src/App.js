import Header from './components/Header';
import { Container } from 'react-bootstrap';
import CardContainer from './components/CardContainer';


function App() {
  return (
    <Container className='App'>
      <Header/>
      <CardContainer/>
    </Container>
  );
}

export default App;
