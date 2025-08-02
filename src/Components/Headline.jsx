import React from "react";

const stats = [
  { label: "total books", value: "15,254" },
  { label: "authors", value: "1,258" },
  { label: "books sold", value: "20,898" },
  { label: "happy customer", value: "97%" },
  { label: "total books", value: "15,254" },
  { label: "authors", value: "1,258" },
  { label: "books sold", value: "20,898" },
];

const StatItem = ({ value, label }) => (
  <div className="flex items-center whitespace-nowrap mx-6">
    <span className="font-semibold">{value}</span>&nbsp;
    <span className="text-lg">{label}</span>
    <span className="mx-4 text-orange-600 select-none">✹</span>
  </div>
);

const Headline = () => {
  return (
    <div className="overflow-hidden w-full bg-white">
      <div
        className="inline-flex"
        style={{
          display: "inline-flex",
          whiteSpace: "nowrap",
          willChange: "transform",
          animation: "marquee 20s linear infinite",
        }}
      >
        {stats.map((s, idx) => (
          <StatItem key={idx} value={s.value} label={s.label} />
        ))}
        {/* duplicate to ensure seamless loop */}
        {stats.map((s, idx) => (
          <StatItem key={`dup-${idx}`} value={s.value} label={s.label} />
        ))}
      </div>
      <style>
        {`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Headline;
