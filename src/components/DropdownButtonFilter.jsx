import { IconChevronDown } from "@tabler/icons-react";

export default function DropdownButtonFilter({ text }) {
  return (
    <button className="bg-white p-2 border-1 border-gray-200 rounded-full w-fit flex gap-2 items-center justify-center cursor-pointer">
      <p className="text-sm">{text}</p>
      <IconChevronDown stroke={1.5} size={25} />
    </button>
  );
}
