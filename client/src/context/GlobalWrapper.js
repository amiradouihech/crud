import { createContext, useState } from 'react';
import axios from 'axios';
import { useDisclosure, useToast } from '@chakra-ui/react';

export const GlobalContext = createContext();

export default function Wrapper({ children }) {

  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [errors, setErrors] = useState({});
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const FetchUsers = () => {
    axios
      .get('/api/users')
      .then((res) => {
        if (res && res.data) {
          setUsers(res.data);
        }
      })
      .catch((err) => {
        console.error('FetchUsers Error:', err.response ? err.response.data : err.message);
      });
  };

  const Search = (query) => {
    axios
      .post(`/api/users/search?key=${query}`)
      .then((res) => {
        if (res && res.data) {
          setUsers(res.data);
        }
      })
      .catch((err) => {
        console.error('Search Error:', err.response ? err.response.data : err.message);
      });
  };

  const Delete = (id) => {
    axios
      .delete(`/api/users/${id}`)
      .then((res) => {
        setUsers(users.filter((u) => u._id !== id));
        toast({
          title: 'User Deleted',
          status: 'success',
          duration: 4000,
          isClosable: true,
        });
      })
      .catch((err) => {
        console.error('Search Error:', err.response ? err.response.data : err.message);
      });
  };
  const Add = (form, setForm) => {
    axios
      .post('/api/users', form)
      .then((res) => {
        setUsers([...users, res.data]);
        toast({
          title: 'User Added',
          status: 'success',
          duration: 4000,
          isClosable: true,
        });
        setErrors({});
        setForm({});
        onClose();
      })
      .catch((err) => {
        setErrors(err.response.data.error);
      });
  };

  const FindOne = async (id) => {
    await axios
      .get(`/api/users/${id}`)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        setErrors(err.response.data.error);
      });
  };

  const Update = (form, setForm, id) => {
    axios
      .put(`/api/users/${id}`, form)
      .then((res) => {
        toast({
          title: 'User Updated',
          status: 'success',
          duration: 4000,
          isClosable: true,
        });
        setErrors({});
        setForm({});
        onClose();
        FetchUsers();
      })
      .catch((err) => {
        setErrors(err.response.data.error);
      });
  };

  return (
    <GlobalContext.Provider value={{
        FetchUsers,
        Search,
        Delete,
        Add,
        FindOne,
        Update,
        users,
        onOpen,
        isOpen,
        onClose,
        errors,
        setErrors,
        user,
        setUser,
      }}>
      {children}
    </GlobalContext.Provider>
  );
}
