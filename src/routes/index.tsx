import { BrowserRouter as Router, Routes, Route, MemoryRouter } from 'react-router-dom';

import ArticleListContainer from '../components/ArticleListContainer';
import ArticleDetail from '../components/ArticleDetails';


const AppRoutes = () => {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<ArticleListContainer/>} />
        <Route path="/article/:id" element={<ArticleDetail />} />
      </Routes>
    </MemoryRouter>
  );
};

export default AppRoutes;
