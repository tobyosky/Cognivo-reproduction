import clsx from "clsx";

export default function CardDashboardOw({
  icon,
  title,
  children,
  footer,
  filterButton,
  bgImg,
  textColor,
}) {
  return (
    <div
      className={clsx(
        "rounded-2xl p-5 flex flex-col gap-8 h-full w-full",
        bgImg ? "bg-cover bg-center" : "bg-white"
      )}
      style={bgImg ? { backgroundImage: `url(${bgImg})` } : {}} // in caso di img di background
    >
      <div className="flex items-center justify-between">
        <div className="flex gap-5 items-center">
          {icon && <div>{icon}</div>}
          <h3 className={`text-2xl font-[500] ${textColor}`}>{title}</h3>
        </div>

        {filterButton && <div>{filterButton}</div>}
      </div>
      <div className="flex flex-col gap-4">
        {children}

        {footer && <div>{footer}</div>}
      </div>
    </div>
  );
}
