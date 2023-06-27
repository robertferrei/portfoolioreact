import{motion} from "framer-motion"
import { Container } from "./style";
import  Questions from "../../assets/Questions.png"
function Motion() {
  return <>
        <Container>
         <motion.img src={ Questions} alt=""
          initial={{ y: 0 }}
          animate={{
            y: [0, 20, 0], // Define os valores de y para a animação
          }}
          transition={{
            repeat: Infinity,
            duration: 8,
            ease: 'linear',
          }}
          style={{
            width: "100%", height: "auto"
           
          }} />
        </Container>
 
  </>
}
export default Motion;
