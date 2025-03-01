import {
  Box,
  type BoxProps,
  Button,
  ButtonGroup,
  type ButtonGroupProps,
  type ButtonProps,
  Checkbox,
  CircularProgress,
  Divider,
  FormControlLabel,
  FormGroup,
  LinearProgress,
  Radio,
  TextField,
  type TextFieldProps,
  type TextFieldVariants,
} from '@mui/material';
import { useState } from 'react';

const colors: ButtonProps['color'][] = [
  'primary',
  'secondary',
  'success',
  'error',
  'warning',
  'info',
];

const buttonVariants: ButtonProps['variant'][] = [
  'contained',
  'text',
  'outlined',
];
const inputVariants: TextFieldVariants[] = ['outlined', 'standard', 'filled'];

const gap = '0.5em';

type CheckboxValue = string | number;

type ValueMap = Record<CheckboxValue, boolean | undefined>;

export default function MuiTypography() {
  const [checkboxValues, setCheckboxValues] = useState<ValueMap>({ 1: true });
  const [radioValues, setRadioValues] = useState<ValueMap>({ c: true });

  return (
    <Box display={'flex'} flexDirection={'column'} sx={{ gap: '1em' }}>
      <Divider>Buttons</Divider>
      {buttonVariants.map((variant) => (
        <Buttons key={`buttons:${variant}`} variant={variant} />
      ))}
      <Divider>ButtonGroup</Divider>
      <Box
        display={'flex'}
        flexDirection={'column'}
        alignItems={'start'}
        gap={gap}
      >
        {buttonVariants.map((variant) => (
          <Buttons key={`button_group:${variant}`} variant={variant} group />
        ))}
      </Box>
      <Divider>Inputs</Divider>
      <Box display={'flex'} gap={gap}>
        {inputVariants.map((variant) => (
          <Inputs key={`inputs:${variant}`} variant={variant} />
        ))}
      </Box>
      <Divider>Checkbox</Divider>
      <CheckboxExample
        values={checkboxValues}
        onChange={(map) => setCheckboxValues((prev) => ({ ...prev, ...map }))}
      />
      <Divider>Radio</Divider>
      <RadioExample
        values={radioValues}
        onChange={(next) => setRadioValues(next)}
      />
      <Divider>Progress</Divider>
      <Box display={'flex'} gap={gap}>
        <Box display={'flex'} flex={'1 1 50%'}>
          <LinearProgress sx={{ width: '100%' }} />
        </Box>
        <Box display={'flex'} flex={'1 1 50%'}>
          <CircularProgress />
        </Box>
      </Box>
    </Box>
  );
}

function Buttons({
  group = false,
  variant,
}: { group?: boolean; variant?: ButtonProps['variant'] }) {
  const Wrapper = group ? ButtonGroup : Box;
  const wrapperProps = group
    ? ({ variant } as ButtonGroupProps)
    : ({ display: 'flex', sx: { gap } } as BoxProps);
  const buttonProps = group ? {} : { variant };

  return (
    // @ts-ignore Wrapper
    <Wrapper {...wrapperProps}>
      {colors.map((color) => (
        <Button
          {...buttonProps}
          key={`color:${color}`}
          color={color}
          sx={{ textTransform: 'capitalize' }}
        >
          {color} button
        </Button>
      ))}
    </Wrapper>
  );
}

function Inputs({ variant }: { variant?: TextFieldProps['variant'] }) {
  return (
    <Box display={'flex'} flexDirection={'column'} flex={'1 1'} gap={gap}>
      <TextField
        placeholder={`${variant} input`}
        variant={variant}
        label={`${variant}`}
      />
      <TextField
        placeholder={`${variant} disabled input`}
        disabled
        variant={variant}
        label={`${variant} disabled`}
      />
      <TextField
        placeholder={`${variant} readOnly input`}
        variant={variant}
        label={`${variant} readOnly`}
        inputProps={{ readOnly: true }}
      />
    </Box>
  );
}

function CheckboxExample({
  values,
  onChange,
}: { values: ValueMap; onChange?: (changed: ValueMap) => void }) {
  const handleChange =
    (value: CheckboxValue) => (_ev: unknown, checked: boolean) => {
      onChange?.({ [value]: checked });
    };

  return (
    <FormGroup row>
      <FormControlLabel
        control={<Checkbox />}
        checked={!!values[1]}
        label={'Yes'}
        value={1}
        onChange={handleChange(1)}
      />
      <FormControlLabel
        control={<Checkbox />}
        checked={!!values[0]}
        label={'No'}
        value={0}
        onChange={handleChange(0)}
      />
      <FormControlLabel
        control={<Checkbox />}
        checked={!!values[-1]}
        label={'Disabled'}
        value={-1}
        disabled
      />
    </FormGroup>
  );
}

function RadioExample({
  values,
  onChange,
}: { values: ValueMap; onChange?: (changed: ValueMap) => void }) {
  const handleChange =
    (value: CheckboxValue) => (_ev: unknown, checked: boolean) => {
      onChange?.({ [value]: checked });
    };

  return (
    <FormGroup row>
      {['a', 'b', 'c', 'd'].map((value, idx) => (
        <FormControlLabel
          key={`radio_${value}`}
          control={<Radio />}
          checked={!!values[value]}
          label={`item ${value}`}
          value={value}
          onChange={handleChange(value)}
        />
      ))}
    </FormGroup>
  );
}
