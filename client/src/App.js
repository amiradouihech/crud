import React, { useContext, useEffect, useState } from 'react';
import {
  Box,
  Button,
  Container,
  Input,
  FormControl,
  Text,
} from '@chakra-ui/react';
import { IoMdSearch } from 'react-icons/io';
import { AiOutlinePlus } from 'react-icons/ai';
import { Table, Thead, Tbody, Tr, Th, TableContainer } from '@chakra-ui/react';
import Row from './components/Row';
import { GlobalContext } from './context/GlobalWrapper';
import DrawerExample from './components/DrawerExample';

function App() {
  const { FetchUsers,Search,users,isOpen, onOpen, onClose } = useContext(GlobalContext);
  const [query, setQuery] = useState('')
  useEffect(() => {
    FetchUsers();
  }, []);
  const SearchHandler = () => {
    Search(query);
  };
  const onchangeHandler = (e) => {
    setQuery(e.target.value);
  };
  return (
    <div className="App">
      <Container maxW={'full'} p="4" fontSize={'18px'}>
        <Box rounded="lg" boxShadow="base" p="4">
          <Box
            mt="2"
            mb="4"
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            gap={2}
          >
            <FormControl display="flex" alignItems="center" gap={2}>
              <Input type="text" onChange={onchangeHandler}/>
              <Button
                leftIcon={<IoMdSearch />}
                colorScheme="teal"
                variant="outline"
                maxW="300px"
                minW="150px"
                 onClick={() => SearchHandler()}
              >
                Search
              </Button>
            </FormControl>
          </Box>
        </Box>
        <Box mt="5" rounded={'lg'} boxShadow="base">
          <Box
            p="4"
            display="flex"
            justifyContent={'space-between'}
            alignItems="center"
          >
            <Text fontSize="xl" fontWeight="bold">
              List Users
            </Text>
            <Button
              colorScheme="teal"
              variant="outline"
              maxW="300px"
              minW="150px"
              leftIcon={<AiOutlinePlus fontSize="20px" />}
              onClick={onOpen}
            >
              Add User
            </Button>
          </Box>
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Avatar</Th>
                  <Th>Fullname</Th>
                  <Th>Email</Th>
                  <Th>Age</Th>
                  <Th>Country</Th>
                  <Th>Actions</Th>
                </Tr>
              </Thead>
              <Tbody>
               {
                users?.map(({_id,fullname,email,age,country})=>{
                  return <Row
                id={_id}
                  fullname={fullname}
                  email={email}
                  age={age}
                  country={country}/>;

                })
               }
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
        <DrawerExample/>
      </Container>
    </div>
  );
}

export default App;
