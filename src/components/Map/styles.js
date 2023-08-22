// import { makeStyles } from '@material-ui/core/styles';
import { styled } from '@mui/material/styles';
import { Paper } from '@mui/material';

// export default makeStyles(() => ({
//   paper: {
//     padding: '10px',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     width: '100px',
//   },
//   mapContainer: {
//     height: '85vh',
//     width: '100%',
//   },
//   markerContainer: {
//     position: 'absolute',
//     transform: 'translate(-50%, -50%)',
//     zIndex: 1,
//     '&:hover': { zIndex: 2 },
//   },
//   pointer: {
//     cursor: 'pointer',
//   },
// }));

export const MapPaper = styled(Paper)(() => ({
  padding: '10px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '100px',
}));

export const MapContainer = styled('div')(() => ({
  height: '85vh',
  width: '100%',
}));

export const MarkerContainer = styled('div')(() => ({
  position: 'absolute',
  transform: 'translate(-50%, -50%)',
  zIndex: 1,
  '&:hover': { zIndex: 2 },
}));

export const MapPointer = styled('div')(() => ({
  cursor: 'pointer',
}));
