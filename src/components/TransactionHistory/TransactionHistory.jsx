import React from 'react';
import PropTypes from 'prop-types';
import {Table,Thead,Tr,Th,Tbody,Td, } from "./TransactionHistory.styled";


const Trasaction = ({items}) => {
  
  return <Table >
    <Thead>
      <Tr>
        <Th>Type</Th>
        <Th>Amount</Th>
        <Th>Currency</Th>
      </Tr>
    </Thead>

    <Tbody>
      {items.map(({id,type,amount,currency}) => (
        <Tr id={id}>
          <Td>{type }</Td>
          <Td>{ amount}</Td>
          <Td>{ currency}</Td>
      </Tr>
 ))}
    </Tbody>
  </Table>
}
export default Trasaction

// Trasaction.propTypes = {
//   id: PropTypes.string.isRequired,
//   type: PropTypes.string.isRequired,
//   amount: PropTypes.string.isRequired,
//   currency:PropTypes.string.isRequired,
// }


Trasaction.propTypes = { 
Trasaction: PropTypes.arrayOf(PropTypes.string)
}