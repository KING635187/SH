import { Wrapper1, Center2, Line3, Path4 } from './styled'

const Slider = () => {
	return (
        <Wrapper1>
            <Center2>
                <Path4 rotateZ="2deg" toRight={0}>
                    <Line3 delay={0}>ABOUT ME</Line3>
                    <Line3 delay={0.8}>ABOUT ME</Line3>
                    <Line3 delay={1.6}>ABOUT ME</Line3>
                    <Line3 delay={2.4}>ABOUT ME</Line3>
                    <Line3 delay={3.2}>ABOUT ME</Line3>
                    <Line3 delay={4}>ABOUT ME</Line3>
                    <Line3 delay={4.8}>ABOUT ME</Line3>
                    <Line3 delay={5.6}>ABOUT ME</Line3>
                    <Line3 delay={6.4}>ABOUT ME</Line3>
                    <Line3 delay={7.2}>ABOUT ME</Line3> 
                </Path4>
            </Center2>
        </Wrapper1>
    )
}

export default Slider