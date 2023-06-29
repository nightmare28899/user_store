import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const notifySuccess = () =>
    toast.success("Login successful", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  const notifyError = () =>
    toast.error("Please enter username and password", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  const userName = (event: any) => {
    setUsername(event.target.value);
  };

  const userPassword = (event: any) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (username !== "" && password !== "") {
      notifySuccess();
      navigate("/home");
    } else {
      notifyError();
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center">Iniciar Sesión</h2>
          <form className="mt-4" onSubmit={handleSubmit}>
            <div className="form-group my-4">
              {/* <label className="block font-semibold" htmlFor="username">
                Username
              </label> */}
              <input
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={userName}
                placeholder="Enter your username"
              />
            </div>
            <div className="form-group mb-6">
              {/* <label className="block font-semibold" htmlFor="password">
                Password
              </label> */}
              <input
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={userPassword}
                placeholder="Enter your password"
              />
            </div>
            <div className="form-group">
              <button
                className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
          <div>
            <ToastContainer
              position="top-center"
              autoClose={3000}
              hideProgressBar
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
