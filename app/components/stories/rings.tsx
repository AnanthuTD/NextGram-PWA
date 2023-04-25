"use client";
interface RingsProps{
    avatar:string;
}
function Rings({avatar}: RingsProps) {
    return (
        <div className="text-white">
            <div style={{ position: "relative", width: "70px" }}>
                <svg viewBox="0 0 140 140">
                    <defs>
                        <linearGradient
                            id="border-gradient"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="0%"
                        >
                            <stop
                                offset="0%"
                                style={{ stopColor: "#F58529" }}
                            />
                            <stop
                                offset="50%"
                                style={{ stopColor: "#DD2A7B" }}
                            />
                            <stop
                                offset="100%"
                                style={{ stopColor: "#833AB4" }}
                            />
                        </linearGradient>
                        <mask id="circle-mask">
                            <circle cx="70" cy="70" r="58" fill="#fff" />
                        </mask>
                    </defs>
                    <circle
                        cx="70"
                        cy="70"
                        r="65"
                        stroke="url(#border-gradient)"
                        strokeWidth="5"
                        fill="none"
                    />
                    <image
                        href={avatar}
                        width="150"
                        mask="url(#circle-mask)"
                    />
                </svg>
            </div>
        </div>
    );
}
Rings.defaultProps = {
    avatar:"/images/pro-pic.jpg",
  };
export default Rings;