// imports
import moment from "moment";
const convertDate = (value) => {
  const formatted_date = moment(value).format("DD.MM.YYYY");
  return formatted_date;
};
export { convertDate };
