import { Container } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from "../assets/img/headerImg"
import { useEffect, useState } from "react"

export const Banner = () => {

    const toRotate = ["Backend Developer", "Team Leader", "AWS Solutions Architect"]
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const period = 2000;
    const [delta, setDelta] = useState(300 - Math.random() * 100);

    useEffect(() => {
        let ticker = setInterval(() => {
            tick()

        }, delta)
        return () => {clearInterval(ticker)}
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText);
        
    }
    
    return(
        <section className="banner" id="home"> 
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                    <span className="tagline">Welcome to my Portfolio</span>
                    <h1>{`Hi i'm Quentin`}<span className="wrap">Web Developer</span></h1>
                    <p>Hello this is quentin i'm quentin and I like to code</p>
                    <button onClick={() => console.log("clicked1!")}>Let's Connect <ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                    <img src={headerImg} alt="Header img"/>
                    </Col>
                </Row>
            </Container>

        </section>
    )
}