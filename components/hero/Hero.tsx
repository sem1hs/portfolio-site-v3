"use client";

import Container from "@/app/container";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import CodePreview from "./CodePreview";
import AvailableBadge from "./AvailableBadge";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative pt-28 md:pt-40 pb-20 md:pb-32 overflow-hidden"
        >
            <Container>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

                    <div className="max-w-2xl">

                        <div className="mb-4">
                            <AvailableBadge />
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
                            Hi, I'm Semih
                        </h1>

                        <div className="mt-4 text-xl md:text-2xl text-neutral-400">

                            <TypeAnimation
                                sequence={[
                                    "Backend Developer",
                                    2000,
                                    "Spring Boot Developer",
                                    2000,
                                    "Microservices Engineer",
                                    2000,
                                    "Full Stack Developer",
                                    2000,
                                ]}
                                wrapper="span"
                                repeat={Infinity}
                            />

                        </div>

                        <p className="mt-6 text-neutral-400 text-lg leading-relaxed">
                            I build scalable backend systems with Java, Spring Boot and modern
                            frontend technologies like React and TypeScript.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">

                            <Link
                                href="#projects"
                                className="px-6 py-3 bg-white text-black rounded-lg text-sm font-medium hover:opacity-90 transition"
                            >
                                View Projects
                            </Link>

                            <Link
                                href="#contact"
                                className="px-6 py-3 border border-white/20 rounded-lg text-sm hover:bg-white/10 transition"
                            >
                                Contact Me
                            </Link>

                        </div>

                    </div>

                    <div className="flex justify-center lg:justify-end w-full">
                        <div className="w-full max-w-[650px]">
                            <CodePreview />
                        </div>
                    </div>

                </div>

            </Container>
        </section>
    );
}