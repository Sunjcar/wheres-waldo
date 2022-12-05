import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../Components/Card'
import { PrimaryBtn } from '../Utils/BtnWrapper'
import Wrapper from '../Utils/Wrapper'
import { levelData } from '../Utils/LevelData'

const Home = ({setLevel}) => {
    const links = levelData.map((link) => {
        return (
            <Link to="/game" key={link.number}>
                <Card
                    img={link.img}
                    clicked={() => setLevel(link.number)}
                    alt={`Level ${link.number} Where's Waldo`}
                    {...link.characters}
                >Level {link.number}</Card>
            </Link>
        )
    })
    return (
        <Wrapper>
            <div className="grid gap-4 md:grid-cols-3">{links}</div>

        </Wrapper>
    );
}

export default Home

