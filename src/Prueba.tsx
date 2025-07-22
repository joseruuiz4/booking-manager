import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

function Prueba() {
  const [params, setParams] = useSearchParams();

  const [img, setImg] = useState("");

  useEffect(() => {
    const token = params.get("token");
    if (token) {
      localStorage.setItem("token", token);
      const payload = JSON.parse(atob(token.split(".")[1]));
      console.log(payload.name);
      console.log(payload.photo);
      setImg(payload.photo);
    }
  }, [params]);

  return (
    <>
      <h1>Welcome to the App</h1>
      asdad
      <p>Check your localStorage for the token.</p>
      <img src={img} alt="User Avatar" />
    </>
  );
}

export default Prueba;
