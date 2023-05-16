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
  width: '90%',
  display: 'flex',
  flexDirection: 'column-reverse',
  margin: 'auto',
  '@md': {
    width: '100%',
  }
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
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  padding: '0 10px',
  fontSize: 12,
  lineHeight: 1,
  fontWeight: 500,
  height: 35,
  width: '90%',

  '@md': {
    fontSize: 16,
    width: '85%',
    padding: '0 15px',
  },

  variants: {
    variant: {
      green: {
        color: green.green11,
        '&:hover': { backgroundColor: green.green5 },
        '&:focus': { boxShadow: `0 0 0 2px ${green.green7}` },
      },
      red: {
        color: red.red11,
        '&:hover': { backgroundColor: red.red5 },
        '&:focus': { boxShadow: `0 0 0 2px ${red.red7}` },
      },
      white: {
        color: "black",
        '&:hover': { backgroundColor: sky.sky5 },
        '&:focus': { boxShadow: `0 0 0 2px ${sky.sky7}` },
      },
      blue: {
        color: blue.blue11,
        backgroundColor: blue.blue3,
        width: 'fit-content',
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
