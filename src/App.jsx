import { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { UserContext } from "./component/UserContext";
import Login, { setDataUser } from "./component/Login";
import Dashboard from "./component/Dashboard/Dashboard";

function App() {
  const { user, setUser, setprofile, setWebsites } = useContext(UserContext);
  const access_token = localStorage.getItem("accessToken");
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await fetch(
          "https://banana-tech.onrender.com/api/v1/googleuser",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ access_token }),
          }
        );
        const userData = await res.json();
        const data = await setDataUser(userData[0]);
        setWebsites(data);
        setprofile(userData[1].picture);
        setUser(userData[0]);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    if (access_token) fetchUserData();
  }, []);

  return (
    <Routes>
      <Route path="/*" element={user ? <Dashboard /> : <Login />} />
    </Routes>
  );
}

export default App;
