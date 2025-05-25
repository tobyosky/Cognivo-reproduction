import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import DashboardOverWiewPage from "./pages/DashboardOverviewPage";

function App() {
  return (
    <div className="h-screen w-screen p-2 pb-0 bg-[#fafafa] grid [grid-template-columns:auto_1fr] [grid-template-rows:auto_1fr] gap-x-5">
      {/* SIDEBAR */}
      <div className="row-span-2">
        <Sidebar />
      </div>

      {/* NAVBAR */}
      <header className="col-span-1 mb-5">
        <Navbar />
      </header>

      {/* MAIN */}
      <div className="row-span-2 overflow-y-auto pt-2 pr-2 pb-2">
        <DashboardOverWiewPage />
      </div>
    </div>
  );
}

export default App;
