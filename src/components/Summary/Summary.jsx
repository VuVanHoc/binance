import { Grid, Button, Typography } from "@material-ui/core";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import useStyles from "./styles";
import React from "react";

export default function Summary({ data, formatter }) {
  const classes = useStyles();

  const dataSummary = React.useMemo(() => {
    return {
      totalBalance: Number(
        data?.marginBalance || 0 + data?.unrealizedProfit || 0
      )?.toFixed(2),
      marginBalance: Number(data?.marginBalance || 0)?.toFixed(2),
      // balance: Number(data?.positionInitialMargin)?.toFixed(2),
      unrealizedProfit: Number(data?.unrealizedProfit || 0)?.toFixed(2),
    };
  }, [data]);

  return (
    <div>
      <Grid container justifyContent="space-between" alignItems="flex-end">
        <Grid item xs={6}>
          <Grid container alignItems="center" spacing={4}>
            <Grid item>
              <Typography color="textSecondary">Total Balance</Typography>
            </Grid>
            <Grid item>
              <Button
                className={classes.hideBalance}
                variant="outlined"
                startIcon={<VisibilityOffIcon />}
              >
                Hide Balance
              </Button>
            </Grid>
          </Grid>
          <Typography display="inline" variant="h3">
            {dataSummary.totalBalance}
          </Typography>
          <Typography display="inline">{` `}USD</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography>Margin Balance</Typography>
          <Typography display="inline" variant="h3">
            {dataSummary.marginBalance}
          </Typography>
          <Typography display="inline">{` `}USD</Typography>
        </Grid>
      </Grid>
      <br />
      <Grid container justifyContent="space-between" alignItems="flex-end">
        <Grid item xs={6}>
          {/* <Typography>Balance</Typography>
          <Typography display="inline" variant="h4">
            {dataSummary?.balance}
          </Typography>
          <Typography display="inline">{` `}USD</Typography> */}
        </Grid>
        <Grid item xs={6}>
          <Grid container alignItems="center" spacing={4}>
            <Grid item>
              <Typography color="textSecondary">Unrealized PNL</Typography>
            </Grid>
            <Grid item>
              <Button className={classes.hideBalance} variant="outlined">
                PNL Analysis
              </Button>
            </Grid>
          </Grid>
          <Typography
            display="inline"
            variant="h4"
            color={dataSummary?.unrealizedProfit < 0 ? "error" : "secondary"}
          >
            {dataSummary?.unrealizedProfit}
          </Typography>
          <Typography
            display="inline"
            color={dataSummary?.unrealizedProfit < 0 ? "error" : "secondary"}
          >
            {` `}USD
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
