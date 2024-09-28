import { cn } from "@/lib/utils";

export default function Body() {
  const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
  const daysInMonth = 31;
  const dates = Array.from({ length: daysInMonth}, (_, index) => index + 1);

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex flex-col gap-2">
        <span className="text-lg font-medium">2024년 12월 14일</span>
        <span>토요일 낮 12시</span>
      </div>
      <div className="grid grid-cols-7 gap-2">
        {daysOfWeek.map((day, index) => {
          const isSunday = index % 7 === 0;

          return (
            <div key={index} className={cn("text-center font-semibold", isSunday && "text-red-300")}>
              {day}
            </div>
          )
        })}
        {dates.map((date, index) => {
          const isSunday = index % 7 === 0;
          const isWeddingDay = date === 14;

          return (
            <div
              key={index}
              className={cn(`w-10 h-10 flex items-center justify-center rounded`, isWeddingDay && "bg-red-300 font-bold rounded-full text-white", isSunday && "text-red-300")}
            >
              {date}
            </div>
          )
        })}
      </div>
    </div>
  );
}