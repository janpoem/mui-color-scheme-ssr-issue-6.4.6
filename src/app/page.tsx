'use client';

import {
  Box,
  Button,
  ButtonGroup,
  Container,
  useColorScheme,
} from '@mui/material';
import type { Mode } from '@mui/system/cssVars/useCurrentColorScheme';

const modes: Mode[] = ['system', 'light', 'dark'];

export default function Home() {
  const { mode, setMode } = useColorScheme();
  return (
    <Container>
      <Box position={'absolute'} sx={{ right: 0 }}>
        <ButtonGroup variant="outlined" size={'small'}>
          {modes.map((it) => (
            <Button
              key={`mode:${it}`}
              color={mode === it ? 'success' : 'primary'}
              onClick={() => setMode(it)}
              sx={{ textTransform: 'capitalize' }}
            >
              {it}
            </Button>
          ))}
        </ButtonGroup>
      </Box>
      <Button
        type={'button'}
        variant={'contained'}
        color={'primary'}
        className={'button'}
      >
        Test Button
      </Button>
      <Button variant={'contained'} color={'secondary'}>
        Secondary
      </Button>
    </Container>
  );
}
