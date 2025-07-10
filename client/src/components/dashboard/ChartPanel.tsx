// import { Card, CardContent, Typography } from "@mui/material";
// import {
//   Bar,
//   Pie,
//   Line,
//   ChartData,
//   ChartOptions,
// } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   BarElement,
//   ArcElement,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(
//   BarElement,
//   ArcElement,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Tooltip,
//   Legend
// );

// type ChartType = "bar" | "pie" | "line";

// interface ChartPanelProps {
//   type: ChartType;
//   title: string;
//   labels: string[];
//   data: number[];
// }

// const ChartPanel = ({ type, title, labels, data }: ChartPanelProps) => {
//   const chartData: ChartData<"bar" | "pie" | "line", number[], string> = {
//     labels,
//     datasets: [
//       {
//         label: title,
//         data,
//         backgroundColor: [
//           "#3B82F6",
//           "#10B981",
//           "#F59E0B",
//           "#EF4444",
//           "#8B5CF6",
//         ],
//         borderColor: "#ffffff",
//         borderWidth: 1,
//       },
//     ],
//   };

//   const options: ChartOptions = {
//     responsive: true,
//     maintainAspectRatio: false,
//   };

//   const renderChart = () => {
//     switch (type) {
//       case "bar":
//         return <Bar data={chartData} options={options} />;
//       case "pie":
//         return <Pie data={chartData} options={options} />;
//       case "line":
//         return <Line data={chartData} options={options} />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <Card>
//       <CardContent>
//         <Typography variant="h6" mb={2}>
//           {title}
//         </Typography>
//         <div style={{ height: 300 }}>{renderChart()}</div>
//       </CardContent>
//     </Card>
//   );
// };

// export default ChartPanel;
