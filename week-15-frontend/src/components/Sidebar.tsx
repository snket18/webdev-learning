import { Youtube } from "../icons/youtubeIcon";
import { Twitter } from "../icons/twitterIcon";
import { SidebarItems } from "./SidebarItems";
import { Logo } from "../icons/logo";

export function Sidebar() {

    return <div className="bg-white h-screen w-72 border-r fixed left-0 top-0 pl-6">
        <div className="flex text-2xl pl-4">
            <div className="text-purple-600 pr-2 ">
                <Logo />
            </div>
            Brainly
        </div>
        <div className="pl-6 pt-4 ">
            <SidebarItems text={"twitter"} startIcon={<Twitter />} />
            <SidebarItems text={"youtube"} startIcon={<Youtube />} />
        </div>

    </div>
}