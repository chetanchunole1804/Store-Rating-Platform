import RatingTable from "../../../components/table/RatingTable";
import StatCard from "../dashboard/AdminDashboard";

export default function StoreDashboard() {
  return (
    <div className="grid gap-4">
      <StatCard />
      <RatingTable />
    </div>
  );
}
