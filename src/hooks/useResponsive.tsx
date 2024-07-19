import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme, Breakpoint } from '@mui/material/styles';

// ----------------------------------------------------------------------

type ReturnType = boolean;

export type Query = 'up' | 'down' | 'between' | 'only';

export type Value = Breakpoint | number;

/**
 * Custom hook for responsive design based on Material-UI breakpoints.
 * @param {Query} query - The type of query ('up', 'down', 'between', 'only').
 * @param {Value} start - The start breakpoint or number.
 * @param {Value} end - The end breakpoint.
 * @returns {ReturnType} - The boolean value indicating if the media query matches.
 */

export function useResponsive(query: Query, start?: Value, end?: Value): ReturnType {
  const theme = useTheme();

  const mediaUp = useMediaQuery(theme.breakpoints.up(start as Value));

  const mediaDown = useMediaQuery(theme.breakpoints.down(start as Value));

  const mediaBetween = useMediaQuery(theme.breakpoints.between(start as Value, end as Value));

  const mediaOnly = useMediaQuery(theme.breakpoints.only(start as Breakpoint));

  if (query === 'up') {
    return mediaUp;
  }

  if (query === 'down') {
    return mediaDown;
  }

  if (query === 'between') {
    return mediaBetween;
  }

  return mediaOnly;
}

// ----------------------------------------------------------------------

type BreakpointOrNull = Breakpoint | null;

/**
 * Custom hook to get the current width of the screen based on Material-UI breakpoints.
 * @returns {BreakpointOrNull} - The current breakpoint or null.
 */

export function useWidth() {
  const theme = useTheme();

  const keys = [...theme.breakpoints.keys].reverse();

  return (
    keys.reduce((output: BreakpointOrNull, key: Breakpoint) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const matches = useMediaQuery(theme.breakpoints.up(key));

      return !output && matches ? key : output;
    }, null) || 'xs'
  );
}
