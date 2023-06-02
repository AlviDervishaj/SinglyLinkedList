import { Help } from "../Dropdown";
import { Box } from "../Stitches";
import { Header as HeaderText, SmallText } from "../Stitches/App";
import { FC } from "react";

export const Header: FC = () => {
  return (
    <Box css={{ display: 'flex', height: 'fit-content', flexDirection: 'column', width: '90%', marginLeft: 'auto', marginRight: 'auto' }}>
      <Box css={{ display: 'flex', justifyContent: 'space-evenly', alignContent: 'end', alignItems: 'center' }}>
        <Box css={{ width: '80%', '@md': { width: '90%' } }}>
          <HeaderText>Singly Linked List</HeaderText>
        </Box>
        <Help />
      </Box>
      <SmallText css={{ textAlign: 'left' }}>
        Click the little Info button above to get some more information on how it works.
      </SmallText>
    </Box>
  )
}
