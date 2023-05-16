import { FC, ReactNode } from 'react';
import { Root, Trigger, Portal } from '@radix-ui/react-dropdown-menu';
import {
  HamburgerMenuIcon,
} from '@radix-ui/react-icons';
import { DropdownMenuArrow, DropdownMenuContent, IconButton } from '../Stitches/Dropdown';
import { Box } from '../Stitches';

type Props = {
  children: ReactNode
}

export const ActionButtonsDropdown: FC<Props> = ({children}) => {
  return (
    <Root>
      <Trigger asChild>
        <IconButton aria-label="Customise options">
          <HamburgerMenuIcon />
        </IconButton>
      </Trigger>
      <Portal>
        <DropdownMenuContent sideOffset={5}>
          <Box css={{width: '100%', display: 'flex', flexDirection: 'column', placeItems: 'center'}}>
            {children}
          </Box>
          <DropdownMenuArrow />
        </DropdownMenuContent>
      </Portal>
    </Root>
  );
};
