import React from 'react';
import { Table} from '@nextui-org/react';
import { Text} from "@nextui-org/react";
import { Stack, Typography } from '@mui/material';
import { Icon } from 'react-icons-kit'
import {androidArrowDropright} from 'react-icons-kit/ionicons/androidArrowDropright'
import {pubdata} from './data';
import './pub.css'

function Pub(props) {
    const PUbColumns = [
        {name: 'Authors', extra: ''},
        {name: 'Title', extra: ''},
        {name: 'Publication', extra: ''},
        {name: 'Volume', extra: ''},
        {name: 'Number', extra: ''},
        {name: 'Pages', extra: ''},
        {name: 'Year', extra: ''},
        {name: 'Publisher', extra: ''}
    ];
    const ListCols = PUbColumns.map((cols) =>
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
    const ListPubData = pubdata.map( (data) =>
        <Table.Row key={data.id}>
            <Table.Cell fluid>
                <Text
                    css={{
                        width: '10vw', maxWidth: '100%',
                        whiteSpace: 'normal',
                        wordWrap: 'break-word'
                    }}
                > {data.Authors}</Text>
            </Table.Cell>
            <Table.Cell fluid>
                <Text
                    css={{
                        width: '10vw', maxWidth: '100%',
                        whiteSpace: 'normal',
                        wordWrap: 'break-word'
                    }}
                > {data.Title}</Text>
            </Table.Cell>
            <Table.Cell fluid>
                        <Text
                            css={{
                                width: '10vw', maxWidth: '100%',
                                whiteSpace: 'normal',
                                wordWrap: 'break-word'
                            }}
                        > {data.Publication}</Text>
            </Table.Cell>
            <Table.Cell>{data.Volume}</Table.Cell>
            <Table.Cell>{data.Number}</Table.Cell>
            <Table.Cell>{data.Pages}</Table.Cell>
            <Table.Cell>{data.Year}</Table.Cell>
            <Table.Cell>{data.Publisher}</Table.Cell>
        </Table.Row>
    );

    return (
        <>
            <Table
                striped
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
                    {ListPubData}
                </Table.Body>
                <Table.Pagination
                    shadow
                    noMargin
                    align="center"
                    rowsPerPage={5}
                    onPageChange={(page) => console.log({ page })}
                />
            </Table>
        </>
    );
}

export default Pub;