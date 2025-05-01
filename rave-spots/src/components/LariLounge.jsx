import '../App.css'
import { motion, useInView} from "motion/react"
import { useRef, useEffect } from 'react'

function LariLounge() {
    const lari_title = "larimer lounge";
    const sentence = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                delay: 1,
                staggerChildren: 0.08,
            },
        },
    }

    const letter = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
        },
    }

    const ref = useRef(null);
    const isInView = useInView(ref, {
        amount: "2",
    });

    useEffect(() => {
        console.log(`the element ${isInView ? "is" : "is NOT"} in view`)
    }, [isInView]);
    return (
        <>
        <div className="lari-lounge" ref={ref}>
            <motion.div
                className="lari-lounge-header"
                variants={sentence}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"} 
            >
                <h2>
                {lari_title.split("").map((char, index) => {
                return (
                    <motion.span
                        key={char + "-" + index}
                        variants={letter}
                    >
                        {char}
                    </motion.span>
                )
            })

            }
                </h2>
                
            </motion.div>

            <motion.div
                className="lari-lounge-text"
                initial={{
                    clipPath: 'inset(0 100% 0 0)',
                }}
                animate={{ 
                    clipPath: isInView ? 'inset(0 0% 0 0)' : 'inset(0 100% 0 0)'
                }}
                transition={{
                    duration: 1.5, ease: 'easeOut'
                }}
            >
                <p>On weekends, Larimer Lounge's house EDM scene blends underground energy with chic vibes. Local and touring DJs spin deep, chill, and tech house beats in a raw, indie-style venue that draws Denver’s EDM lovers for late-night movement and connection.</p>
            </motion.div>
        </div>
        </>
    )
}

export default LariLounge;