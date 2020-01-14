import styled from "styled-components";
import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

export const Papere = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;  
`;
export const Title = styled.div`
  margin: 3rem 0;
`;
export const Form = styled.div`
  width: 100%;
  margin-bottom: 3rem;
`;
export const Name = styled.div` 
  margin-bottom: 1rem;
`;
export const StyledTableCell = withStyles(theme => ({
  head: {
      backgroundColor: '#424242',
      color: theme.palette.common.white,
  },
  body: {
      fontSize: 14,
  },
}))(TableCell);

export const StyledTableRow = withStyles(theme => ({
  root: {
      '&:nth-of-type(odd)': {
          backgroundColor: '#e0e0e0'
      },
  },
}))(TableRow);
