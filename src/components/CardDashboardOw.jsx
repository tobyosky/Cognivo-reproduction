import clsx from "clsx";

export default function CardDashboardOw({
  icon,
  title,
  children,
  footer,
  filterButton,
  bgImg,
  textColor,
  centerTitle,
  cardStyle,
}) {
  return (
    <div
      className={clsx(
        `rounded-2xl p-5 flex flex-col gap-8 h-full w-full ${cardStyle}`,
        bgImg ? "bg-cover bg-center" : "bg-white"
      )}
      style={bgImg ? { backgroundImage: `url(${bgImg})` } : {}} // in caso di img di background
    >
      <div
        className={`flex items-center ${filterButton && "justify-between"} ${
          centerTitle && "justify-center"
        }`}
      >
        <div className="flex gap-3 items-center">
          {icon && <div className="p-1 bg-gray-50 rounded-full">{icon}</div>}
          <h3 className={`text-xl font-[500] ${textColor}`}>{title}</h3>
        </div>

        {filterButton && <div>{filterButton}</div>}
      </div>
      <div className="flex flex-col gap-4 grow">
        {children}

        {footer && <div>{footer}</div>}
      </div>
    </div>
  );
}
