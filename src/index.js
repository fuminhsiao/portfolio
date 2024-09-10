import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';  // 確保這個路徑是正確的
import ProjectDetail from './pages/ProjectDetail';  // 確保這個路徑是正確的

ReactDOM.render(
  <React.StrictMode>
    {/* 設定 basename 為 "/portfolio" */}
    <Router basename="/portfolio">
      <Routes>
        {/* Home 路由 */}
        <Route path="/" element={<App />} />

        {/* Project Detail 路由，支持 projectId 參數 */}
        <Route path="/projects/:projectId" element={<ProjectDetail />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
