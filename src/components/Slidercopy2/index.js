import { Wrapper1, Center2, Line3, Path4 } from './styled'

const Slidercopy2 = () => {
	return (
        <Wrapper1>
            <Center2>
                <Path4 rotateZ="2deg" toRight={0}>
                    <Line3 delay={0}>contact</Line3>
                    <Line3 delay={0.8}>contact </Line3>
                    <Line3 delay={1.6}>contact </Line3>
                    <Line3 delay={2.4}>contact </Line3>
                    <Line3 delay={3.2}>contact </Line3>
                    <Line3 delay={4}>contact </Line3>
                    <Line3 delay={4.8}>contact </Line3>
                    <Line3 delay={5.6}>contact </Line3>
                    <Line3 delay={6.4}>contact </Line3>
                    <Line3 delay={7.2}>contact </Line3> 
                </Path4>
            </Center2>
        </Wrapper1>
    )
}

export default Slidercopy2