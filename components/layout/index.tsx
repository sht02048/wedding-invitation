import { ReactNode } from "react"

type Props = {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className="flex justify-center items-center">
      <div className="sm:w-1/4 w-screen h-screen flex flex-col gap-32 text-center text-[#585858">
        {children}
      </div>
    </div>
  )
}