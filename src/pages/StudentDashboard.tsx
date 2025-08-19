import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { User } from "lucide-react";

const StudentDashboard = () => {
  return (
    <div className="min-h-screen bg-[var(--gradient-background)]">
      {/* Header */}
      <header className="w-full flex justify-between items-center p-6 md:p-8">
        <div className="flex items-center gap-4">
          <div className="text-2xl md:text-3xl font-bold text-foreground">
            GM
          </div>
          <span className="text-muted-foreground text-sm">Student - Home</span>
        </div>
        <Avatar className="h-10 w-10 bg-white/20">
          <AvatarFallback className="bg-white/20 text-foreground">
            <User className="h-5 w-5" />
          </AvatarFallback>
        </Avatar>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 md:px-8 pb-16">
        <div className="w-full max-w-4xl text-center space-y-12">
          {/* Welcome Message */}
          <h1 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight">
            WELCOME AYYAPPADAS!
          </h1>

          {/* Dashboard Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <Button variant="dashboard-blue" className="p-8">
              COURSES
            </Button>
            <Button variant="dashboard-blue" className="p-8">
              SCORES
            </Button>
            <Button variant="dashboard-blue" className="p-8">
              FEEDBACK
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StudentDashboard;