import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="min-h-screen min-w-screen bg-[#fafafa] p-2 grid [grid-template-columns:auto_1fr] grid-rows-2 gap-5">
      {/* SIDEBAR */}
      <section className="row-span-2">
        <Sidebar />
      </section>

      {/* NAVBAR */}
      <section className="col-span-1">
        <Navbar />
      </section>
    </div>
  );
}

export default App;
