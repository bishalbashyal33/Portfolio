import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout'; // Adjust path if necessary
import HomePage from './pages/HomePage';
import BlogsPage from './pages/BlogsPage';
import BlogPost from './pages/BlogPost';
import { Analytics } from '@vercel/analytics/react';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blog/:folder" element={<BlogPost />} />
      </Routes>
      <Analytics />
    </Layout>
  );
};

export default App;