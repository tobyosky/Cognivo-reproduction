import { IconBell } from "@tabler/icons-react";
import ButtonNavigation from "./ButtonNavigation";
import Searchbar from "./Searcbar";
import UserCard from "./UserCard";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center gap-5">
      {/* Searchbar */}
      <section className="grow">
        <Searchbar />
      </section>

      {/* button notifiche e card utente*/}
      <section className="flex gap-5">
        <ButtonNavigation
          icon={<IconBell stroke={1.5} size={28} color="black" />}
          bgColor={"bg-white"}
        />

        <UserCard
          user={{
            name: "Zen Nakado",
            email: "zen@email.com",
            imgProfile: null,
          }}
        />
      </section>
    </nav>
  );
}
