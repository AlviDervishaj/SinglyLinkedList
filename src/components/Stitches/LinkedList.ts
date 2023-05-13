import { blackA, blue, green, red, sky } from "@radix-ui/colors";
import { styled } from "../../stitches.config.ts";

export const StyledLinkedList = styled('div', {
  backgroundColor: blue.blue9,
  borderRadius: 8,
  margin: '10px auto',
  padding: 10,
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
});

export const LinkedListLayout = styled('div', {
  width: 'fit-content',
  maxWidth: '90%',
  display: 'flex',
  flexDirection: 'column-reverse',
  margin: 'auto',
})

export const StyledLinkedListText = styled('span', {
  color: 'white',
  fontSize: 13,
  lineHeight: '15px',
  wordWrap: 'break-word',
});

export const Button = styled('button', {
  cursor: 'pointer',
  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  padding: '0 10px',
  fontSize: 12,
  lineHeight: 1,
  fontWeight: 500,
  height: 35,

  '@md': {
    fontSize: 16,
    padding: '0 15px',
  },

  variants: {
    variant: {
      green: {
        backgroundColor: green.green4,
        color: green.green11,
        '&:hover': { backgroundColor: green.green5 },
        '&:focus': { boxShadow: `0 0 0 2px ${green.green7}` },
      },
      red: {
        backgroundColor: red.red4,
        color: red.red11,
        '&:hover': { backgroundColor: red.red5 },
        '&:focus': { boxShadow: `0 0 0 2px ${red.red7}` },
      },
      white: {
        backgroundColor: "white",
        color: "black",
        '&:hover': { backgroundColor: sky.sky5 },
        '&:focus': { boxShadow: `0 0 0 2px ${sky.sky7}` },
      },
      blue: {
        backgroundColor: blue.blue4,
        color: blue.blue11,
        '&:hover': { backgroundColor: blue.blue5 },
        '&:focus': { boxShadow: `0 0 0 2px ${blue.blue7}` },
        marginTop: '1rem',
      },
    },
  },

  defaultVariants: {
    variant: 'green',
  },
})
