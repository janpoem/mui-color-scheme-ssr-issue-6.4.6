import {
  Box,
  Button,
  ButtonGroup,
  useColorScheme,
  useTheme,
} from '@mui/material';
import type { Mode } from '@mui/system/cssVars/useCurrentColorScheme';

const modes: Mode[] = ['system', 'light', 'dark'];

export default function ColorSchemeSwitch() {
  const { palette, shape } = useTheme();
  const { mode, setMode } = useColorScheme();
  return (
    <Box
      position={'absolute'}
      sx={{
        right: 0,
        zIndex: 10,
        backgroundColor: palette.background.default,
        p: '4px',
        borderRadius: shape.borderRadius,
      }}
    >
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
  );
}
