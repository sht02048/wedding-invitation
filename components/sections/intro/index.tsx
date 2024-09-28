import Message from "./message";
import SectionTitle from "@/components/ui/sectionTitle";
import Name from "./name";

export default function Intro() {
  return (
    <div>
      <SectionTitle subTitle="INVITATION" mainTitle="소중한 분들을 초대합니다" />
      <Message />
      <Name />
    </div>
  );
}
