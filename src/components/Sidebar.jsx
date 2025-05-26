import {
  IconArrowBackUp,
  IconBrandLoom,
  IconChartHistogram,
  IconLayoutGridFilled,
  IconMoonFilled,
  IconSettings,
  IconTargetArrow,
  IconTimeline,
} from "@tabler/icons-react";
import ButtonNavigation from "./ButtonNavigation";

export default function Sidebar() {
  return (
    <div className="bg-white flex flex-col items-center p-2 justify-between w-fit rounded-full min-h-full">
      <div className="flex flex-col gap-15 items-center">
        {/* LOGO */}
        <section>
          <IconBrandLoom
            stroke={1.5}
            size={50}
            color="#05aae6"
            title="Cognivo"
          />
        </section>

        {/* BUTTONS NAGIVAZIONE */}
        <section>
          <ul className="space-y-2">
            <li key={"overview"} title="Dashbord">
              <ButtonNavigation
                icon={<IconLayoutGridFilled size={28} color="#05aae6" />}
                bgColor={"bg-[#e2fcfc]/60"}
              />
            </li>
            <li key={"goals"} title="Goals">
              <ButtonNavigation
                icon={
                  <IconTargetArrow stroke={1.5} size={28} color="#05aae6" />
                }
                bgColor={"bg-gray-50"}
              />
            </li>
            <li key={"daily-goals"} title="Daily Goals">
              <ButtonNavigation
                icon={<IconTimeline stroke={1.5} size={28} color="#05aae6" />}
                bgColor={"bg-gray-50"}
              />
            </li>
            <li key={"charts"} title="Charts">
              <ButtonNavigation
                icon={
                  <IconChartHistogram stroke={1.5} size={28} color="#05aae6" />
                }
                bgColor={"bg-gray-50"}
              />
            </li>
            <li key={"settings"} title="Settings">
              <ButtonNavigation
                icon={<IconSettings stroke={1.5} size={28} color="#05aae6" />}
                bgColor={"bg-gray-50"}
              />
            </li>
          </ul>
        </section>
      </div>

      {/*BUTTONS DARK MODE E BACK */}
      <section>
        <ul className="space-y-2" title="Dark Mode">
          <li key={"dark-mode"}>
            <ButtonNavigation
              icon={<IconMoonFilled size={28} color="#05aae6" />}
              bgColor={"bg-gray-50"}
            />
          </li>
          <li key={"back"} title="Back">
            <ButtonNavigation
              icon={<IconArrowBackUp stroke={1.5} size={28} color="#e7363a" />}
              bgColor={"bg-red-100"}
            />
          </li>
        </ul>
      </section>
    </div>
  );
}
