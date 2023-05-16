import { ChangeEvent, FC } from "react";
import { Popover } from "../Popover";
import { PopoverFlex, PopoverText } from "../Stitches";
import { Fieldset, Input, Label, PopoverArrow, PopoverClose, Text } from "../Stitches/Popover";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Button } from "../Stitches/LinkedList";

type Props = {
  setIndex: (value: number) => void,
  index: number,
  removeAt: () => void,
}

export const RemoveAt: FC<Props> = ({ setIndex, index, removeAt }) => {
  return (
    <Popover text="pop index" variant="red">
      <PopoverFlex css={{ flexDirection: 'column', gap: 10 }}>
        <PopoverText css={{ marginBottom: 10 }}>Remove an Element</PopoverText>
        <Text>
          Enter the index of an element you want to remove.
        </Text>
        <Fieldset>
          <Label htmlFor="index">Index</Label>
          <Input id="index" type="number" value={index} onChange={(event: ChangeEvent<HTMLInputElement>) => setIndex(isNaN(parseInt(event.target.value)) ? parseInt(event.target.value): 0)} />
        </Fieldset>
        <Button variant={'red'} css={{ margin: '0 auto' }} onClick={removeAt}>Remove</Button>
      </PopoverFlex>
      <PopoverClose aria-label="Close">
        <Cross2Icon />
      </PopoverClose>
      <PopoverArrow />
    </Popover>
  )
}
