import React from 'react';
import { Card, Text, styled } from "@nextui-org/react";
import './SkillCard.css';
function SkillCard({
    SkillBullets
                   }) {
    const ListSkills = SkillBullets.map((item) =>
        <li className='circle'>{item}</li>
    );
    const StyledCard = styled(Card, {
        minWidth: "30vw",
        borderRadius: '$lg', // radii.lg
        shadows: "2px 2px 4px #000000",
        opacity: "55%"
    });
    return (
        <div className='cardWrapper'>
            <StyledCard isHoverable variant="bordered" >
                <Card.Body>
                    <Text>
                        <ul className='circle'>
                            {ListSkills}
                        </ul>
                    </Text>
                </Card.Body>
            </StyledCard>
        </div>
    );
}

export default SkillCard;