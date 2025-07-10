import UserTable from "../../../components/table/UserTable";
import UserFormDialog from "../../../components/forms/UserFormDialog";

export default function AdminUsersPage() {
  return (
    <>
      <UserFormDialog open={false} onClose={function (): void {
              throw new Error("Function not implemented.");
          } } onSave={function (): void {
              throw new Error("Function not implemented.");
          } } />
      <UserTable />
    </>
  );
}
