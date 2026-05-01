const SIZE_REM = { sm: 2, md: 4, lg: 6, xl: 10 };

export default function Spacer({ size = 'md' }) {
  const rem = SIZE_REM[size] ?? SIZE_REM.md;
  return <div aria-hidden="true" style={{ height: `${rem}rem` }} />;
}
