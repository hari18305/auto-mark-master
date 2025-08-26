import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const StudentDashboard = () => {
  const [currentView, setCurrentView] = useState<"home" | "courses" | "scores" | "feedback">("home");

  const renderContent = () => {
    switch (currentView) {
      case "courses":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground mb-6">YOUR COURSES</h2>
            <div className="bg-[var(--gradient-card)] rounded-2xl p-6 shadow-[var(--shadow-elevated)]">
              <div className="overflow-x-auto">
                <table className="w-full text-white">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4">Course Code</th>
                      <th className="text-left py-3 px-4">Course Name</th>
                      <th className="text-left py-3 px-4">Credits</th>
                      <th className="text-left py-3 px-4">Faculty</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">CSE101</td>
                      <td className="py-3 px-4">Introduction to Programming</td>
                      <td className="py-3 px-4">4</td>
                      <td className="py-3 px-4">Dr. Smith</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">CSE201</td>
                      <td className="py-3 px-4">Data Structures</td>
                      <td className="py-3 px-4">3</td>
                      <td className="py-3 px-4">Prof. Johnson</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">CSE301</td>
                      <td className="py-3 px-4">Database Systems</td>
                      <td className="py-3 px-4">3</td>
                      <td className="py-3 px-4">Dr. Davis</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
      
      case "scores":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground mb-6">YOUR SCORES</h2>
            <div className="bg-[var(--gradient-card)] rounded-2xl p-6 shadow-[var(--shadow-elevated)]">
              <div className="overflow-x-auto">
                <table className="w-full text-white">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4">Exam</th>
                      <th className="text-left py-3 px-4">Course</th>
                      <th className="text-left py-3 px-4">Score</th>
                      <th className="text-left py-3 px-4">Grade</th>
                      <th className="text-left py-3 px-4">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Midterm 1</td>
                      <td className="py-3 px-4">CSE101</td>
                      <td className="py-3 px-4">85/100</td>
                      <td className="py-3 px-4">A</td>
                      <td className="py-3 px-4">2024-01-15</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Quiz 1</td>
                      <td className="py-3 px-4">CSE201</td>
                      <td className="py-3 px-4">92/100</td>
                      <td className="py-3 px-4">A+</td>
                      <td className="py-3 px-4">2024-01-10</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Assignment 1</td>
                      <td className="py-3 px-4">CSE301</td>
                      <td className="py-3 px-4">78/100</td>
                      <td className="py-3 px-4">B+</td>
                      <td className="py-3 px-4">2024-01-08</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );

      case "feedback":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground mb-6">FEEDBACK</h2>
            <div className="bg-[var(--gradient-card)] rounded-2xl p-6 shadow-[var(--shadow-elevated)]">
              <div className="space-y-4 text-white">
                <div className="border-b border-white/20 pb-4">
                  <h3 className="font-semibold">CSE101 - Midterm 1</h3>
                  <p className="text-white/80 mt-2">Excellent work on algorithm implementation. Consider optimizing time complexity for bonus points.</p>
                  <span className="text-grademate-cyan text-sm">Score: 85/100</span>
                </div>
                <div className="border-b border-white/20 pb-4">
                  <h3 className="font-semibold">CSE201 - Quiz 1</h3>
                  <p className="text-white/80 mt-2">Perfect understanding of data structures. Keep up the great work!</p>
                  <span className="text-grademate-cyan text-sm">Score: 92/100</span>
                </div>
                <div className="pb-4">
                  <h3 className="font-semibold">CSE301 - Assignment 1</h3>
                  <p className="text-white/80 mt-2">Good grasp of database concepts. Review normalization techniques for improvement.</p>
                  <span className="text-grademate-cyan text-sm">Score: 78/100</span>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="text-center space-y-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-12">
              WELCOME ATYAPPADAS!
            </h1>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                onClick={() => setCurrentView("courses")}
                variant="dashboard-blue"
                size="lg"
                className="w-32 h-16 text-lg font-semibold"
              >
                COURSES
              </Button>
              
              <Button 
                onClick={() => setCurrentView("scores")}
                variant="dashboard-blue"
                size="lg"
                className="w-32 h-16 text-lg font-semibold"
              >
                SCORES
              </Button>
              
              <Button 
                onClick={() => setCurrentView("feedback")}
                variant="dashboard-blue"
                size="lg"
                className="w-32 h-16 text-lg font-semibold"
              >
                FEEDBACK
              </Button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[var(--gradient-background)] flex flex-col">
      {/* Header */}
      <header className="w-full flex justify-between items-center p-6 md:p-8">
        <Link to="/" className="text-2xl md:text-3xl font-bold text-foreground">
          GM
        </Link>
        
        {currentView !== "home" && (
          <Button 
            onClick={() => setCurrentView("home")}
            variant="outline-cyan"
            size="sm"
          >
            Back to Home
          </Button>
        )}
        
        <Button variant="outline-cyan" size="sm">
          Logout
        </Button>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 md:px-8">
        <div className="w-full max-w-6xl">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default StudentDashboard;