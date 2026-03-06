import { ReactNode } from "react";

type Props = {
    name: string;
    icon: ReactNode;
};

export default function TechCard({ name, icon }: Props) {
    return (
        <div className="flex items-center gap-3 px-3 md:px-5 py-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md text-neutral-300 hover:bg-white/10 transition">
            <div className="text-xl">{icon}</div>

            <span className="text-xs md:text-sm">{name}</span>
        </div>
    );
}