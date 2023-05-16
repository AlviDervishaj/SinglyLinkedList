import { FC } from "react";
import { Button } from "../Stitches/LinkedList";

type Props = {
  peek: () => void,
}

export const Peek: FC<Props> = ({ peek }) => {
  return (
    <Button variant={'white'} onClick={peek}>Peek</Button>
  )
} 
