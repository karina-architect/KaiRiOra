export default function WorldGraphic() {
  const points = [[155,180],[210,150],[290,185],[365,150],[445,180],[535,145],[605,190],[260,250],[450,250]];
  return (
    <div className="relative min-h-[360px] overflow-hidden rounded-[2rem] bg-gradient-to-br from-skysoft via-white to-blue/10">
      <div className="absolute inset-0 opacity-80" style={{backgroundImage:"radial-gradient(circle at 25% 45%, rgba(11,99,246,.35), transparent 18%), radial-gradient(circle at 52% 42%, rgba(245,166,35,.25), transparent 12%), radial-gradient(circle at 70% 35%, rgba(11,99,246,.18), transparent 18%)"}} />
      <svg viewBox="0 0 700 390" className="absolute inset-0 h-full w-full">
        <path d="M95 145 C190 70,320 70,420 130 C530 190,610 140,665 190" fill="none" stroke="#0B63F6" strokeOpacity=".25" strokeWidth="2"/>
        <path d="M130 260 C250 160,320 220,430 150 C510 100,590 150,650 100" fill="none" stroke="#0B63F6" strokeOpacity=".22" strokeWidth="2"/>
        {points.map(([x,y],i)=><circle key={i} cx={x} cy={y} r="5" fill={i%3===0?"#F5A623":"#0B63F6"} />)}
        <path d="M190 230 L235 185 L280 205 L310 275 L250 305 L200 280 Z" fill="#0B63F6" fillOpacity=".78"/>
        <path d="M270 250 L310 210 L348 230 L338 285 L292 300 Z" fill="#F5A623" fillOpacity=".78"/>
        <text x="200" y="336" fill="#0b1430" fontWeight="800">Spain</text>
        <text x="300" y="330" fill="#0b1430" fontWeight="800">Portugal</text>
      </svg>
    </div>
  );
}
