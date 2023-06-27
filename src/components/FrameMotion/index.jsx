import{motion} from "framer-motion"

function FrameMotion(){
    return(
        <>
        <motion.img
        initial={{ y: 0 }}
           animate={{
             y: [0, 100, 0], // Define os valores de y para a animação
           }}
           transition={{
             repeat: Infinity,
             duration: 4,
             ease: 'linear',
           }}
           style={{
             width:600 ,
             height: 500,
           }}
        />
        </>

    )
}

export default FrameMotion