import AuthLayout from "../components/AuthLayout";
import SocialLogin from "../components/SocialLogin";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <AuthLayout>
      <div className="m-6 mx-8">
        <img src="https://images.scalebranding.com/deal-work-logo-7a6701ca-18ac-474b-921f-d1e96353f534.jpg" alt="NovaSync Logo" className="h-20" />
        <h1 className="text-2xl font-bold text-zinc-800">Log in to your Account</h1>
        <p className="text-zinc-600">Welcome back! Select method to log in:</p>
      </div>
      <SocialLogin />
      <div className="m-4 text-center">
        <span className="text-zinc-500 ">or continue with email</span>
      </div>
      <LoginForm />
    </AuthLayout>
  );
};

export default Login;
