import { useState } from "react";
import Fir from "./components/fir";
import Sec from "./components/sec";
import Thir from "./components/thir";
import Register from "./components/Register";

export const App = () => {
  const [AuthStatusFir, setAuthStatusFir] = useState("UnAuthenticated");
  const [AuthStatusSec, setAuthStatusSec] = useState("UnAuthenticated");
  const [AuthStatusThir, setAuthStatusThir] = useState("UnAuthenticated");
  const [Id, setId] = useState(0);
  const [buttonvis, setbuttonvis] = useState("visible");
  const handle1 = () => 
  {
    setId(1);
    setbuttonvis("none");
  }
  const handle2 = () => 
  {
    setId(2);
    setbuttonvis("none");
  }
  return (
    <>
      <div className="flex justify-center">
        <button
          style={{ display: buttonvis }}
          className="p-2 bg-blue-600 mt-64 rounded-lg text-gray-100 mr-3"
          onClick={handle2}
        >
          Register
        </button>
        <button
          style={{ display: buttonvis }}
          className="p-2 bg-blue-600 mt-64 rounded-lg text-gray-100 ml-2"
          onClick={handle1}
        >
          LogIn
        </button>
      </div>
      {Id == 1 ? (
        <Fir AuthStatus={AuthStatusFir} setAuthStatus={setAuthStatusFir} />
      ) : Id == 2 ? (
        <Register />
      ) : (
        ""
      )}
    </>
  );
};

export default App;
