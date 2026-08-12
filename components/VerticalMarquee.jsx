import "../app/globals.css";
export default function VerticalMarquee({ notices }) {
    return (
        <div className="relative h-[300px] overflow-hidden">
            <div className="animate-marquee-top-down absolute w-full">
                {[...notices, ...notices].map((notice, index) => (
                    <div
                        key={index}
                        className="border-b py-4 text-center"
                    >
                        {notice}
                    </div>
                ))}
            </div>
        </div>
    );
}