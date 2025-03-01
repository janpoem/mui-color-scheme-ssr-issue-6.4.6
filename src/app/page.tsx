'use client';

import ColorSchemeSwitch from '@/components/ColorSchemeSwitch';
import MuiTypography from '@/components/MuiTypography';
import { Box } from '@mui/material';

export default function Home() {
  return (
    <Box
      position={'relative'}
      display={'flex'}
      flexDirection={'column'}
      flex={1}
      sx={{ m: '0.5em' }}
    >
      <ColorSchemeSwitch />
      <MuiTypography />
    </Box>
  );
}
