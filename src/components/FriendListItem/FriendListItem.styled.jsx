import styled from '@emotion/styled';

export const List = styled.ul`
width: 425px;
	height: 450px;
	margin: auto;
	border: solid 1px rgb(211, 221, 221);`;

export const Item = styled.li`
display: flex;
  align-items: center;
  margin: 20px;
  box-shadow: 0 0 1em;
  padding-left: 10px;
  border-radius: 3px;
`;

const setBgColor = (prop) => {
  if (prop.children === true) {
  return "green"
  }
    if (prop.children === false) {
  return "red"
}
};

export const Status = styled.span`
 display: block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${setBgColor};
    margin: 0 15px 0 15px;
`;

export const Avatar = styled.img`
 border-radius: 10px;
    margin: 10px;
`;

export const Name = styled.p`
 font-size: 24px;
  font-weight: 600;
`;