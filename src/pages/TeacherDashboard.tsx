import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { User } from "lucide-react";

const TeacherDashboard = () => {
  const courses = [
    {
      code: "CSE-A",
      year: "2024-25",
      subject: "20CS2204 - OPERATING SYSTEMS"
    },
    {
      code: "CSE-C", 
      year: "2023-24",
      subject: "20CS3111 - SOFTWARE ENGINEERING"
    },
    {
      code: "CSE-D",
      year: "2023-24", 
      subject: "20CS3111 - SOFTWARE ENGINEERING"
    },
    {
      code: "CSE-A",
      year: "2022-23",
      subject: "IMSC514 - PRINCIPLES OF FUNCTIONAL LANGUAGES"
    },
    {
      code: "CSE-B",
      year: "2022-23",
      subject: "IMSC514 - PRINCIPLES OF FUNCTIONAL LANGUAGES"
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--gradient-background)]">
      {/* Header */}
      <header className="w-full flex justify-between items-center p-6 md:p-8">
        <div className="flex items-center gap-4">
          <div className="text-2xl md:text-3xl font-bold text-foreground">
            GM
          </div>
          <span className="text-muted-foreground text-sm">Teacher - Home</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground">ID: 123456</span>
          <Avatar className="h-10 w-10 bg-white/20">
            <AvatarFallback className="bg-white/20 text-foreground">
              <User className="h-5 w-5" />
            </AvatarFallback>
          </Avatar>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-6 md:px-8 pb-16">
        <div className="w-full max-w-7xl mx-auto space-y-8">
          {/* Welcome Message */}
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight mb-6">
              WELCOME MRS. ABCD !
            </h1>
          </div>

          {/* Semester Selection */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-4">
              <span className="text-foreground font-semibold">SEMESTER:</span>
              <Select defaultValue="2023-24-odd">
                <SelectTrigger className="w-64 bg-grademate-green text-grademate-navy font-semibold border-0 rounded-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2023-24-odd">2023-24 ODD SEMESTER</SelectItem>
                  <SelectItem value="2023-24-even">2023-24 EVEN SEMESTER</SelectItem>
                  <SelectItem value="2022-23-odd">2022-23 ODD SEMESTER</SelectItem>
                  <SelectItem value="2022-23-even">2022-23 EVEN SEMESTER</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Course Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {courses.map((course, index) => (
              <Button
                key={index}
                variant="course-card"
                className="p-6 text-left justify-start"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold">{course.code}</span>
                    <span className="text-sm font-medium">{course.year}</span>
                  </div>
                  <div className="text-xs font-medium opacity-80">
                    {course.subject}
                  </div>
                </div>
              </Button>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default TeacherDashboard;