import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import DashboardOverWiewPage from "./pages/DashboardOverviewPage";
import clsx from "clsx";

function App() {
  // state per gestire una animazione leggera al mount del componente
  const [startAnimation, setStartAnimation] = useState(false);

  // imposta lo state a true dopo il mount per l'animazione iniziale
  useEffect(() => {
    setTimeout(() => setStartAnimation(true), 100);
  });

  return (
    <div
      className={clsx(
        "h-screen w-screen p-2 pb-0 bg-[#fafafa] grid [grid-template-columns:auto_1fr] [grid-template-rows:auto_1fr] gap-x-5 transition-opacity duration-800 ease-in-out",
        startAnimation ? "opacity-100" : "opacity-0"
      )}
    >
      {/* SIDEBAR */}
      <div className="row-span-2">
        <Sidebar />
      </div>

      {/* NAVBAR */}
      <header className="col-span-1 mb-5">
        <Navbar />
      </header>

      {/* MAIN */}
      <div className="row-span-2 overflow-y-auto p-2">
        <DashboardOverWiewPage />
      </div>
    </div>
  );
}

export default App;
