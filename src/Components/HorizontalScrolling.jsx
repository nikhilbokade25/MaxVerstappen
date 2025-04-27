// import './HorizontalScrolling.css';
// import { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// import redbullCarImg from "../Assets/redbullCar1.jpg";

// gsap.registerPlugin(ScrollTrigger);

// export default function HorizontalScrolling(){
//     const containerRef = useRef(null);
//     const textRef = useRef(null);

//     useEffect(() => {
//         const ctx = gsap.context(() => {
//             gsap.to(textRef.current, {
//                 xPercent: -100, // move the text fully to the left
//                 ease: "none",
//                 scrollTrigger: {
//                     trigger: containerRef.current,
//                     start: "top top",
//                     end: "+=2000", // adjust how much scrolling it takes
//                     scrub: true,
//                     pin: true, // pin the image
//                 },
//             });
//         }, containerRef);

//         return () => ctx.revert();
//     }, []);


//     return (
//         <div className="horizontal_container" ref={containerRef}>
//             <img src={redbullCarImg} alt="redbull car" />
//             <div className="horizontal_text" ref={textRef}>
//                 SPEED IS NOTHING WITHOUT CONTROL
//             </div>
//         </div>
//     );
// }


import './HorizontalScrolling.css';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import redbullCarImg from "../Assets/redbullCar1.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScrolling() {
    const containerRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const textWidth = textRef.current.offsetWidth;
            const viewportWidth = window.innerWidth;
            const scrollDistance = textWidth + viewportWidth;

            gsap.to(textRef.current, {
                x: -textWidth, // move based on full text width
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: `+=${scrollDistance}`, // dynamic end
                    scrub: true,
                    pin: true,
                },
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="horizontal_container" ref={containerRef}>
            <img src={redbullCarImg} alt="redbull car" />
            <div className="horizontal_text" ref={textRef}>
                SPEED IS NOTHING WITHOUT CONTROL
            </div>
        </div>
    );
}
