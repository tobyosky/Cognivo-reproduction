import { IconChevronDown } from "@tabler/icons-react";
import UserImg from "../assets/UserProfileImg.png";

export default function UserCard({ user }) {
  return (
    <button className="bg-white rounded-4xl flex items-center p-1 gap-2 cursor-pointer">
      <div className="rounded-full w-[35px] h-[35px] overflow-hidden">
        <img
          src={user?.imgProfile || UserImg}
          alt="user-img"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col justify-center items-start">
        <h4 className="text-sm font-semibold">{user?.name || "No Name"}</h4>
        <h5 className="text-sm text-gray-400">{user?.email || "No Email"}</h5>
      </div>

      <div>
        <IconChevronDown stroke={1.5} size={28} />
      </div>
    </button>
  );
}
