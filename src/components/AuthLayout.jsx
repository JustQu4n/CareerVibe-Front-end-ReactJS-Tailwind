const AuthLayout = ({ children }) => {
    return (
      <div className="flex h-screen bg-zinc-100">
        <div className="w-1/2 flex flex-col justify-center p-10 bg-white shadow-lg">
          {children}
        </div>
        <div className="w-1/2 bg-blue-600 flex items-center justify-center">
          <div className="text-white text-center">
            <h2 className="text-3xl font-bold">Connect with every application.</h2>
            <p className="mt-2">Everything you need in an easily customizable dashboard.</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default AuthLayout;
  