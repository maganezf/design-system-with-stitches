import { styled } from '@/styles/stitches.config';

const Flex = styled(`div`, {
  display: `flex`,
});

const Button = styled(`button`, {
  border: `0`,
  appearance: `none`,
  cursor: `pointer`,

  transition: `background 0.2s`,
  fontWeight: `bold`,

  $$shadowColor: ``,

  variants: {
    color: {
      primary: {
        backgroundColor: `$primary`,
        color: `#fff`,
      },
      shape: {
        backgroundColor: `$shape`,
        color: `#fff`,
      },
    },
    size: {
      small: {
        padding: `$16 $32`,
      },
      full: {
        padding: `$16 $32`,
        flex: 1,
      },
    },
    radius: {
      default: {
        borderRadius: `$default`,
      },
      full: {
        borderRadius: `$full`,
      },
    },
    outlined: {
      true: {
        boxShadow: `0 0 0 2px $$shadowColor`,
      },
    },
  },

  compoundVariants: [
    {
      color: `primary`,
      outlined: true,
      css: {
        $$shadowColor: `$colors$primary`,
        background: `transparent`,
      },
    },
    {
      color: `shape`,
      outlined: true,
      css: {
        $$shadowColor: `$colors$shape`,
        background: `transparent`,
      },
    },
  ],

  defaultVariants: {
    color: `primary`,
    size: `small`,
    radius: `default`,
  },
});

export default function Home() {
  return (
    <Flex css={{ gap: `$16`, padding: `$16` }}>
      <Button type="button" outlined={false}>
        Button 1
      </Button>

      <Button color="shape" radius="full" outlined type="button">
        Button 2
      </Button>
    </Flex>
  );
}
