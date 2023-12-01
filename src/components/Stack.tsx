import { ReactNode } from 'react';
import cx from 'classnames';
import {
  gapOptions,
  pOptions,
  pyOptions,
  pxOptions,
  plOptions,
  prOptions,
  ptOptions,
  pbOptions,
  mOptions,
  myOptions,
  mxOptions,
  mlOptions,
  mrOptions,
  mtOptions,
  mbOptions,
} from './utils';
import { SpacingOption } from './utils/types';

interface Props {
  children: ReactNode;
  isFullHeight?: boolean;
  direction?: 'column' | 'row';
  flexGrow?: boolean;
  gap?: SpacingOption;
  p?: SpacingOption;
  py?: SpacingOption;
  px?: SpacingOption;
  pl?: SpacingOption;
  pr?: SpacingOption;
  pt?: SpacingOption;
  pb?: SpacingOption;
  m?: SpacingOption;
  my?: SpacingOption;
  mx?: SpacingOption;
  ml?: SpacingOption;
  mr?: SpacingOption;
  mt?: SpacingOption;
  mb?: SpacingOption;
}

export default function Stack({
  children,
  direction = 'column',
  isFullHeight = false,
  flexGrow,
  gap,
  p,
  py,
  px,
  pl,
  pr,
  pt,
  pb,
  m,
  my,
  mx,
  ml,
  mr,
  mt,
  mb,
}: Props) {
  return (
    <div
      className={cx('flex', {
        ['flex-col']: direction === 'column',
        ['flex-grow']: flexGrow,
        // We could use Boolean() or !! here but we've defined the types as numbers otherwise undefined
        // So type checking will break without them being one of the list anyway so we can just include it if its not undefined
        [gap ? gapOptions[gap] : '']: typeof gap !== 'undefined',
        [p ? pOptions[p] : '']: typeof p !== 'undefined',
        [py ? pyOptions[py] : '']: typeof py !== 'undefined',
        [px ? pxOptions[px] : '']: typeof px !== 'undefined',
        [pl ? plOptions[pl] : '']: typeof pl !== 'undefined',
        [pr ? prOptions[pr] : '']: typeof pr !== 'undefined',
        [pt ? ptOptions[pt] : '']: typeof pt !== 'undefined',
        [pb ? pbOptions[pb] : '']: typeof pb !== 'undefined',
        [m ? mOptions[m] : '']: typeof m !== 'undefined',
        [my ? myOptions[my] : '']: typeof my !== 'undefined',
        [mx ? mxOptions[mx] : '']: typeof mx !== 'undefined',
        [ml ? mlOptions[ml] : '']: typeof ml !== 'undefined',
        [mr ? mrOptions[mr] : '']: typeof mr !== 'undefined',
        [mt ? mtOptions[mt] : '']: typeof mt !== 'undefined',
        [mb ? mbOptions[mb] : '']: typeof mb !== 'undefined',
      })}
    >
      {children}
    </div>
  );
}
