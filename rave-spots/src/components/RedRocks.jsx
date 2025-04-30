import '../App.css'
import { motion, useInView } from "motion/react"
import { useRef, useEffect } from 'react'
function RedRocks() {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        amount: "0.3",
    });

    useEffect(() => {
        console.log(`the element ${isInView ? "is" : "is NOT"} in view`)
    }, [isInView]);
    return (
        <>
        <div className="red-rocks" ref={ref}>
        <motion.div
                className="red-rocks-heading"
                initial={{
                    x: "100%",
                }}
                animate={{
                    x: isInView ? "0%" : "100%",
                }}
                transition={{
                    duration: 0.2, ease: 'easeOut'
                }}
            >
                <h2>RED ROCKS</h2>
        </motion.div>
        <motion.div
            className="red-rocks-text"
             initial={{
                    x: "100%",
                }}
                animate={{
                    x: isInView ? "0%" : "-100%",
                }}
                transition={{
                    duration: 0.5, ease: 'easeOut'
                }}
        >
            <p>Red Rocks' EDM scene blends stunning natural acoustics with top-tier electronic acts from artists like deadmau5, Subtronics, and Zedd. The iconic open-air amphitheater hosts immersive light shows, pulsing basslines, and unforgettable energy, making it a premier destination for EDM and rave lovers worldwide.</p>
        </motion.div>

        </div>
        </>
    )
}

export default RedRocks;