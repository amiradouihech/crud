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
import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../context/GlobalWrapper';
import InputsGroup from './InputsGroup';
export default function DrawerExample() {
   
    const {isOpen,Add, onOpen, onClose,setErrors ,errors,user,Update} = useContext(GlobalContext);
  const [form,setForm]=useState({});
  const onchangeHandler=(e)=>{
    setForm({
        ...form,
        [e.target.name]:e.target.value,
    })
  }
  const onAdd=()=>{Add(form,setForm);}
  const onUpdate=()=>{
    Update(form,setForm,form._id);
  }
  useEffect(()=>{
    setForm(user);
  },[user])
    return (
      <>
       
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton onClick={()=>{
                onClose();
                setErrors({});
                setForm({});

            }}/>
            <DrawerHeader>Create /update user</DrawerHeader>
            
            <DrawerBody>
             <Stack spacing={"24px"}>
             <InputsGroup name="fullname" value={form?.fullname} onchangeHandler={onchangeHandler} errors={errors?.fullname}/>
            <InputsGroup name="email" value={form?.email} onchangeHandler={onchangeHandler} errors={errors?.email}/>
            <InputsGroup name="age" value={form?.age}onchangeHandler={onchangeHandler} errors={errors?.age}/>
            <InputsGroup name="country" value={form?.country}onchangeHandler={onchangeHandler} errors={errors?.country}/>
             </Stack>
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={()=>{
                onClose();
                setErrors({});
                setForm({});

            }}>
                Cancel
              </Button>
              <Button colorScheme='blue'onClick={()=>form._id ?onUpdate():onAdd()} >Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }