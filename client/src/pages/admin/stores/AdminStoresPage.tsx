import StoreFormDialog from "../../../components/forms/StoreFormDialog";
import StoreTable from "../../../components/table/StoreTable";

export default function AdminStoresPage() {
  return (
    <>
      <StoreFormDialog open={false} onClose={function (): void {
              throw new Error("Function not implemented.");
          } } onSave={function (): void {
              throw new Error("Function not implemented.");
          } } />
      <StoreTable />
    </>
  );
}
