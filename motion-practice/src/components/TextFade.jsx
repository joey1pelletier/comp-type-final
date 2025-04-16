import '../App.css'
import { motion, useInView, useMotionValueEvent, useScroll, useTransform} from "motion/react"
import { useRef, useEffect } from 'react'

function TextFade() {
    const line1 = "Lorem ipsum yo mama";
    const line2 = "elon musk + pronatalism = uncomprehendable demise to our society";
    const sentence = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.5,
                staggerChildren: 0.08,
            },
        },
    }

    const fasterSentence = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.2,
                staggerChildren: 0.02,
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
    
    return (
        <>
        <motion.p
            style={{
                fontSize: "3em",
                fontFamily: "Open Sans",
            }}
            variants={sentence}
            initial="hidden"
            animate="visible"
        >
            {line1.split("").map((char, index) => {
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
            <br />
            {line2.split("").map((char, index) => {
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
           

        </motion.p>
        <motion.p
            style={{
                fontSize: "3em",
                fontFamily: "Open Sans",
            }}
            variants={fasterSentence}
            initial="hidden"
            animate="visible"
        >
            {line1.split("").map((char, index) => {
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
            <br />
            {line2.split("").map((char, index) => {
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
           

        </motion.p>
        </>
    )
}

export default TextFade