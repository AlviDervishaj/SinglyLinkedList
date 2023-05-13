import { FC, ReactNode } from "react";
import { ScrollAreaRoot, ScrollAreaCorner, ScrollAreaScrollbar, ScrollAreaViewport, ScrollAreaThumb, ReversedBox } from "../Stitches";

type Props = {
  children: ReactNode,
}

export const Scroll: FC<Props> = ({ children }) => {
  return (
    <ScrollAreaRoot>
      <ScrollAreaViewport>
        <ReversedBox>
          {children}
        </ReversedBox>
      </ScrollAreaViewport>
      <ScrollAreaScrollbar orientation="vertical">
        <ScrollAreaThumb />
      </ScrollAreaScrollbar>
      <ScrollAreaScrollbar orientation="horizontal">
        <ScrollAreaThumb />
      </ScrollAreaScrollbar>
      <ScrollAreaCorner />
    </ScrollAreaRoot>
  )
}
