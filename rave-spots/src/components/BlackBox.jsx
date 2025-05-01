import '../App.css'
import { motion, useInView } from "motion/react"
import { useRef, useEffect } from 'react'

function BlackBox() {
    const box_title = "THE BLACK BOX";
    const box_text = "The Black Box in Denver is an underground music venue known for immersive sound experiences, cutting-edge bass music, and intimate vibes, attracting experimental electronic artists and passionate, dance-driven crowds.";
    const sentence = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.05,
            },
        },
    }

    const sentence_2 = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.007,
            },
        },
    }

    const letter = {
        hidden: {
            visibility: "hidden"},
        visible: {
            visibility: "visible",
        },
    }

    const ref = useRef(null);
    const isInView = useInView(ref, {
        amount: "0.1",
    });

    useEffect(() => {
        console.log(`the element ${isInView ? "is" : "is NOT"} in view`)
    }, [isInView]);

    return (
        <>
        <motion.div
            className="black-box"
            ref={ref}
        >
            <motion.div
                className="black-box-header"
                variants={sentence}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"} 
            >
                <h2>
                    {box_title.split("").map((char, index) => {
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
                className="black-box-text"   
                variants={sentence_2}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"} 
            >
                <p>
                {box_text.split("").map((char, index) => {
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
                </p>
            </motion.div>
            

        </motion.div>
        </>
    )
}

export default BlackBox;