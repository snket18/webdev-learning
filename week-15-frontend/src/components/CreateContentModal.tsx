import { useRef, useState } from "react";
import { CrossIcon } from "../icons/CrossIcon";
import { Button } from "./Button";
import { Input } from "./Input";
import { BACKEND_URL } from "../config";
import axios from "axios";

const ContentType = {
    Youtube: "Youtube",
    Twitter: "Twitter"
}

export function CreateContentModal({ open, onclose }: { open: boolean; onclose: () => void }) {
    const titleRef = useRef<HTMLInputElement>(null);
    const linkRef = useRef<HTMLInputElement>(null);
    const [type, setType] = useState(ContentType.Youtube);

    async function addContent() {
        const title = titleRef.current?.value;
        const link = linkRef.current?.value;

        if (title && link) {
            await axios.post(`${BACKEND_URL}/content`, {
                link,
                title,
                type
            }, {
                headers: {
                    "Authorization": localStorage.getItem("token")
                }
            });
            onclose();
        } else {
            alert("Please fill in all fields");
        }
    }

    return open ? (
        <div className="w-screen h-screen bg-slate-500 fixed top-0 left-0 opacity-60 flex justify-center items-center">
            <div className="flex flex-col justify-center">
                <span className="bg-white opacity-100 p-4 rounded">
                    <div className="flex justify-end">
                        <CrossIcon onClick={onclose} />
                    </div>
                    <div className="py-2">
                        <Input ref={titleRef} placeholder="Title" />
                        <Input ref={linkRef} placeholder="Link" />
                    </div>
                    <div className="pb-2">
                        <h1 className="pb-2">Type</h1>
                        <div className="flex gap-1 p-1">
                            <Button text="Youtube" variants={type === ContentType.Youtube ? "primary" : "secondary"} onClick={() => {
                                setType(ContentType.Youtube)
                            }} />
                            <Button text="Twitter" variants={type === ContentType.Twitter ? "primary" : "secondary"} onClick={() => {
                                setType(ContentType.Twitter)
                            }} />
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <Button onClick={addContent} variants="primary" text="Submit" />
                    </div>
                </span>
            </div>
        </div>
    ) : null;
}
