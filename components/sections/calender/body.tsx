export default function Body() {
  const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
  const daysInMonth = 31;
  const dates = Array.from({ length: daysInMonth}, (_, index) => index + 1);

  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-7 gap-2">
        {daysOfWeek.map((day, index) => (
          <div key={index} className="text-center font-semibold">
            {day}
          </div>
        ))}
        {dates.map((date, index) => (
          <div
            key={index}
            className={`w-10 h-10 flex items-center justify-center rounded ${
              date === 14
                ? 'bg-yellow-500 font-bold border-yellow-700'
                : ''
            }`}
          >
            {date}
          </div>
        ))}
      </div>
    </div>
  );
}