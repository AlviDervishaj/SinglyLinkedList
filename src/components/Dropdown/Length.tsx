import { FC } from "react";
import { Button } from "../Stitches/LinkedList";

type Props = {
  getLength: () => void,
}

export const Length: FC<Props> = ({getLength}) => {
  return (
    <Button variant={'white'} onClick={getLength}>Length</Button>
  )
}
