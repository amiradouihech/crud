import React from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    
    Input,
  } from '@chakra-ui/react'
  
function InputsGroup({name,onchangeHandler,errors,value}) {

    
  return (
    <FormControl isInvalid={errors}>
  <FormLabel>
    {name}
  </FormLabel>
  <Input type='text' name={name} onChange={onchangeHandler} value={value}/>
  {
    errors && errors?.map((err)=>{
        return <FormErrorMessage>{err}</FormErrorMessage>
    })
  }
</FormControl>
  )
}

export default InputsGroup
