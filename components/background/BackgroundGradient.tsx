export default function BackgroundGradient() {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden">

            <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-purple-600/30 rounded-full blur-[140px] animate-[pulse_8s_ease-in-out_infinite]" />

            <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-blue-600/30 rounded-full blur-[140px] animate-[pulse_8s_ease-in-out_infinite]" />

            <div className="absolute top-[40%] left-[50%] w-[500px] h-[500px] bg-pink-600/20 rounded-full blur-[140px] animate-[pulse_8s_ease-in-out_infinite]" />

        </div>
    );
}