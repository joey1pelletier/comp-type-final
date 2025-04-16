import { motion, useInView, useMotionValueEvent, useScroll, useTransform} from "motion/react"
import { useRef, useEffect } from 'react'
import '../App.css'

function UseScrollBasic() {
    const { scrollYProgress } = useScroll();

    const background = useTransform(
        scrollYProgress,
        [0,1],
        ["#000000", "blue"]
    )

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        console.log(latest);
    })
    return (
        <>
            <motion.div
                style={{
                    scaleX: scrollYProgress,
                    background,
                    transformOrigin: "left",
                    top: 0,
                    left: 0,
                    
                    y: "-50%",
                    height: "1em",
                    position: "fixed",
                    width: "100vw"
                }}
            >
            </motion.div>

        </>
    )
}

export default UseScrollBasic