import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Video, FileText, Lightbulb } from "lucide-react";

const courses = [
  { title: "Mastering Video Calls for Consulting", icon: Video },
  { title: "Remote Work Best Practices", icon: Lightbulb },
  { title: "Professional Documentation Skills", icon: FileText },
];

export function GrowthUpskillCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base flex items-center gap-2">
          <GraduationCap className="h-4 w-4" />
          Growth & Upskill Center
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">
          Enhance your remote work skills and increase your project success rate
        </p>

        <div className="space-y-2">
          {courses.map((course, index) => (
            <div key={index} className="flex items-center gap-3 p-3 border rounded-lg hover:bg-accent/5 transition-colors">
              <course.icon className="h-4 w-4 text-secondary" />
              <span className="text-sm flex-1">{course.title}</span>
            </div>
          ))}
        </div>

        <Button variant="accent" className="w-full">
          Explore Courses
        </Button>

        <div className="pt-2 border-t">
          <p className="text-xs text-center text-muted-foreground">
            Premium members get 20% off all courses
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
