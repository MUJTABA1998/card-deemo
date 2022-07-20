import './App.css';
import Card from './Card';




function App() {


  const cards = [
    {
      id: 1,
      title: 'access control',
      content: 'Sanjay is the head-chef here.He is extremely experienced and he is someone.',
      rect: './Group.png',
      overlay: false
    },
    {
      id: 2,
      title: 'workforce management',
      content: 'Sanjay is the head-chef here.He is extremely experienced and he is someone.',
      rect: './Group.png',
      overlay: false
    },
    {
      id: 3,
      title: 'asset management',
      content: 'Sanjay is the head-chef here.He is extremely experienced and he is someone.',
      rect: './Group.png',
      overlay: false
    },
    {
      id: 4,
      title: 'learning management',
      content: 'Sanjay is the head-chef here.He is extremely experienced and he is someone.',
      rect: './Group.png',
      overlay: true
    },
    {
      id: 5,
      title: 'hse management',
      content: 'Sanjay is the head-chef here.He is extremely experienced and he is someone.',
      rect: './Group.png',
      overlay: false
    },
    {
      id: 6,
      title: 'Predictive Analytics',
      content: 'Sanjay is the head-chef here.He is extremely experienced and he is someone.',
      rect: './Group.png',
      overlay: false
    },
    {
      id: 7,
      title: 'access control',
      content: 'Sanjay is the head-chef here.He is extremely experienced and he is someone.',
      rect: './Group.png',
      overlay: false
    }
  ]

  return (
    <div className="App">
     <div className='card-wrapper'> 
      {
        cards.map(card => (
          <Card title={card.title} cardNo={`card-${card.id}`} overlay={card.overlay} content={card.content} rect={card.rect} key={card.id}/>
        ))
      }
     </div>
    </div>
  );
}

export default App;
