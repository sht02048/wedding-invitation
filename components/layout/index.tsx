import { ReactNode } from "react"

type Props = {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className="bg-slate-800 w-screen h-screen flex justify-center items-center">
      <div className="w-1/4">
        {children}
      </div>
    </div>
  )
}