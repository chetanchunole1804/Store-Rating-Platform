import StoreTable from "../../../components/table/StoreTable";

const UserStoresPage = () => {
  return (
    <div className="p-6 space-y-4">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
        Browse & Rate Stores
      </h2>

      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-4 shadow-sm">
        <StoreTable />
      </div>
    </div>
  );
};

export default UserStoresPage;
