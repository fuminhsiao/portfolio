import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';  // 使用 Switch 替代 Routes
import App from './App';  // 確保這個路徑是正確的
import ProjectDetail from './pages/ProjectDetail';  // 確保這個路徑是正確的

ReactDOM.render(
  <React.StrictMode>
    {/* 設定 basename 為 "/portfolio" */}
    <Router basename="/portfolio">
      <Switch>
        {/* Home 路由 */}
        <Route path="/" component={App} exact />  {/* 使用 component 替代 element，並添加 exact 確保精確匹配 */}

        {/* Project Detail 路由，支持 projectId 參數 */}
        <Route path="/projects/:projectId" component={ProjectDetail} />  {/* 使用 component */}
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
