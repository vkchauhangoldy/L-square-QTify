// import React from 'react';
// import "./FeedbackForm.css";
// import { FormControl } from '@mui/base/FormControl';
// import { Input, inputClasses } from '@mui/base/Input';
// import { styled } from '@mui/system';

// const FeedbackForm = (props) => {

//     const handleFormSubmit = () => {
//         props.onSubmit(); // Call the onSubmit function from props
//       };

//     return (
//         <div className='feedbackForm' style={{ display: props.displayForm ? "block" : "none" }}>
//             <p className='feedbackname'>FeedbackForm</p>

//             <FormControl defaultValue="" required className='formdata'>
//                 {({ filled, focused }: FormControlState) => (
//                     <React.Fragment>
//                         <StyledInput
//                             className={filled ? 'filled' : ''}
//                             placeholder='Full name'
//                         />
//                         {filled && !focused && <OkMark>✔</OkMark>}
//                     </React.Fragment>
//                 )}
//             </FormControl>

//             <FormControl defaultValue="" required className='formdata'>
//                 {({ filled, focused }: FormControlState) => (
//                     <React.Fragment>
//                         <StyledInput
//                             className={filled ? 'filled' : ''}
//                             placeholder='Email'
//                         />
//                         {filled && !focused && <OkMark>✔</OkMark>}
//                     </React.Fragment>
//                 )}
//             </FormControl>

//             <FormControl defaultValue="" required className='formdata'>
//                 {({ filled, focused }: FormControlState) => (
//                     <React.Fragment>
//                         <StyledInput
//                             className={filled ? 'filled' : ''}
//                             placeholder='Subject'
//                         />
//                         {filled && !focused && <OkMark>✔</OkMark>}
//                     </React.Fragment>
//                 )}
//             </FormControl>

//             <FormControl defaultValue="" required className='formdata'>
//                 {({ filled, focused }: FormControlState) => (
//                     <React.Fragment>
//                         <StyledInput
//                             className={filled ? 'filled' : ''}
//                             placeholder='Description'

//                         />
//                         {filled && !focused && <OkMark>✔</OkMark>}
//                     </React.Fragment>
//                 )}
//             </FormControl>

//             <button className='feedbackformsubmitbutton' onClick={handleFormSubmit}>Submit Feedback</button>
//         </div>
//     );
// }

// const StyledInput = styled(Input)(
//     ({ theme }) => `
//     display: inline-block;

//     .${inputClasses.input} {
//       width: 331px;
//       font-family: IBM Plex Sans, sans-serif;
//       font-size: 0.875rem;
//       font-weight: 400;
//       line-height: 1.5;
//       padding: 8px 12px;
//       border-radius: 8px;
//       color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
//       background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
//       border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
//       box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};

//       &:hover {
//         border-color: ${blue[400]};
//       }

//       &:focus {
//         outline: 0;
//         border-color: ${blue[400]};
//         box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
//       }
//     }

//     &.filled .${inputClasses.input} {
//       box-shadow: 0 0 2px 2px rgba(125, 200, 0, 0.25);
//     }

//     &::placeholder {
//       color: ${theme.palette.mode === 'dark' ? grey[500] : grey[400]};
//     }
//   `,
// );

// const OkMark = styled('span')`
//   margin-left: 8px;
//   margin-top: 10px;
//   position: absolute;
//   color: rgb(125 200 0 / 1);
// `;

// const blue = {
//     100: '#DAECFF',
//     200: '#80BFFF',
//     400: '#3399FF',
//     600: '#0072E5',
// };

// const grey = {
//     50: '#F3F6F9',
//     100: '#E5EAF2',
//     200: '#DAE2ED',
//     300: '#C7D0DD',
//     400: '#B0B8C4',
//     500: '#9DA8B7',
//     600: '#6B7A90',
//     700: '#434D5B',
//     800: '#303740',
//     900: '#1C2025',
// };

// export default FeedbackForm;
