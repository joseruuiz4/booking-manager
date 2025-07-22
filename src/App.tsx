import { useEffect } from "react";
import { useSearchParams } from "react-router";
import "./styles.css";
import AuthBox from "./components/AuthBox";
import InfoMessage from "./components/InfoMessage";

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
      <AuthBox></AuthBox>
    </>
  );
}

export default App;
