import { ChangeEvent, FC, useState } from "react";
import { Popover } from "../Popover";
import { PopoverFlex, PopoverText } from "../Stitches";
import { Fieldset, Input, Label, PopoverArrow, PopoverClose, Text } from "../Stitches/Popover";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Button } from "../Stitches/LinkedList";
import { LinkedList as SinglyLinkedList } from "../../utils/LinkedList";

type Props = {
  setMessage: (message: string) => void,
  linkedList: SinglyLinkedList<string>,
  clearOutput: () => void,
}

export const RemoveAt: FC<Props> = ({ setMessage, linkedList, clearOutput }) => {
  const [index, setIndex] = useState<number>(0);

  const removeIndex = () => {
    if (index < 0 || linkedList.isEmpty() || index > linkedList.size) {
      setMessage('Please enter a valid index.');
      return;
    }
    clearOutput();
    const value: string | null = linkedList.removeAt(index);
    if (!value) {
      setMessage('Could not remove element');
      return;
    }
    setMessage(`Removed ${value} from list. `);
    return;
  }

  return (
    <Popover text="pop index" variant="red">
      <PopoverFlex css={{ flexDirection: 'column', gap: 10 }}>
        <PopoverText css={{ marginBottom: 10 }}>Remove an Element</PopoverText>
        <Text>
          Enter the index of an element you want to remove.
        </Text>
        <Fieldset>
          <Label htmlFor="index">Index</Label>
          <Input id="index" type="number" value={index} min={0} max={linkedList.getSize() === 0 ? 0 : linkedList.getSize() - 1} onChange={(event: ChangeEvent<HTMLInputElement>) => setIndex(Number(event.target.value))} />
        </Fieldset>
        <Button variant={'red'} css={{ margin: '0 auto' }} onClick={removeIndex}>Remove</Button>
      </PopoverFlex>
      <PopoverClose aria-label="Close">
        <Cross2Icon />
      </PopoverClose>
      <PopoverArrow />
    </Popover>
  )
}
