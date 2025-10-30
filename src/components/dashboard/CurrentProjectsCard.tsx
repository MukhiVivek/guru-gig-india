import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const projects = [
  { name: "Financial Advisory Services", client: "Sharma Enterprises", dueDate: "Apr 15, 2024", hours: "24/40", status: "In Progress" },
  { name: "Business Consulting", client: "Tech Innovations Ltd", dueDate: "Apr 20, 2024", hours: "12/30", status: "In Progress" },
  { name: "Tax Planning Review", client: "Kumar & Co", dueDate: "Apr 10, 2024", hours: "18/20", status: "Awaiting Review" },
];

export function CurrentProjectsCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base flex items-center gap-2">
          <Briefcase className="h-4 w-4" />
          Current Projects
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Project Name</TableHead>
              <TableHead>Client</TableHead>
              <TableHead>Due Date</TableHead>
              <TableHead>Hours/Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {projects.map((project, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{project.name}</TableCell>
                <TableCell>{project.client}</TableCell>
                <TableCell>{project.dueDate}</TableCell>
                <TableCell>
                  <div className="flex flex-col gap-1">
                    <span className="text-sm">{project.hours}</span>
                    <Badge variant="outline" className="w-fit">{project.status}</Badge>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
