// import './About.css';

// import maxProfileImg from "../Assets/maxGeneralimg.jpg";
// export default function About(){
//     return(
//         <div className='about_container'>
//             <div className='about_info'>
//                 <div className='info_container'>
//                     <div className='info_heading'>
//                         <h2>
//                         Talent. Determination. Precision. Passion. These are just some of the qualities that have made Max, hailing from Hasselt, Belgium, one of the most dominant and exciting forces in Formula 1 today, constantly pushing the limits of what’s possible on the track.
//                         </h2>
//                     </div>
//                     <div className='info_body'>
//                         <div className='info_image'>
//                             <img src={maxProfileImg} alt='max verstappen profile'/>
//                         </div>

//                         <div className='info_description'>
//                             <p>
//                             From a young age, Max Verstappen showed an exceptional passion for racing, climbing into a kart at just a few years old and never looking back. His journey took him through the karting world, quickly advancing through the ranks, and in 2015, he made a stunning debut in Formula 1 with Scuderia Toro Rosso. In 2016, he achieved what seemed impossible, winning his first Grand Prix with Red Bull Racing on his debut race for the team. Since then, Max has captured the hearts of fans worldwide, not just with his relentless drive but also with victories on iconic circuits like Spa, Monaco, and Silverstone, proving himself as one of the sport’s brightest stars.
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className='about_stats'>

//             </div>
//         </div>
//     );
// }

import './About.css';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import maxProfileImg from "../Assets/maxGeneralimg.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function About(){
    const aboutRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.info_heading h2', {
                y: -50,
                opacity: 0,
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: '.about_info',
                    start: 'top 70%',
                    end: 'bottom 60%',
                    scrub: true,
                },
            });

            gsap.from('.info_image img', {
                x: -100,
                opacity: 0,
                duration: 1,
                delay: 0.3,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: '.about_info',
                    start: 'top 70%',
                    end: 'bottom 60%',
                    scrub: true,
                },
            });

            gsap.from('.info_description p', {
                x: 100,
                opacity: 0,
                duration: 1,
                delay: 0.6,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: '.about_info',
                    start: 'top 70%',
                    end: 'bottom 60%',
                    scrub: true,
                },
            });
        }, aboutRef);

        return () => ctx.revert(); // clean up on unmount
    }, []);

    return(
        <div className='about_container' ref={aboutRef}>
            <div className='about_info'>
                <div className='info_container'>
                    <div className='info_heading'>
                        <h2>
                        Talent. Determination. Precision. Passion. These are just some of the qualities that have made Max, hailing from Hasselt, Belgium, one of the most dominant and exciting forces in Formula 1 today, constantly pushing the limits of what’s possible on the track.
                        </h2>
                    </div>
                    <div className='info_body'>
                        <div className='info_image'>
                            <img src={maxProfileImg} alt='max verstappen profile'/>
                        </div>

                        <div className='info_description'>
                            <p>
                            From a young age, Max Verstappen showed an exceptional passion for racing, climbing into a kart at just a few years old and never looking back. His journey took him through the karting world, quickly advancing through the ranks, and in 2015, he made a stunning debut in Formula 1 with Scuderia Toro Rosso. In 2016, he achieved what seemed impossible, winning his first Grand Prix with Red Bull Racing on his debut race for the team. Since then, Max has captured the hearts of fans worldwide, not just with his relentless drive but also with victories on iconic circuits like Spa, Monaco, and Silverstone, proving himself as one of the sport’s brightest stars.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='about_stats'></div>
        </div>
    );
}
