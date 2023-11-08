import "./App.css";
import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Movies from "./pages/Movies";
import DetailMovie from "./components/DetailMoves";


function App() {
  const route = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/movies", element: <Movies /> },
    { path: "/movies/:id", element: <DetailMovie /> },
  ]);
  
  return (
      <div className="flex flex-col justify-between min-h-[100vh]">
        <Header />
        {route}
        <Footer />
      </div>
  
  );
}

export default App;