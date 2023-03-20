import { useState } from 'react';
import './App.css';

import Button from './components/Button';
import ExpandableText from './components/ExpandableText';

function App() {
  const fullText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ipsa optio laudantium, illo asperiores a odio corporis, nihil voluptatem molestias suscipit et officia quia animi, consequatur ab velit ipsum pariatur deserunt. Laboriosam officia aut quis vitae error, quia, laudantium placeat nesciunt sed exercitationem pariatur, mollitia quos? Quibusdam sapiente recusandae eos delectus non veniam ipsum dolore assumenda cumque, reiciendis sed accusantium porro suscipit voluptas perferendis est! Unde dolores totam ex velit, animi, aliquam a voluptatibus architecto explicabo, similique doloribus placeat? Autem alias, nostrum voluptatibus illum cupiditate deleniti aspernatur repellat ad fugit ut quasi sunt commodi nulla, voluptate saepe consequuntur cumque porro?";
  return (
      <>
      <div>{fullText.length}</div>
      <ExpandableText maxChars={10}>{fullText}</ExpandableText>
      </>    
  );
}

export default App;
