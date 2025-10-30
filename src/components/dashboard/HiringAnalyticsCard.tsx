import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Oct", spending: 12000 },
  { month: "Nov", spending: 18500 },
  { month: "Dec", spending: 15000 },
  { month: "Jan", spending: 22000 },
  { month: "Feb", spending: 28000 },
  { month: "Mar", spending: 25000 },
];

export function HiringAnalyticsCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Hiring Spend Trend</CardTitle>
        <p className="text-sm text-muted-foreground">Last 6 months (INR)</p>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
            <XAxis dataKey="month" className="text-xs" />
            <YAxis className="text-xs" />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "var(--radius)",
              }}
              formatter={(value) => [`₹${value.toLocaleString()}`, "Spending"]}
            />
            <Bar dataKey="spending" fill="hsl(var(--secondary))" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
        <div className="mt-4 flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Total Spend:</span>
          <span className="text-2xl font-bold text-secondary">₹1,20,500</span>
        </div>
      </CardContent>
    </Card>
  );
}
