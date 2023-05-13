import { mauve } from "@radix-ui/colors";
import { Arrow, Content } from "@radix-ui/react-hover-card";
import { styled } from "../../stitches.config";
import { slideDownAndFade, slideLeftAndFade, slideRightAndFade, slideUpAndFade } from "./Animations";

export const HoverCardContent = styled(Content, {
  borderRadius: 6,
  padding: 20,
  width: 300,
  backgroundColor: 'white',
  boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  animationDuration: '400ms',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  willChange: 'transform, opacity',
  '&[data-state="open"]': {
    '&[data-side="top"]': { animationName: slideDownAndFade },
    '&[data-side="right"]': { animationName: slideLeftAndFade },
    '&[data-side="bottom"]': { animationName: slideUpAndFade },
    '&[data-side="left"]': { animationName: slideRightAndFade },
  },
});

export const HoverCardArrow = styled(Arrow, {
  fill: 'white',
});

export const ImageTrigger = styled('a', {
  all: 'unset',
  cursor: 'pointer',
  borderRadius: '100%',
  display: 'inline-block',
  '&:focus': { boxShadow: `0 0 0 2px white` },
});

export const ImgContainer = styled('div', {
  display: 'grid',
  placeItems: 'center',
  padding: '0.5rem',
  backgroundColor: mauve.mauve6,
  border: '1px solid black',
  borderRadius: '100%',
})

export const Img = styled('img', {
  display: 'block',
  variants: {
    size: {
      normal: { width: 30, height: 30 },
      large: { width: 60, height: 60 },
    },
  },
  defaultVariants: {
    size: 'normal',
  },
});

export const Text = styled('div', {
  margin: 0,
  color: mauve.mauve12,
  fontSize: 15,
  lineHeight: 1.5,
  variants: {
    faded: {
      true: { color: mauve.mauve10 },
    },
    bold: {
      true: { fontWeight: 500 },
    },
  },
});

export const Flex = styled('div', { display: 'flex' });
