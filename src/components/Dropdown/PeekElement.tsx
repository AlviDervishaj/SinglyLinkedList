import { FC } from "react";
import { PopoverFlex, PopoverText } from "../Stitches";
import { Popover } from "../Popover";
import { Fieldset, Input, Label, PopoverArrow, PopoverClose, Text } from "../Stitches/Popover";
import { Cross2Icon } from "@radix-ui/react-icons";
import { crimson } from "@radix-ui/colors";
import { Button } from "../Stitches/LinkedList";

type Props = {
  error: string,
  peekIndex: () => void,
  setNodeDataToSearch: (value: string) => void,
  nodeDataToSearch: string,
}

export const PeekElement: FC<Props> = ({ peekIndex: peekElement, error, nodeDataToSearch, setNodeDataToSearch }) => {
  return (
    <Popover text="Peek Index" variant="white">
      <PopoverFlex css={{ flexDirection: 'column', gap: 10 }}>
        <PopoverText css={{ marginBottom: 10 }}>Find an Element</PopoverText>
        <Text css={{ fontWeight: "400", letterSpacing: 1, wordBreak: 'break-word', wordSpacing: 0 }}>
          Enter data of Element you want to find.
        </Text>
        <Fieldset>
          <Label htmlFor="data">Data</Label>
          <Input id="data" type="text" value={nodeDataToSearch} onChange={event => setNodeDataToSearch(event.target.value)} />
        </Fieldset>
        {error ? <Text css={{ color: crimson.crimson11, textAlign: 'center' }}>{error}</Text> : null}
        <Button variant={'white'} css={{margin: '0 auto'}} onClick={peekElement}>Peek Element</Button>
      </PopoverFlex>
      <PopoverClose aria-label="Close">
        <Cross2Icon />
      </PopoverClose>
      <PopoverArrow />
    </Popover>
  )
} 
