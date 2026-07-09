"use client";

import { FileText, FileArchive, FileType } from "lucide-react";

function getIcon(href) {
    if (href.endsWith(".zip")) return FileArchive;
    if (href.endsWith(".docx")) return FileType;
    return FileText; // pdf and fallback
}

export function DownloadsList({ downloads }) {
    async function handleDownload(e, href, label) {
        // If it's same-origin (starts with "/"), let the native download work
        if (href.startsWith("/")) return;

        // Cross-origin: force download via blob fetch
        e.preventDefault();
        try {
            const res = await fetch(href);
            const blob = await res.blob();
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = href.split("/").pop() || label;
            a.click();
            URL.revokeObjectURL(url);
        } catch {
            window.open(href, "_blank");
        }
    }

    return (
        <ul className="mt-4 space-y-3">
            {downloads.map((d) => {
                const Icon = getIcon(d.href);
                return (
                    <li key={d.label}>
                        <a
                            href={d.href}
                            download
                            onClick={(e) => handleDownload(e, d.href, d.label)}
                            className="flex items-center gap-2 text-sm text-secondary underline-offset-2 hover:underline"
                        >
                            <Icon className="h-4 w-4 shrink-0" />
                            {d.label}
                        </a>
                    </li>
                );
            })}
        </ul >
    );
}