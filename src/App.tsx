import "./App.css";
import { useRoutes } from "react-router-dom";
import Home from './pages/Home'

import Header from "./components/Header";

function App() {
  const route = useRoutes([
    { path: "/home", element: <Home /> },
    { path: "/movies", element: <Home /> },
  ]);

  return (
    <div>
      <Header />
      {route}
    </div>
  );
}

export default App;
