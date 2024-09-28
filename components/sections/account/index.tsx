import Body from "./body";
import Message from "./message";
import SectionTitle from "@/components/ui/sectionTitle";

export default function Account() {
  return (
    <div>
      <SectionTitle subTitle="ACCOUNT" mainTitle="마음 전하실 곳" />
      <Message />
      <Body />
    </div>
  );
}
