import React from "react";
import { Card, CardTitle, CardImg, Container, CardBody, Row, Col} from 'reactstrap';

const About = () => {
   return (
<>
    <div className="themed-container">
    <Container className=" col-sm-4" fluid="sm">
    <h1 className="thish1">Rules:</h1>
    
    
    <p>The universe of the Game of Life is an infinite, two-dimensional orthogonal grid of square cells, each of which is in one of two possible states, live or dead, (or populated and unpopulated, respectively). Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:<br/>

        1. Any live cell with fewer than two live neighbours dies, as if by underpopulation.
        2. Any live cell with two or three live neighbours lives on to the next generation.
        3. Any live cell with more than three live neighbours dies, as if by overpopulation.
        4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.</p>
    
    <h3 className="thish3">Try These Pattens: </h3>
    
    <Row>
    <Col>
    <Card className="card">
    <CardImg top width="100%" src="https://www.researchgate.net/profile/Alan_Dorin/publication/263596638/figure/fig1/AS:453644089860096@1485168587319/Subsequent-stages-of-the-glider-pattern-on-Conways-Game-of-Life-cellular-automaton-grid_Q320.jpg" alt="Card image cap" />
    <CardBody>
        <CardTitle>Gilder Pattern</CardTitle>
    </CardBody>
    </Card>
    </Col>

    <Col>
    <Card className="card">
    <CardImg top width="100%" src="https://www.conwaylife.com/w/images/5/57/Pentadecathlon.png" alt="pentadecathlon" />
    <CardBody>
        <CardTitle>Pentadec-athlon Pattern</CardTitle>
    </CardBody>
    </Card>
    </Col>

    <Col>
    <Card className="card">
    <CardImg top width="100%" src="https://www.conwaylife.com/w/images/4/49/Pulsar.png" alt="Pulser" />
    <CardBody>
        <CardTitle>Pulser Patten</CardTitle>
    </CardBody>
    </Card>
    </Col>
     </Row>
    </Container>
    </div>
   

</>
   )
}

export default About