import { type ReactElement } from "react";

interface ButtonProps {
    variants: "primary" | "secondary";
    text: string;
    startIcon?: ReactElement;
    onClick?: () => void;
    fullWidth?: boolean;
    loading?: boolean;
}

const variantClasses = {
    "primary": "bg-purple-600 text-white",
    "secondary": "bg-purple-200 text-purple-600"
};

const defaultStyles = "px-4 py-2 rounded-md font-light flex items-center";

export function Button({ variants, text, startIcon, onClick, fullWidth, loading }: ButtonProps) {
    return (
        <button onClick={onClick} className={variantClasses[variants] + " " + defaultStyles + ` ${fullWidth ? "w-full justify-center" : ""} ${loading ? "opacity-50 cursor-not-allowed" : ""}`} disabled={loading}>
            <div className="pr-2">
                {startIcon}
            </div>
            {text}
        </button>
    );
}