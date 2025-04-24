import './Hero.css';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import heroVideo from "../Assets/heroVideo.mp4";

export default function Hero() {
    const topRef = useRef(null);
    const bottomRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();

        tl.to(topRef.current, {
            height: 0,
            duration: 1.2,
            ease: "power2.inOut"
        })
        .to(bottomRef.current, {
            height: 0,
            duration: 1.2,
            ease: "power2.inOut"
        }, "-=1.2")
        .fromTo(contentRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
            "-=0.5"
        );
    }, []);

    return (
        <div className="hero_container">
            <div className="reveal_div top_div" ref={topRef}></div>
            <div className="reveal_div bottom_div" ref={bottomRef}></div>

            <div className='hero_video'>
                <video src={heroVideo} autoPlay muted loop />
                <div className="video_overlay_text" ref={contentRef}>
                    <h1>RACING REDEFINED</h1>
                </div>
            </div>
        </div>
    );
}
