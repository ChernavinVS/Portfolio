import React from 'react';
import VisitingCard from './Components/VisitingCard';
import PostForm from './PostForm';
import Posts from './Posts';

function App() {
  return (
    <>
      <Posts/> 
      <PostForm />
      <VisitingCard />
    </>
  );
}

export default App;