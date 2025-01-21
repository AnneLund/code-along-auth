import "./App.css";
import Backoffice from "./pages/backoffice/Backoffice";
import { useRoutes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./components/login/Login";
import useAuth from "./components/hooks/useAuth";
import Home from "./pages/Home";

function App() {
  const { signedIn } = useAuth();

  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },

    {
      path: "/backoffice",
      element: (
        <ProtectedRoute isAllowed={signedIn}>
          <Backoffice />
        </ProtectedRoute>
      ),
    },
  ]);

  return (
    <div className='app'>
      <div className='main'>{routes}</div>
    </div>
  );
}

export default App;
