import { blackA, mauve } from "@radix-ui/colors";
import { styled } from "../../stitches.config";
import { Root, Viewport, Scrollbar, Corner, Thumb } from "@radix-ui/react-scroll-area";

const SCROLLBAR_SIZE = 10;

export const ReversedBox = styled('div', {
  display: 'flex',
  flexDirection: 'row',
});

export const Box = styled('div', {});

export const ScrollAreaRoot = styled(Root, {
  height: '100%',
  borderRadius: 4,
  overflow: 'hidden',
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
  backgroundColor: 'white',
});

export const ScrollAreaViewport = styled(Viewport, {
  width: '100%',
  padding: '20px',
  boxSizing: 'border-box',
  height: '100%',
  borderRadius: 'inherit',
});

export const ScrollAreaScrollbar = styled(Scrollbar, {
  display: 'flex',
  userSelect: 'none',
  touchAction: 'none',
  padding: 2,
  background: blackA.blackA6,
  transition: 'background 160ms ease-out',
  '&:hover': { background: blackA.blackA8 },
  '&[data-orientation="vertical"]': { width: SCROLLBAR_SIZE },
  '&[data-orientation="horizontal"]': {
    flexDirection: 'column',
    height: SCROLLBAR_SIZE,
  },
});

export const ScrollAreaThumb = styled(Thumb, {
  flex: 1,
  background: mauve.mauve10,
  borderRadius: SCROLLBAR_SIZE,
  // increase target size for touch devices https://www.w3.org/WAI/WCAG21/Understanding/target-size.html
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    height: '100%',
    minWidth: 44,
    minHeight: 44,
  },
});

export const ScrollAreaCorner = styled(Corner, {
  background: blackA.blackA8,
});
