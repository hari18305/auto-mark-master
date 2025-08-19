import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";

const LoginSignup = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState<"student" | "teacher">("student");
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login/signup logic here
    console.log({ userType, isLogin, email, password });
    
    // Redirect based on user type
    if (userType === "student") {
      navigate("/student");
    } else {
      navigate("/teacher");
    }
  };

  return (
    <div className="min-h-screen bg-[var(--gradient-background)] flex flex-col">
      {/* Header */}
      <header className="w-full flex justify-between items-center p-6 md:p-8">
        <Link to="/" className="text-2xl md:text-3xl font-bold text-foreground">
          GM
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 md:px-8">
        <div className="w-full max-w-md">
          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12 tracking-wide">
            LOGIN / SIGNUP
          </h1>

          {/* User Type Toggle */}
          <div className="mb-8 flex">
            <div className="relative w-full h-12 bg-[var(--gradient-toggle)] rounded-full p-1">
              <div 
                className={`absolute top-1 bottom-1 w-1/2 bg-white/20 backdrop-blur-sm rounded-full transition-all duration-300 ${
                  userType === "teacher" ? "translate-x-full" : "translate-x-0"
                }`}
              />
              <div className="relative z-10 flex h-full">
                <button
                  onClick={() => setUserType("student")}
                  className={`flex-1 flex items-center justify-center text-sm font-semibold transition-colors duration-300 ${
                    userType === "student" ? "text-white" : "text-white/80"
                  }`}
                >
                  STUDENT
                </button>
                <button
                  onClick={() => setUserType("teacher")}
                  className={`flex-1 flex items-center justify-center text-sm font-semibold transition-colors duration-300 ${
                    userType === "teacher" ? "text-white" : "text-white/80"
                  }`}
                >
                  TEACHER
                </button>
              </div>
            </div>
          </div>

          {/* Auth Toggle Text */}
          <div className="text-center mb-8">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {isLogin ? "Don't have an account? Click here" : "Already have an account? Click here"}
            </button>
          </div>

          {/* Auth Form Card */}
          <div className="bg-[var(--gradient-card)] rounded-3xl p-8 shadow-[var(--shadow-elevated)]">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="email"
                  placeholder="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-12 bg-white/20 border-0 rounded-full text-center text-foreground placeholder:text-white/60 focus:bg-white/30 transition-colors"
                  required
                />
              </div>
              
              <div>
                <Input
                  type="password"
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-12 bg-white/20 border-0 rounded-full text-center text-foreground placeholder:text-white/60 focus:bg-white/30 transition-colors"
                  required
                />
              </div>

              <div className="pt-4">
                <Button 
                  type="submit" 
                  variant="login-green" 
                  className="w-32 h-12 mx-auto block"
                >
                  {isLogin ? "LOGIN" : "SIGN UP"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LoginSignup;