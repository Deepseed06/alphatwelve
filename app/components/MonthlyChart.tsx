"use client"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import {
  Card,
  CardContent,

} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
} from "@/components/ui/chart"

const chartData = [
  { month: "Jan", desktop: 186 },
  { month: "Feb", desktop: 505, },
  { month: "Mar", desktop: 800, },
  { month: "Apr", desktop: 333, },
  { month: "May", desktop: 209, },
  { month: "Jun", desktop: 921, },
  { month: "Jul", desktop: 214, },
  { month: "Aug", desktop: 432, },
  { month: "Sep", desktop: 850},
  { month: "Oct", desktop: 661},
  { month: "Nov", desktop: 214},
  { month: "Dec", desktop: 720},
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
 
} satisfies ChartConfig

function MonthlyChart() {
  return (
    <Card className="w-[310px] lg:w-[480px] h-[375px]">
      <CardContent>

        <ChartContainer className="w-[310px] lg:w-[480px] h-[260px] lg:h-[375px]"  config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid  />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
             
              />
           
            <YAxis
              dataKey="desktop"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
         
              />
           
            <Bar dataKey="desktop" fill="#8576FF" radius={4} />
          </BarChart>
        </ChartContainer>
      
          </CardContent>
        </Card>
   
  )
}

export default MonthlyChart;