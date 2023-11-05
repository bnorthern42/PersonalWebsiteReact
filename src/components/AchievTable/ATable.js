import React from 'react';
import { Table} from '@nextui-org/react';
import { Text} from "@nextui-org/react";
import { Stack, Typography } from '@mui/material';
import { Icon } from 'react-icons-kit'
import {AchData} from './Ach';
function ATable(props) {
    const Columns = [
        {name: 'Name'},
        {name: 'Date Achieved'},
        {name: 'Relationship'},
        {name: 'Description'}

    ]
    const ListCols = Columns.map( (cols) =>
        <Table.Column>
            <Text
                h6
                css={{
                    textGradient: "45deg, $yellow600 -20%, $red600 100%",
                }}
                weight="bold"
                size={15}
                Prettier
                >
                {cols.name}
            </Text>
        </Table.Column>
    );
    const ListData = AchData.map ((data) =>
        <Table.Row key={data.id}>
            <Table.Cell>{data.Name}</Table.Cell>
            <Table.Cell>{data.DateGet}</Table.Cell>
            <Table.Cell>{data.Relationship}</Table.Cell>
            <Table.Cell fluid>
                <Text
                    css={{
                        width: '40vw', maxWidth: '100%',
                        whiteSpace: 'normal',
                        wordWrap: 'break-word'
                    }}
                > {data.Description}</Text>
            </Table.Cell>
        </Table.Row>
    );
    return (
        <>
            <Table
                bordered
                shadow={false}
                color="secondary"
                aria-label="Work Experience"
                css={{
                    height: "auto",
                    minWidth: "100%",
                }}

            >
                <Table.Header>
                    {ListCols}
                </Table.Header>
                <Table.Body>
                    {ListData}
                </Table.Body>

            </Table>
        </>
    );
}

export default ATable;