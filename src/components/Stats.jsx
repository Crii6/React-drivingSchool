import { stats } from "../constants";
import { useState, useEffect, useRef } from "react";

function Stats() {
  const [currentStats, setCurrentStats] = useState(stats.map(stat => ({ ...stat, currentNumber: 0, step: stat.value / 32 }))); 

  const statsContainerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const interval = setInterval(() => {
              setCurrentStats(prevStats =>
                prevStats.map(stat => {
                  if (stat.currentNumber < stat.value) {
                    return { ...stat, currentNumber: Math.min(stat.currentNumber + stat.step, stat.value) };
                  }
                  return stat;
                })
              );
            }, 100);
            
            observer.disconnect();
          }
        });
      },
      { root: null, rootMargin: "0px", threshold: 0.1 } 
    );

    if (statsContainerRef.current) {
      observer.observe(statsContainerRef.current);
    }

    return () => {
      if (statsContainerRef.current) {
        observer.unobserve(statsContainerRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-gray-300/25 py-20 backStats relative" ref={statsContainerRef}>
      <div className="backStatsOverlay"></div>
      <div className="w-[80%] m-auto sm:flex sm:justify-around max-w-7xl m-auto relative z-[10]">
        {currentStats.map(stat => {
          const { title, Icon, currentNumber } = stat;

          return (
            <div key={stat.id} className="flex items-center justify-between sm:flex-col">
              <div className="">
                <Icon className="text-4xl sm:text-5xl" />
              </div>
              <div className="m-6">
                <h4 className="text-3xl font-bold text-primary border-b-2 border-black sm:pb-3">
                  {Math.floor(currentNumber)}+
                </h4>
              </div>
              <div className="text-end xxs:w-[30%] sm:text-center sm:w-full">
                <p className="uppercase font-semibold">{title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Stats;


