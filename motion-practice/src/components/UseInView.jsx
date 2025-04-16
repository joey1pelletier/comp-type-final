import { motion, useInView, AnimatePresence} from "motion/react"
import { useRef, useEffect } from 'react'
import '../App.css'

function UseInView() {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        amount: "all",
    });

    useEffect(() => {
        console.log(`the element ${isInView ? "is" : "is NOT"} in view`)
    }, [isInView]);


    return (
        <>
        <div ref={ref}>
            <motion.div
                animate={{
                    x: isInView ? "10%" : "0%",
                }}
                transition={{
                    duration: 2, ease: 'easeOut'
                }}
                style={{
                    fontSize: "1em",
                }}
            >
                <p>I am a cool text 1</p>
            </motion.div>
            <motion.div
                animate={{
                    x: isInView ? "25%" : "0%",
                }}
                transition={{
                    duration: 3, ease: 'easeOut', delay: 0.5
                }}
                style={{
                    fontSize: "2em",
                }}
            >
                <p>I am a cool text 2</p>
            </motion.div>
            <motion.div
                animate={{
                    x: isInView ? "50%" : "0%",
                }}
                style={{
                    fontSize: "1em",
                }}
                transition={{
                    duration: 4, ease: 'easeOut', delay: 0.5
                }}
            >
                <p>I am a cool text 3</p>
            </motion.div>
        </div>

        
        
        </>
    )
}

export default UseInView