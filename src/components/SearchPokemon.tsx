import { SearchIcon } from '@chakra-ui/icons';
import {
	Button,
	ButtonGroup,
	Input,
	InputGroup,
	InputLeftElement,
	InputRightElement,
} from '@chakra-ui/react';
import React, { ChangeEventHandler, MouseEventHandler } from 'react';

interface SearchParams {
	searchTerm: string;
	handleInputChange: ChangeEventHandler<HTMLInputElement>;
	handleClickClearSearch: MouseEventHandler<HTMLButtonElement>;
}

export const SearchPokemon = (props: SearchParams) => {
	return (
		<>
			<ButtonGroup gap='2' paddingY={3}>
				<InputGroup>
					<InputLeftElement pointerEvents='none'>
						<SearchIcon color='gray.300' />
					</InputLeftElement>
					<Input
						type='text'
						size='md'
						placeholder='Search pokemon'
						value={props.searchTerm}
						onChange={props.handleInputChange}
					/>
					<InputRightElement width='4.5rem'>
						<Button size='xs' onClick={props.handleClickClearSearch}>
							x
						</Button>
					</InputRightElement>
				</InputGroup>
			</ButtonGroup>
		</>
	);
};
