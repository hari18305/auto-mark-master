import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center p-6 md:p-8">
      <div className="text-2xl md:text-3xl font-bold text-foreground">
        GM
      </div>
      <Link to="/auth">
        <Button variant="outline-cyan" size="sm" className="text-sm md:text-base">
          LOGIN / SIGNUP
        </Button>
      </Link>
    </header>
  );
};

export default Header;