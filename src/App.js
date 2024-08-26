import logo from './logo.svg';
import './App.css';
import { Container,Row,Col } from 'react-bootstrap';
import ContactForm from './component/ContactForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactList from './component/ContactList';

//1. 가장 큰제목이 상단에 위치한다.
//2. 왼쪽에는 이름. 폰 번호, 추가 버튼이 위치한다.
//3. 오른 쪽에는 이름을 검색하는 창이 있고, 하단에 갯수와 전화번호부가 나온다.

//4. 리스트에 유저이름과 전화번호를 추가할수 있다
//5. 리스트에 아이템이 몇개있는지 보인다
//6. 검색해서 찾을수 있다

function App() {
  return (
    <div>
      <h1 className='title'>전화번호부</h1>
      <Container>
        <Row>
          <Col>
          <ContactForm/>
          </Col>
          <Col>
          <ContactList/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
