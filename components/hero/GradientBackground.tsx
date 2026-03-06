export default function GradientBackground() {
    return (
        <div className="absolute inset-0 -z-10 overflow-hidden">

            <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[120px] animate-pulse" />

            <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[120px] animate-pulse" />

        </div>
    );
}