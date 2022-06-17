import { SearchIcon } from '@chakra-ui/icons'
import { ButtonGroup, Input, InputGroup, InputLeftElement, Select } from '@chakra-ui/react'
import React, { ChangeEventHandler, MouseEventHandler, useState } from 'react'

interface SearchParams {
  searchTerm: string,
  handleInputChange: ChangeEventHandler<HTMLInputElement>,
  handleClickAFilterBtn: MouseEventHandler<HTMLButtonElement>
}

export const SearchPokemon = (props : SearchParams) => {

  const [filterSelected, setFilterSelected] = useState('option1');

  const handleChangeFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterSelected(event.target.value);
  }
    

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

        <Select variant="filled" defaultValue={filterSelected} onChange={handleChangeFilter}>
          <option value='option1'> order Lowest</option>
          <option value='option2'> order Highest</option>
          <option value='option3'> order A-Z</option>
          <option value='option3'> order Z-A</option>
        </Select>

        {/* <Button 
          leftIcon={<TriangleDownIcon />}
          onClick={() => setTogleFilter(!togleFilter)}
          > Filter </Button> */}
      </ButtonGroup>
      {/* <Collapse in={togleFilter} animateOpacity>
        <Box>
          <RadioGroup onChange={setFilterSelected} value={filterSelected}>
            <Stack direction="column">
              <Radio value='1'>First</Radio>
              <Radio value='2'>Second</Radio>
              <Radio value='3'>Third</Radio>
            </Stack>
          </RadioGroup>
        </Box>
      </Collapse> */}
    </>
  )
}
