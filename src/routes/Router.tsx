import { Routes, Route } from 'react-router-dom';
import { DefaultLayout } from '../layouts/DefaultLayout';
import { CreateProduct } from '../pages/CreateProduct';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';

export function Router() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/createproduct" element={<CreateProduct />} />
        <Route path="/delivery" />
      </Route>
    </Routes>
  );
}
