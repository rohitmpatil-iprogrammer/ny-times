import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ArticleListContainer from '../components/ArticleListContainer';
import ArticleDetail from '../components/ArticleDetails';


const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ArticleListContainer/>} />
        <Route path="/article/:id" element={<ArticleDetail />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
