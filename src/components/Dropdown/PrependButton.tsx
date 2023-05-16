import { FC } from "react";
import { Button } from "../Stitches/LinkedList";

type Props = {
  prependElement: () => void,
}

export const PrependButton: FC<Props> = ({ prependElement }) => {
  return (
    <Button onClick={prependElement}>Prepend</Button>
  )
}
