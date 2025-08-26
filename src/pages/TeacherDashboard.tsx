import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const TeacherDashboard = () => {
  const [currentView, setCurrentView] = useState<"home" | "classwise">("home");
  const [selectedClass, setSelectedClass] = useState<string>("");

  const classes = [
    { code: "CSE-A", name: "Computer Science A", semester: "Fall 2024" },
    { code: "CSE-C", name: "Computer Science C", semester: "Fall 2024" },
    { code: "CSE-D", name: "Computer Science D", semester: "Fall 2024" },
    { code: "CSE-B", name: "Computer Science B", semester: "Fall 2024" },
  ];

  const renderContent = () => {
    if (currentView === "classwise") {
      return (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground mb-6">CLASS WISE VIEW</h2>
          
          {/* Class Selection */}
          <div className="flex flex-wrap gap-4 mb-8">
            {classes.map((cls) => (
              <Button
                key={cls.code}
                onClick={() => setSelectedClass(cls.code)}
                variant={selectedClass === cls.code ? "login-green" : "dashboard-blue"}
                size="sm"
                className="text-sm"
              >
                {cls.code}
              </Button>
            ))}
          </div>

          {/* Student Scores Table */}
          {selectedClass && (
            <div className="bg-[var(--gradient-card)] rounded-2xl p-6 shadow-[var(--shadow-elevated)]">
              <h3 className="text-xl font-semibold text-white mb-4">
                {classes.find(c => c.code === selectedClass)?.name} - Student Scores
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-white">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4">Student Name</th>
                      <th className="text-left py-3 px-4">Roll No</th>
                      <th className="text-left py-3 px-4">Quiz 1</th>
                      <th className="text-left py-3 px-4">Midterm</th>
                      <th className="text-left py-3 px-4">Assignment 1</th>
                      <th className="text-left py-3 px-4">Total</th>
                      <th className="text-left py-3 px-4">Grade</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Atyappadas</td>
                      <td className="py-3 px-4">CSE001</td>
                      <td className="py-3 px-4">92</td>
                      <td className="py-3 px-4">85</td>
                      <td className="py-3 px-4">88</td>
                      <td className="py-3 px-4">265/300</td>
                      <td className="py-3 px-4">A</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Priya Sharma</td>
                      <td className="py-3 px-4">CSE002</td>
                      <td className="py-3 px-4">87</td>
                      <td className="py-3 px-4">90</td>
                      <td className="py-3 px-4">85</td>
                      <td className="py-3 px-4">262/300</td>
                      <td className="py-3 px-4">A</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Rahul Kumar</td>
                      <td className="py-3 px-4">CSE003</td>
                      <td className="py-3 px-4">78</td>
                      <td className="py-3 px-4">82</td>
                      <td className="py-3 px-4">75</td>
                      <td className="py-3 px-4">235/300</td>
                      <td className="py-3 px-4">B+</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Sneha Patel</td>
                      <td className="py-3 px-4">CSE004</td>
                      <td className="py-3 px-4">95</td>
                      <td className="py-3 px-4">92</td>
                      <td className="py-3 px-4">90</td>
                      <td className="py-3 px-4">277/300</td>
                      <td className="py-3 px-4">A+</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      );
    }

    return (
      <div className="text-center space-y-8">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-12">
          WELCOME MRS. ABCD!
        </h1>
        
        {/* Semester Selection */}
        <div className="mb-8">
          <span className="text-grademate-cyan font-semibold text-lg">Fall 2024</span>
        </div>
        
        {/* Course Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
          {classes.map((cls) => (
            <Button 
              key={cls.code}
              onClick={() => {
                setCurrentView("classwise");
                setSelectedClass(cls.code);
              }}
              variant="login-green"
              size="lg"
              className="h-20 text-lg font-semibold flex flex-col"
            >
              <span>{cls.code}</span>
              <span className="text-xs opacity-80">{cls.semester}</span>
            </Button>
          ))}
        </div>
        
        {/* Additional Actions */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="outline-cyan" size="lg">
            Upload Papers
          </Button>
          <Button variant="outline-cyan" size="lg">
            Generate Reports
          </Button>
        </div>
      </div>
    );
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

export default TeacherDashboard;