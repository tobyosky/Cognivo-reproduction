export default function ButtonNavigation({ icon, bgColor, text }) {
  return (
    <button
      className={`${bgColor} rounded-full flex items-center justify-center p-2 w-fit transform transition-all duration-300 hover:scale-105 cursor-pointer gap-2`}
    >
      {icon}
      {text && <p className="text-sm font-semibold">{text}</p>}
    </button>
  );
}
