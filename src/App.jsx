import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '/src/components/Layout'; // Adjust path if necessary
import HomePage from '/src/pages/Homepage';
import BlogsPage from '/src/pages/BlogsPage';
import BlogPost from '/src/pages/BlogPost';


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