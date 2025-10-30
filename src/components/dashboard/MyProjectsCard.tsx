import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    name: "Financial Advisory for Startup",
    expert: "Rajesh Kumar",
    status: "In Progress",
    cost: "₹15,000",
  },
  {
    name: "HR Policy Review",
    expert: "Priya Sharma",
    status: "Awaiting Review",
    cost: "₹8,500",
  },
  {
    name: "Marketing Strategy",
    expert: "Amit Patel",
    status: "Completed",
    cost: "₹25,000",
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "In Progress":
      return "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20";
    case "Awaiting Review":
      return "bg-secondary/20 text-secondary hover:bg-secondary/30";
    case "Completed":
      return "bg-green-500/10 text-green-500 hover:bg-green-500/20";
    default:
      return "";
  }
};

export function MyProjectsCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>My Projects</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Project Name</TableHead>
              <TableHead>Expert Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Total Cost</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {projects.map((project, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{project.name}</TableCell>
                <TableCell>{project.expert}</TableCell>
                <TableCell>
                  <Badge variant="secondary" className={getStatusColor(project.status)}>
                    {project.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right font-semibold text-secondary">
                  {project.cost}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
