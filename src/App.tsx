// React
import { useRef, useState } from "react";

// Radix
import { green, mauve } from "@radix-ui/colors";

// Components
import { LinkedList } from "./components/LinkedList";
import { Header } from "./components/App";
import { Scroll } from "./components/Scroll";
import { Box, Layout, LinkedListLayout } from "./components/Stitches";
import { Text } from "./components/Stitches/Popover";
import { Length, InsertEnd, InsertBeginning, RemoveLast } from "./components/Dropdown";

// Utils
import { LinkedList as SinglyLinkedList } from "./utils/LinkedList";
import { RemoveAt } from "./components/Dropdown/RemoveAt";

type T = string;
const linkedList = new SinglyLinkedList<T>();

const boxStyling = {
  width: '90%',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'center',
  '@md': {
    width: '100%',
  }
}

function App() {
  const [message, setMessage] = useState<string>("");
  const [counter, setCounter] = useState<number>(0);
  const _ref = useRef<HTMLDivElement>(null);

  const scroll = () => {
    setTimeout(() => {
      _ref.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }

  const clearOutput = () => {
    setMessage("");
  }

  const getLength = () => {
    setMessage(`List contains ${linkedList.getSize()} elements`);
  }

  // prepend Node to the beginning of the list
  const insertBeginning = () => {
    clearOutput();
    const value: T = linkedList.prepend(`Node ${counter}`);
    setCounter(prevCounter => prevCounter + 1);
    setMessage(`Prepended ${value} to the beginnig of the list.`)
    scroll();
    return;
  }

  // remove last entered element
  const removeLast = () => {
    if (linkedList.size === 0) return setMessage("List is Empty !");
    const value: T | null = linkedList.pop();
    if (value === null) {
      setMessage("No Node removed from list.");
      return;
    }
    setMessage(`Removed ${value} from list.`);
    scroll();
    return;
  };

  // add new element to linked list
  const insertEnd = () => {
    clearOutput();
    const value: T = linkedList.append(`Node ${counter}`);
    setCounter(prevCounter => prevCounter + 1);
    setMessage(`Appended new ${value} to the end of the list.`);
    scroll();
    return;
  }

  return (
    <Layout>
      <Header />
      <Box css={{ display: 'flex', gap: '3rem', placeContent: 'center', flexDirection: 'column', width: '100%' }}>
        <Box css={{ marginTop: '2rem', width: '90%', margin: '0 auto' }}>
          <Text css={{ color: green.green9, backgroundColor: mauve.mauve1, padding: 16, fontSize: '1rem', '@md': { fontSize: '1.3rem' }, textAlign: 'center' }}>
            {message ? message : "Messages will be displayed here."}
          </Text>
        </Box>
        <LinkedListLayout>
          <Scroll>
            {linkedList.size > 0 && linkedList.toArray().map((value) => <LinkedList value={value} key={value} ref={_ref} />)}
          </Scroll>
        </LinkedListLayout>
        <Box css={boxStyling}>
          <Scroll>
            <InsertEnd appendElement={insertEnd} />
            <InsertBeginning insertBeginning={insertBeginning} />
            <Length getLength={getLength} />
            <RemoveLast removeLast={removeLast} />
            <RemoveAt setMessage={setMessage} linkedList={linkedList} clearOutput={clearOutput} />
          </Scroll>
        </Box>
      </Box>
    </Layout>
  )
}

export default App
