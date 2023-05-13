// React
import { useCallback, useRef, useState } from "react";

// Radix
import { Cross2Icon } from "@radix-ui/react-icons";
import { crimson, skyDark } from "@radix-ui/colors";

// Components
import { LinkedList, LinkedListRef } from "./components/LinkedList";
import { Scroll } from "./components/Scroll";
import { Box, Layout, LinkedListLayout, PopoverArrow, PopoverClose, PopoverFlex, PopoverText } from "./components/Stitches";
import { Header, SmallText, Ul, Li } from "./components/Stitches/App";
import { Button } from "./components/Stitches/LinkedList";
import { Fieldset, Input, Label, Text } from "./components/Stitches/Popover";
import { Popover } from "./components/Popover";

// Utils
import { Node, LinkedList as SinglyLinkedList } from "./utils/LinkedList";

function App() {
  const [linkedList, setLinkedList] = useState<SinglyLinkedList<string>>(new SinglyLinkedList<string>());
  const [nodeDataToSearch, setNodeDataToSearch] = useState<string>("");
  const [error, setError] = useState<string>("");
  const _ref = useRef<HTMLDivElement>(null);

  // remove last entered element
  const removeElementFromStack = useCallback(() => {
    console.log({linkedList});
    linkedList.pop();
    setLinkedList(linkedList);
  }, [linkedList]);
  const peekElement = useCallback(() => {
    console.log({linkedList});
    if (nodeDataToSearch === "") {
      setError("Please enter a value to search for.");
      return;
    }
    const node = linkedList.peek();
    if (node === null) {
      setError(`No element with data ${nodeDataToSearch} found.`);
      return;
    }
    setError("");
    setLinkedList(linkedList);
    return;
  }, [linkedList]);

  // add new element to stack
  const addElementToStack = useCallback(() => {
    // add Node to stack
    setLinkedList(linkedList.push(`Node ${linkedList.length + 1}`));
    console.log({linkedList});
    return;
  }, [linkedList]);

  return (
    <Layout>
      <Header>Singly Linked List</Header>
      <SmallText>
        This is a visual representation of a
        "Singly Linked List".
      </SmallText>
      <SmallText>
        Click the button below to get some information on how it works.
      </SmallText>
      <Popover text="Get more info." variant="blue">
        <PopoverFlex css={{ flexDirection: 'column', gap: 10 }}>
          <PopoverText css={{ marginBottom: 10 }}>Singly Linked List Visualization</PopoverText>
          <Box css={{ fontWeight: "400", letterSpacing: 1, wordBreak: 'break-word', wordSpacing: 5 }}>
            <Text css={{ display: 'inline', fontWeight: "400", letterSpacing: 1, wordBreak: 'break-word', wordSpacing: 5 }}>
            Below you can see a Singly Linked List visualized.
            It probably is empty, which can be determined by either pressing the
            </Text>
            <Text css={{ display: 'inline', color: skyDark.sky8, fontWeight: "400", letterSpacing: 1, wordBreak: 'break-word', wordSpacing: 5 }}> Get Length</Text> Button or checking if the visual below contains only one
            <Text css={{ display: 'inline', fontWeight: "400", letterSpacing: 1, wordBreak: 'break-word', wordSpacing: 5 }}>
            element which is the NULL element.
            </Text>
          </Box>
          <PopoverText css={{ marginTop: 10 }}>How To Use</PopoverText>
          <Ul>
            <Li>Press Add to add a new element to the list.</Li>
            <Li>Press Peek button and enter an index to see the element in that index.</Li>
            <Li>Press Remove button to remove the last entered element of the list.</Li>
            <Li>Press Remove Index button to remove an element at a given index.</Li>
            <Li>Press Length button to get the length of the Singly Linked List</Li>
          </Ul>
        </PopoverFlex>
        <PopoverClose aria-label="Close">
          <Cross2Icon />
        </PopoverClose>
        <PopoverArrow />
      </Popover>
      <LinkedListLayout>
        <Scroll>
          {linkedList.length > 0 && linkedList.toArray().map((data: Node<string>) => <LinkedList linkedList={data} key={data.value} />)}
          <LinkedListRef ref={_ref} />
        </Scroll>
      </LinkedListLayout>
      <Box css={{ display: 'flex', width: '100%', paddingBottom: '10rem', gap: '1rem', justifyContent: 'center', paddingTop: '2rem' }}>
        <Button onClick={addElementToStack}>Add</Button>

        <Popover text="Peek" variant="white">
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
            <Button onClick={peekElement}>Peek Element</Button>
          </PopoverFlex>
          <PopoverClose aria-label="Close">
            <Cross2Icon />
          </PopoverClose>
          <PopoverArrow />
        </Popover>
        <Button variant={'red'} onClick={removeElementFromStack}>Remove</Button>
        <Popover />
      </Box>
    </Layout>
  )
}

export default App
