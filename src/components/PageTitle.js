import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './PageTitle.css';
import Grid from "@mui/material/Grid";
export default function PageTitle({
    title, titleSize, titleColor, bgColor
                                  }) {
    const bull = (
        <Box
            component="span"
            sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
            •
        </Box>
    );
    return (
        <>
            <br/>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                style={{ minHeight: '3vh' }}
            >
            <div className='titleCard--wrapper'>
                <Grid item xs={3}>
            <Card sx={{ maxWidth: '55vw',
                        minWidth: '40vw',
                        borderRadius: '3vw',
                        objectFit: 'cover',
                        width: '100%',
                        backgroundColor: bgColor,
                        margin: "0 auto",
                        padding: "0.1em",
                        }}>
                <CardContent>
                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center">
                        <Typography  component="div">
                          <div className={`${titleSize} `} style={{color: titleColor}}>

                              {title}

                          </div>
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
                </Grid>
            </div>
            </Grid>
        </>
    );
}

