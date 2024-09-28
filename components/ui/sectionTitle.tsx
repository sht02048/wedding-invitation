type Props = {
  subTitle: string;
  mainTitle: string;
}

export default function SectionTitle({ subTitle, mainTitle }: Props) {
  return (
    <div className="flex flex-col mb-12 gap-2 text-[#f79e9e]">
      <h2 className="text-xs font-extralight tracking-widest">{subTitle}</h2>
      <h1 className="text-xl font-bold">{mainTitle}</h1>
    </div>
  );
}
