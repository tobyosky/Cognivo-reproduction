import { IconBrain, IconClock, IconTargetArrow } from "@tabler/icons-react";
import CardDashboardOw from "../components/CardDashboardOw";
import HeaderDashboardOw from "../components/HeaderDashboardOw";
import FocusEnergyChart from "../components/FocusEnergyChart";
import DropdownButtonFilter from "../components/DropdownButtonFilter";
import BrainActivityChart from "../components/BrainActivityChart";
import circuitBluImg from "../assets/bgBlueImg.png";
import brainBlueImg from "../assets/bgBrain.png";
import MoodDistributionChart from "../components/MoodDistributionChart";

const dataDashboard = {
  focusTimeH: 3,
  focusTimeM: 45,
  mentalEnergy: 8.5,
  focusLevel: 82,
  peakFocusTimeStart: "09:00",
  peakFocusTimeEnd: "11:00",
  fasterInPeak: 28,
};

export default function DashboardOverWiewPage() {
  return (
    <main className="grid grid-cols-5 grid-rows-[auto_auto_auto_auto_auto] gap-5 pb-3">
      {/* HEADER */}
      <header className="col-span-5 rows-start-1">
        <HeaderDashboardOw />
      </header>

      {/* CARD 1 - Focus Time (Today) */}
      <div className="col-start-1 row-start-2">
        <CardDashboardOw
          icon={<IconClock stroke={1.5} size={35} color="#05aae6" />}
          title={"Focus Time (Today)"}
          footer={
            <p className="text-gray-500">
              Time spent in deep work or distraction free session
            </p>
          }
        >
          <div className="text-5xl">
            {dataDashboard.focusTimeH}h {dataDashboard.focusTimeM}m
          </div>
        </CardDashboardOw>
      </div>

      {/* CARD 2 - Mental Energy */}
      <div className="col-start-2 row-start-2">
        <CardDashboardOw
          icon={<IconBrain stroke={1.5} size={35} color="#05aae6" />}
          title={"Mental Energy"}
          footer={
            <p className="text-gray-500">
              Your brain energy is at an optimal level. Great job keeping
              balance!
            </p>
          }
        >
          <div className="text-5xl">{dataDashboard.mentalEnergy}/10</div>
        </CardDashboardOw>
      </div>

      {/* CARD 3 - Focus Level */}
      <div className="col-start-3 row-start-2">
        <CardDashboardOw
          icon={<IconTargetArrow stroke={1.5} size={35} color="#05aae6" />}
          title={"Focus Level"}
          footer={
            <p className="text-gray-500">
              You stayed focused for most of your work session today
            </p>
          }
        >
          <div className="text-5xl">{dataDashboard.focusLevel}%</div>
        </CardDashboardOw>
      </div>

      {/* CARD 4 - Brain Activity Map*/}
      <div className="col-start-4 row-start-2 row-span-2 col-span-2">
        <CardDashboardOw
          title={"Brain Activity Map"}
          filterButton={<DropdownButtonFilter text={"Last 6 Hours"} />}
        >
          <div className="min-h-[350px] min-w-[100px]">
            <BrainActivityChart />
          </div>
        </CardDashboardOw>
      </div>

      {/* CARD 5 - Focus & Energy Trend */}
      <div className="col-start-1 row-start-3 row-span-2 col-span-2">
        <CardDashboardOw
          title={"Focus & Energy Trend"}
          filterButton={<DropdownButtonFilter text={"Last 7 Days"} />}
        >
          <div className="min-h-[350px] min-w-[100px]">
            <FocusEnergyChart />
          </div>
        </CardDashboardOw>
      </div>

      {/* CARD 6 - Pomodoro Timer */}
      <div className="col-start-3 row-start-3 row-span-2">
        <CardDashboardOw
          title={"Pomodoro Timer"}
          centerTitle={true}
          cardStyle={"border-2 border-[#7ae4f5] shadow-md shadow-[#22b8f4]/30"}
        >
          {/* TIMER (SIMULATO) */}
          <div className="flex flex-col items-center justify-around grow">
            <div className="border-30 border-[#06ace6] rounded-full p-5 w-full h-full max-w-[220px] max-h-[220px]">
              <div className="bg-white rounded-full shadow-lg py-10 px-3 flex items-center justify-center ">
                <p className="text-4xl">10:00</p>
              </div>
            </div>
            <div className="w-full">
              <button
                type="button"
                className="text-white bg-gradient-to-t from-[#03aae6] to-cyan-400 rounded-4xl py-3 w-full cursor-pointer font-light transform transition-all duration-300 hover:scale-105"
              >
                Start Session
              </button>
            </div>
          </div>
        </CardDashboardOw>
      </div>

      {/* CARD 7 - AI Insight of the Day*/}
      <div className="col-start-1 row-start-5">
        <CardDashboardOw
          title={"AI Insight of the Day"}
          textColor={"text-white"}
          bgImg={circuitBluImg}
        >
          <div className="flex flex-col gap-4">
            <p className="text-white">
              Your peak focus time is between {dataDashboard.peakFocusTimeStart}{" "}
              - {dataDashboard.peakFocusTimeEnd}. Keep up the morning rhythm and
              avoid distractions after lunch.
            </p>
            <div>
              <button className="bg-white px-4 py-2 rounded-full text-[#05aae6] cursor-pointer  transform transition-all duration-300 hover:scale-105">
                View Detail
              </button>
            </div>
          </div>
        </CardDashboardOw>
      </div>

      {/* CARD 8 - Peak Focus Window */}
      <div className="col-start-2 row-start-5 col-span-2">
        <CardDashboardOw
          title={"Peak Focus Window"}
          bgImg={brainBlueImg}
          footer={
            <p className="text-gray-500 w-60">
              You complete tasks {dataDashboard.fasterInPeak}% faster in this
              window compared to the rest of the day
            </p>
          }
        >
          <div className="flex items-center gap-3">
            <IconClock size={35} stroke={1.5} color="#05aae6" />
            <h3 className="text-xl">
              {dataDashboard.peakFocusTimeStart} -{" "}
              {dataDashboard.peakFocusTimeEnd}
            </h3>
          </div>
        </CardDashboardOw>
      </div>

      {/* CARD 9 - Mood Distribution */}
      <div className="col-start-4 row-start-4 row-span-2 col-span-2">
        <CardDashboardOw
          title={"Mood Distribution"}
          filterButton={
            <div class="flex flex-wrap items-center justify-center gap-1 cursor-pointer transform transition-all duration-300 hover:scale-105">
              <span class="w-1 h-1 bg-black rounded-full"></span>
              <span class="w-1 h-1 bg-black rounded-full"></span>
              <span class="w-1 h-1 bg-black rounded-full"></span>
            </div>
          }
        >
          <div className="min-h-[350px] min-w-[100px] flex justify-center items-center">
            <MoodDistributionChart />
          </div>
        </CardDashboardOw>
      </div>
    </main>
  );
}
