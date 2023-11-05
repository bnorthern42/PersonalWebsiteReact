import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function MediaCard({
    source, SchoolName, SchoolingTime, DegreeInfo, DegreeConc
                   }) {
    return (
        <Card sx={{ maxWidth: 820,
            borderRadius: 10

        }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {DegreeInfo}
                </Typography>
                <Typography gutterBottom variant="subtitle1" component="div">
                    {DegreeConc}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                    {SchoolName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {SchoolingTime}
                </Typography>
            </CardContent>

        </Card>
    );
}

export default MediaCard;