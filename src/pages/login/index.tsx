import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    navigate("/home");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col items-center justify-center mx-auto p-4 w-xl gap-2 rounded shadow-md">
        <h1 className="font-bold text-lg" data-testid="title">
          Login Component
        </h1>
        <div className="w-full">
          <label htmlFor="username" className="text-gray-400 mb-2">
            Username
          </label>
          <input
            className="p-2 border rounded w-full"
            id="username"
            data-testid="username"
            onChange={(e) => setUserName(e.target.value)}
            value={username}
            name="username"
          />
        </div>
        <div className="w-full">
          <label htmlFor="password" className="text-gray-400 mb-2">
            Password
          </label>
          <input
            className="p-2 border rounded w-full"
            type="password"
            id="password"
            data-testid="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            name="password"
          />
        </div>
        <div className="w-full">
          <button
            type="submit"
            className="px-4 py-2 border rounded bg-green-600 text-white w-full cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-300"
            data-testid="submit"
            disabled={!username || !password}
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default Login;
