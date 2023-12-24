import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.scss';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Error404 from './pages/Error404.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <Error404 />,
    element: <App />,
    children: [
      {
        path: '/Home',
        element: <Home />
      },
      {
        path: '/About',
        element: <About />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
