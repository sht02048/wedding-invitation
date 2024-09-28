import Paragraph from "./paragraph";

export default function Message() {
  return (
    <div className="flex flex-col gap-8 px-10">
        <p>2016년 7월, 서로가 보석처럼 찾아왔습니다.</p>
      <Paragraph>
        <p>다은이와 함께하며 내 것을 양보하고</p>
        <p>희생하는 사랑을,</p>
      </Paragraph>
      <Paragraph>
        <p>민석이와 함께하며 서로의 상처까지</p>
        <p>안아주는 사랑을 배웠습니다.</p>
      </Paragraph>
      <Paragraph>
        <p>이제 사랑이신 하니님 앞에 우리의 하나됨을</p>
        <p>약속드리려 합니다.</p>
      </Paragraph>
        <p>축복의 자리에 함께해 주시길 바랍니다.</p>
    </div>
  );
}


