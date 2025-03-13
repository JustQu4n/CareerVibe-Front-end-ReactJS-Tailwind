import { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login with", { email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg ">
      <input
        type="email"
        placeholder="Email"
        className="border border-zinc-300 p-2 rounded-lg mb-4 w-full"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="border border-zinc-300 p-2 rounded-lg mb-4 w-full"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="flex items-center mb-4">
        <input type="checkbox" id="remember" className="mr-2" />
        <label htmlFor="remember" className="text-zinc-600">Remember me</label>
        <a href="#" className="ml-auto text-blue-600 hover:underline">Forgot Password?</a>
      </div>
      <button type="submit" className="bg-blue-600 text-white p-2 rounded-lg w-full hover:bg-blue-700">
        Log in
      </button>
      <div className="mt-4 text-center">
        <span className="text-zinc-500">
          Don’t have an account? <a href="#" className="text-blue-600 hover:underline">Create an account</a>
        </span>
      </div>
    </form>
  );
};

export default LoginForm;
