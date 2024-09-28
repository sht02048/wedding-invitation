import Message from "./message";
import SectionTitle from "@/components/ui/sectionTitle";

export default function Intro() {
  return (
    <div className="">
      <SectionTitle subTitle="INVITATION" mainTitle="소중한 분들을 초대합니다" />
      <Message />
    </div>
  );
}
