import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <main className="p-4 overflow-auto bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
