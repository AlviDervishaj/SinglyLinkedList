import { orange, skyDark } from "@radix-ui/colors";
import { styled } from "../../stitches.config";

export const Layout = styled('main', {
  width: '100%',
  margin: '0 auto',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'left',
  gap: '1rem',
  alignContent: 'center',
  placeItems: 'center',
  '@md': {
    width: '50%',
  }
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
  justifySelf: 'center',
  alignSelf: 'center',
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
  fontSize: '1rem',
  color: 'white',
  '@md': {
    paddingTop: '.8rem',
    fontSize: '1.1rem',
  }
});
