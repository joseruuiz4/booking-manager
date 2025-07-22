import { useEffect } from "react";
import { useSearchParams } from "react-router";
import "./styles.css";
import Login from "./components/Login";

function App() {
  const [params, setParams] = useSearchParams();

  useEffect(() => {
    const token = params.get("token");
    if (token) {
      localStorage.setItem("token", token);
      console.log("Token saved to localStorage:", token);
    }
  }, [params]);

  return (
    <>
      <Login></Login>
    </>
  );
}

export default App;
