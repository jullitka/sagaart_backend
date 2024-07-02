import ReactDOM from 'react-dom/client';
import App from './routes';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Catalog from './routes/catalog';
import Main from './routes/main';
import Art from './routes/art';
import News from './routes/news';
import Consultation from './routes/consultation';
import Cart from './routes/cart';
import Profile from './routes/profile';
import ProfileMain from './routes/profile/routes/main';
import Subscription from './routes/profile/routes/subscription';
import OnSale from './routes/profile/routes/onSale';
import PurchaseHistory from './routes/profile/routes/purchaseHistory';
import FavoriteArtists from './routes/profile/routes/favoriteArtists';
import Favorites from './routes/profile/routes/favorites';
import PaymentMethods from './routes/profile/routes/paymentMethods';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Main />,
      },
      {
        path: 'catalog',
        element: <Catalog />,
        children: [
          {
            path: 'painting',
          },
          {
            path: 'graphics',
          },
          {
            path: 'artists',
          },
          {
            path: 'photography',
          },
          {
            path: 'digital',
          },
          {
            path: 'prints',
          },
          {
            path: 'styles',
          },
        ],
      },
      { path: 'pricing' },
      { path: 'consultation', element: <Consultation /> },
      { path: 'news', element: <News /> },
      { path: 'art/:artId', element: <Art /> },
      { path: 'cart', element: <Cart /> },
      {
        path: 'profile',
        element: <Profile />,
        children: [
          {
            path: 'main',
            element: <ProfileMain />,
          },
          { path: 'subscription', element: <Subscription /> },
          { path: 'on-sale', element: <OnSale /> },
          { path: 'purchases', element: <PurchaseHistory /> },
          { path: 'favorite-artists', element: <FavoriteArtists /> },
          { path: 'favorites', element: <Favorites /> },
          { path: 'payment-methods', element: <PaymentMethods /> },
          { path: 'settings' },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}></RouterProvider>
);
