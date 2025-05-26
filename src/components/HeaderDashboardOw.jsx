import {
  IconArrowDownToArc,
  IconCalendarWeek,
  IconLayout2,
  IconRefresh,
} from "@tabler/icons-react";
import ButtonNavigation from "./ButtonNavigation";

export default function HeaderDashboardOw() {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-4xl">Dashboard Overview</h1>
      </div>

      <div className="flex gap-3">
        {/* BUTTON CALENDARIO */}
        <div>
          <ButtonNavigation
            icon={<IconCalendarWeek stroke={1.5} size={28} />}
            text={"May 2025"}
            bgColor={"bg-white"}
          />
        </div>

        {/* BUTTON DOWNLOAD */}
        <div>
          <ButtonNavigation
            icon={<IconArrowDownToArc stroke={1.5} size={28} />}
            bgColor={"bg-white"}
          />
        </div>

        {/* BUTTON LAYOUT */}
        <div>
          <ButtonNavigation
            icon={<IconLayout2 stroke={1.5} size={28} />}
            bgColor={"bg-white"}
          />
        </div>

        {/* BUTTON REFRESH */}
        <div>
          <ButtonNavigation
            icon={<IconRefresh stroke={1.5} size={30} color="white" />}
            bgColor={"bg-gradient-to-t from-[#03aae6] to-cyan-400"}
          />
        </div>
      </div>
    </div>
  );
}
