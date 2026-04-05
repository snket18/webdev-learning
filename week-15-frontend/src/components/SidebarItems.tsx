import type { ReactElement } from "react"





export function SidebarItems({ text, startIcon }: {
    text: string,
    startIcon: ReactElement
}) {
    return <div className="flex text-gray-700 py-2 items-center cursor-pointer hover:bg-slate-200">
        <div className="pr-4">
            {startIcon}
        </div>
        <div className="pr-2">{text}</div>

    </div>

}