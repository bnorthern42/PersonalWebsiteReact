import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import { Image } from '@nextui-org/react';


function ProjCards({
    source,title, description, link
                   }) {


    return (
        <div className='cards'>
            <Card sx={{ maxWidth: 345, maxHeight: '45vh',
                marginTop: '5vh', background: '#ebf8e1',
                borderRadius: '5%',
                boxShadow: '1px 1px 1vh 1vh #03cafc'}}>

                <div className='cardimgContainer'>
                    <Image
                        width={340}
                        height={220}
                        src={source}
                        alt={title}
                        objectFit="contain"
                    />
                </div>

                    <CardContent sx={{
                        marginBottom: '25vw',
                        marginTop: '-1vw',
                        height: '100%',
                        overflow: 'visible',
                        display: 'block'
                    }}>
                        <Typography gutterBottom variant="h5" component="div">
                           <a href={link} target="_blank"> {title}</a>
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                    </CardContent>
            </Card>
        </div>
    );
}

export default ProjCards;