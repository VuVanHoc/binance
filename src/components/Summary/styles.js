import { makeStyles } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";

const useStyles = makeStyles((theme) => ({
  hideBalance: {
    textTransform: "capitalize",
    fontWeight: "bold",
    color: grey[600],
  },
}));

export default useStyles;
