import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux/es/exports';
import { RouterProvider } from 'react-router-dom';
import store from './redux/store';
import router from './router/router';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);
