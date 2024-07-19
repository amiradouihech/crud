import React, { useContext } from 'react';
import { Tr, Td, Box, Button, Avatar } from '@chakra-ui/react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { GlobalContext } from '../context/GlobalWrapper';

const Row = ({ id, fullname, email, age, country }) => {
  const {Delete ,isOpen, onOpen, onClose} = useContext(GlobalContext);
  const handleDelete = (id) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cet utilisateur ?')) {
      Delete(id);
    }
  };

  return (
    <Tr>
      <Td>
        <Avatar name={fullname} />
      </Td>
      <Td>{fullname}</Td>
      <Td>{email}</Td>
      <Td>{age}</Td>
      <Td>{country}</Td>
      <Td>
        <Box display="flex" gap="1">
          <Button colorScheme="blue">
            <AiFillEdit />
          </Button>
          <Button colorScheme={'red'} onClick={() => handleDelete(id)}>
            <AiFillDelete />
          </Button>
        </Box>
      </Td>
    </Tr>
  );
};

export default Row;
