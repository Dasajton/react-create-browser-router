import { Outlet } from 'react-router-dom';
import Nav from './components/Navbar';

function App() {
  return (
    <>
      <Nav />
      <main className="p-2 mt-2">
        <Outlet />
      </main>
    </>
  );
}

export default App;
