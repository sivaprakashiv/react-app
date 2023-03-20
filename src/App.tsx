import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import produce from 'immer';

function App() {

  const[cart, setCart] = useState({
    discount: .1,
    items: [
      {id: 1, title: 'product1', quantity: 1},
      {id: 2, title: 'product2', quantity: 1}
    ]
  })

  const setQuantity = () => {
    //setCart({...cart, items: cart.items.map(item => item.id === 1 ? {...item, quantity: 2} : item)})
    setCart(produce(draft => {
      draft.items.map(item => item.id === 1 ? item.quantity = 2 : item)
      
    }))
  }

  const[pizza, setPizza] = useState ({
    name: 'Pepperoni',
    toppings: ['Mushroom']
  })

  const addToppings = () => {
   // setPizza({...pizza, toppings: [...pizza.toppings, 'Cheese']})
   setPizza(produce(draft => {
    draft.toppings.push('Cheese')    
   }))
  }

  const [game, setGame] = useState({
    id: 1,
    player: {
      name: 'Tendulkar'
    }
  });

  const changeName = () => {
     //setGame({...game, player: {...game.player, name: 'Sehwag'}})
    setGame(produce(draft => {
      const player = draft.player
      player.name = 'Laxman'
    }))

  }

  return (
      <>
      <div>{game.player.name}</div>
      <div>{pizza.toppings}</div>
      <div>{cart.items.map(item => <p key={item.id}>{item.title} {item.quantity}</p>)}</div>
      <Button onClick={() => changeName()}>Change Name</Button>
      <Button onClick={() => addToppings()}>Add Toppings</Button>
      <Button onClick={() => setQuantity()}>Set Cart Quantity</Button>
      </>    
  );
}

export default App;
