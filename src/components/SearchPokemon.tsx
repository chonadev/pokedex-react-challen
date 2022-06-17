import { SearchIcon } from '@chakra-ui/icons'
import { ButtonGroup, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import React, { ChangeEventHandler, MouseEventHandler } from 'react'

interface SearchParams {
  searchTerm: string,
  handleInputChange: ChangeEventHandler<HTMLInputElement>,
  handleClickAFilterBtn: MouseEventHandler<HTMLButtonElement>
}

export const SearchPokemon = (props : SearchParams) => {
  return (
    <>
      <ButtonGroup gap="2" paddingY={3}>
        <InputGroup>
          <InputLeftElement
            pointerEvents='none'
            children={<SearchIcon color='gray.300' />}
            />
          <Input 
            type='text'
            size="md"
            placeholder='Search pokemon' 
            value={props.searchTerm} 
            onChange={props.handleInputChange} 
            />
        </InputGroup>
      </ButtonGroup>
    </>
  )
}
