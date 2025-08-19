import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center p-6 md:p-8">
      <div className="text-2xl md:text-3xl font-bold text-foreground">
        GM
      </div>
      <Button variant="outline-cyan" size="sm" className="text-sm md:text-base">
        LOGIN / SIGNUP
      </Button>
    </header>
  );
};

export default Header;