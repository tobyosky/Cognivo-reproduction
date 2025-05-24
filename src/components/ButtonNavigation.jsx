export default function ButtonNavigation({ icon, bgColor }) {
  return (
    <button
      className={`${bgColor} rounded-full flex items-center justify-center p-2 w-fit transform transition-all duration-300 hover:scale-110 cursor-pointer`}
    >
      {icon}
    </button>
  );
}
