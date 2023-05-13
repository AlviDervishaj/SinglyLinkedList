import { orange, sky, skyDark } from "@radix-ui/colors";
import { styled } from "../../stitches.config";

export const Layout = styled('main', {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  textAlign: 'left',
  alignContent: 'center',
  placeItems: 'center',
});

export const Ul = styled('ul', {
  width: '100%',
  listStyle: 'inside',
});

export const Li = styled('li', {
  width: '100%',
  color: skyDark.sky8,
});

export const Header = styled('header', {
  textAlign: 'center',
  fontSize: 25,
  color: orange.orange5,
  fontWeight: 'bold',
  lineHeight: 1.7,
  paddingTop: '1rem',
  '@md': {
    paddingTop: '2rem',
  }
});

export const SmallText = styled('small', {
  textAlign: 'left',
  alignSelf: 'start',
  paddingLeft: '.7rem',
  fontSize: '1rem',
  color: 'white',
  '@md': {
    paddingTop: '.8rem',
    paddingLeft: '4rem',
    fontSize: '1.2rem',
  }
});
