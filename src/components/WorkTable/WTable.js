import * as React from 'react';
import './WTable.css';
import {WorkData} from "./WorkData";
import { Table} from '@nextui-org/react';
import { Text} from "@nextui-org/react";
import { Stack, Typography } from '@mui/material';
import { Icon } from 'react-icons-kit'
import {androidArrowDropright} from 'react-icons-kit/ionicons/androidArrowDropright'
function WTable(props) {
    const WorkColumns = [
        {name: 'Company', extra: ''},
        {name: 'Role', extra: ''},
        {name: 'Description', extra: ''},
        {name: 'Start Date', extra: ''},
        {name: 'End Date', extra: ''},
        {name: 'Type', extra: 'allowsSorting'}
    ];
   const ListCols = WorkColumns.map((cols) =>
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

   const ListWorkData = WorkData.map( (data) =>
       <Table.Row key={data.id}>
           <Table.Cell>{data.Company}</Table.Cell>
           <Table.Cell>{data.RoleName}</Table.Cell>
           <Table.Cell fluid>
               {
                   data.Description ?
                       <Text
                           css={{
                               width: '40vw', maxWidth: '100%',
                               whiteSpace: 'normal',
                               wordWrap: 'break-word'
                           }}
                       > {data.Description}</Text>
                       :
                       data.ListDesc.map(
                           ld =>
                               <Stack direction="row" alignItems="center" gap={1}>
                                  <Icon icon={androidArrowDropright}></Icon>
                                   <Typography variant="body1">
                                       <Text b>
                                           {ld.data}
                                       </Text>
                                   </Typography>
                               </Stack>

                       )}


           </Table.Cell>
           <Table.Cell>{data.DateStart}</Table.Cell>
           <Table.Cell>{data.DateEnd}</Table.Cell>
           <Table.Cell>{data.Type}</Table.Cell>
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
                    {ListWorkData}
                </Table.Body>
                <Table.Pagination
                    shadow
                    noMargin
                    align="center"
                    rowsPerPage={3}
                    onPageChange={(page) => console.log({ page })}
                />
            </Table>


        </>
    );
}

export default WTable;