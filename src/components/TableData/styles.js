import { makeStyles } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";
import red from "@material-ui/core/colors/red";

const useStyles = makeStyles((theme) => ({
  tableHead: {
    backgroundColor: grey[100],
  },
  tableCellHeader: {
    color: grey[500],
  },
  tab: {
    textTransform: "capitalize",
    fontSize: 16,
  },
  symbolGreen: {
    width: 5,
    height: 20,
    backgroundColor: "#15a570",
    borderRadius: 5,
  },
  symbolRed: {
    width: 5,
    height: 20,
    backgroundColor: red.A400,
    borderRadius: 5,
  },
}));

export default useStyles;
