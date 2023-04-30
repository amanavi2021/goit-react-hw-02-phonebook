import styled from '@emotion/styled';

export const ContactsForm = styled.form`
display: flex;
flex-direction: column;
align-items: start;
width: 300px;

margin-top:25px;
border: 1px solid black;
padding: 10px;
`;

export const InputInfo = styled.input`
display:flex;
margin-top: 5px;
border: 1px solid #dae1e9;
`;

export const LabelNumber = styled.label`
 margin-top:20px;
`;

export const AddBtn = styled.button`
display: flex;
align-items: center;
justify-content: center;

padding: 5px 10px;
margin-top:20px;
border: 1px solid #dae1e9;
border-radius: 5px;
background-color: white;
box-sizing: border-box;
cursor:pointer;
height: 24px;
transaction: background-color 250ms linear;

&:hover,
&:focus {
background-color: #5f8cea;
}
`;





