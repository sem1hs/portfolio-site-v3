import { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

export default function Container({ children }: Props) {
    return (
        <div className="max-w-6xl mx-auto px-6 lg:px-7">
            {children}
        </div>
    );
}