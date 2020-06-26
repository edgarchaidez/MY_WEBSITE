import React from 'react';

import { Card } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from "@material-ui/core/TableRow";

const Skills = () => {

    const columns = [
        { id: 'Languages', label: 'Languages', minWidth: 170 },
        { id: 'Tools', label: 'Tools', minWidth: 100 },
        { id: 'Other', label: 'Other', minWidth: 100 }
    ];

    const rows = [
        {"Languages": "Java", "Tools": "React", "Other": "Agile Development"},
        {"Languages": "C++", "Tools": "Redux", "Other": "RESTful API's"},
        {"Languages": "C", "Tools": "React Native", "Other": "Linux/Unix"},
        {"Languages": "C#", "Tools": "Git", "Other": "Mac OS"},
        {"Languages": "Python", "Tools": "GitHub", },
        {"Languages": "JavaScript", "Tools": ".NET Framework"},
        {"Languages": "HTML", "Tools": "JSON" },
        {"Languages": "CSS", "Tools": "XML"},
        { "Languages": "SQL",},
    ];

    return (
      <Card elevation={2} square style={{marginBottom: "50px"}}>
        <TableContainer style={{ maxHeight: "460px" }}>
          <Table stickyHeader aria-label="sticky table" >
            <TableHead >
              <TableRow >
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth, backgroundColor: "#F0F0F0"}}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.Languages}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    );
};

export default Skills;