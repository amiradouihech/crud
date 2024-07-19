import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Input,
    Stack,
    InputGroup,
  } from '@chakra-ui/react'
import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalWrapper';
import InputsGroup from './InputsGroup';
export default function DrawerExample() {
   
    const {isOpen,Add, onOpen, onClose ,errors} = useContext(GlobalContext);
  const [form,setForm]=useState({});
  const onchangeHandler=(e)=>{
    setForm({
        ...form,
        [e.target.name]:e.target.value,
    })
  }
  const onAdd=()=>{Add(form,setForm);}
    return (
      <>
       
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Create /update user</DrawerHeader>
            
            <DrawerBody>
             <Stack spacing={"24px"}>
             <InputsGroup name="fullname" onchangeHandler={onchangeHandler} errors={errors?.fullname}/>
            <InputsGroup name="email" onchangeHandler={onchangeHandler} errors={errors?.email}/>
            <InputsGroup name="age"onchangeHandler={onchangeHandler} errors={errors?.age}/>
            <InputsGroup name="country"onchangeHandler={onchangeHandler} errors={errors?.country}/>
             </Stack>
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue'onClick={()=>onAdd()}>Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }