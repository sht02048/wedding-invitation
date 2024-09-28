import { cn } from "@/lib/utils";

export default function Names() {
  return (
    <div className="flex justify-center mt-4">
      <table>
        <tbody>
          <tr>
            <td className="px-2 py-2">
              <Name name="채규명" />
              ･
              <Name name="문경숙" />
              의
            </td>
            <td className="pr-4 py-2">
              아들
            </td>
            <td className="px-2 py-2">
              <Name name="채민석" />
            </td>
          </tr>
          <tr>
          <td className="px-2 py-2">
              <Name name="최병옥" />
              ･
              <Name name="이영순" />
              의
            </td>
            <td className="pr-4 py-2">
              딸
            </td>
            <td className="px-2 py-2">
              <Name name="최다은" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

type Props = {
  name: string;
  isHost?: boolean;
  className?: string;
}

function Name({ name, isHost = false, className }: Props) {
  return (
    <span className={cn("font-bold tracking-widest	", isHost && "ml-2", className)}>{name}</span>
  )
}

