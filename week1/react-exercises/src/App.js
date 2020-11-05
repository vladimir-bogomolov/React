import './App.css';
import { HobbyList } from './hobbies';
import Guarantee from './guarantee';

function App() {
  return (
    <div className="App">
      <HobbyList />
      <div id="services">
      <Guarantee service={{ img: '/f-delivery.png',
                   title: 'Free shipping',
                   description: 'Description of free shipping service' }}/>
      <Guarantee service={{ img: '/coin.png',
                   title: '100% Money back',
                   description: 'Description of the money back service' }}/>
      <Guarantee service={{ img: '/chat.png',
                   title: 'Online support 24/7',
                   description: 'Description of the support service' }}/>
      </div>
    </div>
  );
}

export default App;
