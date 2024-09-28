import Body from "./body";
import Header from "./header";

export default function Calender() {
  return (
    <div className="flex flex-col text-center text-white gap-6">
      <Header />
      <Body />
    </div>
  )
}