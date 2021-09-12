import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Summary from "../../components/Summary";
import TableData from "../../components/TableData";
import useStyles from "./styles";
import React from "react";
import api from "../../api";

function App() {
  const classes = useStyles();
  const [binanceData, setBinanceData] = React.useState(null);

  const formatter = React.useMemo(() => new Intl.NumberFormat("vn"), []);

  const fetchData = React.useCallback(async () => {
    try {
      const res = await api.get(`binance/getData`);
      if (res) {
        setBinanceData(res.data);
      }
    } catch (error) {}
  }, []);

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <Container maxWidth="lg" className={classes.root}>
      <Grid container className={classes.summary}>
        <Grid item xs={12}>
          <Summary data={binanceData?.asset} formatter={formatter} />
        </Grid>
      </Grid>

      <TableData data={binanceData?.currentPosition} formatter={formatter} />
    </Container>
  );
}

export default App;
