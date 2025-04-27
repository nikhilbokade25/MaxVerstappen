// import './Outro.css';

// import maxTrainingImg from "../Assets/maxTraining.jpg";
// import maxPreparationImg from "../Assets/maxPreparation.jpg";
// import maxRacingImg from "../Assets/maxRacing.jpg";
// import maxOffSeasonImg from "../Assets/maxOffSeason.jpg";

// export default function Outro() {
//     return (
//         <div className="outro_container">
//             <div className='outro_content'>
//                 <div className="section">
//                     <div className='section_image'>
//                         <img src={maxTrainingImg} alt='max verstappen training'/>
//                     </div>

//                     <div className='section_text'>
//                         <h2>PRACTICE</h2>
//                         <p>
//                         Max Verstappen's training is focused on maintaining sharp reflexes and perfecting his driving technique.
//                         </p>
                        
//                     </div>
//                 </div>

//                 <div className="section">
//                     <div className='section_image'>
//                         <img src={maxPreparationImg} alt='max verstappen playing simulator'/>
//                     </div>

//                     <div className='section_text'>
//                         <h2>STRATEGY</h2>
//                         <p>
//                         Preparation for Max involves meticulous planning and analysis of every race.
//                         </p>
//                     </div>
//                 </div>

//                 <div className="section">
//                     <div className='section_image'>
//                         <img src={maxRacingImg} alt='max verstappen racing'/>
//                     </div>

//                     <div className='section_text'>
//                         <h2>COMPETITION</h2>
//                         <p>Racing for Max Verstappen is about embracing the challenge and leaving it all on the track.</p>
//                     </div>
//                 </div>

//                 <div className="section">
//                     <div className='section_image'>
//                         <img src={maxOffSeasonImg} alt='max verstappen playing'/>
//                     </div>

//                     <div className='section_text'>
//                         <h2>RECOVERY</h2>
//                         <p>
//                         The off-season is a time for Max to recharge and evaluate his performance. 
//                         </p>
//                     </div>
//                 </div>
//             </div>
            
//         </div>
//     );
// }


import React, { useEffect } from 'react';
import './Outro.css';

import maxTrainingImg from "../Assets/maxTraining.jpg";
import maxPreparationImg from "../Assets/maxPreparation.jpg";
import maxRacingImg from "../Assets/maxRacing.jpg";
import maxOffSeasonImg from "../Assets/maxOffSeason.jpg";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Outro() {
    useEffect(() => {
        gsap.utils.toArray('.section').forEach((section, index) => {
            gsap.from(section, {
                opacity: 1,
                duration: 1,
                delay: index * 0.3,
                scrollTrigger: {
                    trigger: section,
                    start: 'top 40%', 
                    end: 'bottom top',
                    scrub: 1, 
                }
            });
        });
    }, []);

    return (
        <div className="outro_container">
            <div className='outro_content'>
                <div className="section">
                    <div className='section_image'>
                        <img src={maxTrainingImg} alt='max verstappen training'/>
                    </div>

                    <div className='section_text'>
                        <h2>PRACTICE</h2>
                        <p>
                            Max Verstappen's training is focused on maintaining sharp reflexes and perfecting his driving technique.
                        </p>
                    </div>
                </div>

                <div className="section">
                    <div className='section_image'>
                        <img src={maxPreparationImg} alt='max verstappen playing simulator'/>
                    </div>

                    <div className='section_text'>
                        <h2>STRATEGY</h2>
                        <p>
                            Preparation for Max involves meticulous planning and analysis of every race.
                        </p>
                    </div>
                </div>

                <div className="section">
                    <div className='section_image'>
                        <img src={maxRacingImg} alt='max verstappen racing'/>
                    </div>

                    <div className='section_text'>
                        <h2>COMPETITION</h2>
                        <p>Racing for Max Verstappen is about embracing the challenge and leaving it all on the track.</p>
                    </div>
                </div>

                <div className="section">
                    <div className='section_image'>
                        <img src={maxOffSeasonImg} alt='max verstappen playing'/>
                    </div>

                    <div className='section_text'>
                        <h2>RECOVERY</h2>
                        <p>
                            The off-season is a time for Max to recharge and evaluate his performance. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
