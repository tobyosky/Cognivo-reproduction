export default function ButtonNavigation({ icon, bgColor }) {
  return (
    <div
      className={`${bgColor} rounded-full flex items-center justify-center p-2 w-fit`}
    >
      <button className="cursor-pointer">{icon}</button>
    </div>
  );
}
