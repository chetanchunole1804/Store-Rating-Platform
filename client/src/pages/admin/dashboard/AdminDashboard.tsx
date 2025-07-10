import StatCard from "../../../components/dashboard/StatCard";
// import ChartPanel from "../../../components/dashboard/ChartPanel";

export default function AdminDashboard() {
  return (
    <div className="grid gap-4">
      <StatCard icon={"star"} label={""} value={""} />
      {/* <ChartPanel type={"bar"} title={""} labels={[]} data={[]} /> */}
    </div>
  );
}
