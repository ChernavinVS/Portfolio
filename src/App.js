import React from 'react';
import VisitingCard from './Components/VisitingCard';
import PostForm from './Components/PostForm';
import Posts from './Components/Posts';
import Contakts from './Components/Contakts';

function App() {
  return (
    <>
      <Posts/> 
      <PostForm />
      <VisitingCard />
      <Contakts/>
    </>
  );
}

export default App;