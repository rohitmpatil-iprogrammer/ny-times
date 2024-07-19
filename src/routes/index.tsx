import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ArticleListContainer from '../components/ArticleListContainer';
import ArticleDetail from '../components/ArticleDetails';


/**
 * AppRoutes component
 * 
 * This component sets up the routes for the application using React Router.
 * It defines two routes:
 * - The homepage path "/" renders the `ArticleListContainer` component.
 * - The path "/article/:id" renders the `ArticleDetail` component.
 * 
 * @returns {JSX.Element} The JSX element representing the routes.
 */
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
