import React from "react";

type Props = {
    children: React.ReactNode;
    url: string; // New prop for the URL
}

const CustomLink = ({ children, url }: Props) => {
    const handleLinkClick = () => {
        window.open(url, "_blank"); // Opens the URL in a new tab/window
    };

    return (
        <a
            className="rounded-md bg-secondary-500 text-white px-10 py-2 hover:bg-blue-100 hover:text-black"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleLinkClick}
        >
            {children}
        </a>
    )
}

export default CustomLink;
