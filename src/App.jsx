import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout'; // Adjust path if necessary
import HomePage from './pages/Homepage';
import BlogsPage from './pages/BlogsPage';
import BlogPost from './pages/BlogPost';


const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blog/:folder" element={<BlogPost />} />
      </Routes>
    </Layout>
  );
};

export default App;