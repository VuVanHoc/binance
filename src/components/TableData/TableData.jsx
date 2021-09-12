import React from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Tabs,
  Tab,
  Typography,
} from "@material-ui/core";

import useStyles from "./styles";

export default function TableData({ data, formatter }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Tabs value={value} onChange={handleChange}>
        <Tab label="Positions" className={classes.tab} />
        <Tab label="Assets" className={classes.tab} />
        <Tab label="Collaterals" className={classes.tab} />
      </Tabs>
      <br />
      <Table className={classes.table} aria-label="simple table">
        <TableHead className={classes.tableHead}>
          <TableRow>
            <TableCell className={classes.tableCellHeader}>Type</TableCell>
            <TableCell className={classes.tableCellHeader}>Symbol</TableCell>
            <TableCell className={classes.tableCellHeader}>Leverage</TableCell>
            <TableCell className={classes.tableCellHeader}>Size</TableCell>
            <TableCell className={classes.tableCellHeader}>
              Size (USDT)
            </TableCell>
            <TableCell className={classes.tableCellHeader}>
              Entry Price
            </TableCell>
            <TableCell className={classes.tableCellHeader}>
              Mark Price
            </TableCell>
            <TableCell className={classes.tableCellHeader}>
              Liquid Price
            </TableCell>
            <TableCell className={classes.tableCellHeader}>
              Unrealized PNL (ROE%)
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((row, index) => (
            <TableRow key={index}>
              <TableCell>
                {row?.positionAmt < 0 ? (
                  <Typography color="error">SHORT</Typography>
                ) : (
                  <Typography color="secondary">LONG</Typography>
                )}
              </TableCell>
              <TableCell>{row.symbol}</TableCell>
              <TableCell>{`X${row.leverage} (${row.marginType})`}</TableCell>
              <TableCell>
                {row.positionAmt} {row.symbol.slice(0, 3)}
              </TableCell>
              <TableCell>
                {formatter?.format(
                  Number(row.positionAmt * row.entryPrice).toFixed(2)
                )}
              </TableCell>
              <TableCell>
                {formatter?.format(Number(row.entryPrice).toFixed(2))}
              </TableCell>
              <TableCell>
                {formatter?.format(Number(row.markPrice).toFixed(2))}
              </TableCell>
              <TableCell>
                {formatter?.format(Number(row.liquidationPrice).toFixed(2))}
              </TableCell>
              <TableCell>
                <Typography
                  color={row?.unrealizedProfit < 0 ? "error" : "secondary"}
                >
                  {Number(row.unrealizedProfit).toFixed(2)}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
