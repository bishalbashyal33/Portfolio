import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout'; // Adjust path if necessary
import HomePage from './pages/HomePage';
import { Analytics } from '@vercel/analytics/react';

const BlogsPage = lazy(() => import('./pages/BlogsPage'));
const BlogPost = lazy(() => import('./pages/BlogPost'));

const App = () => {
  return (
    <Layout>
      <Suspense fallback={<div role="status" className="min-h-screen grid place-items-center text-gray-800">Loading…</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/blog/:folder" element={<BlogPost />} />
        </Routes>
      </Suspense>
      <Analytics />
    </Layout>
  );
};

export default App;
