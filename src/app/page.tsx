import Button from 'packages/components/Button';
import Stack from 'packages/components/Stack';

export default function Home() {
  return (
    <main>
      <Stack gap={4}>
        <Button>test</Button>
        <Button disabled>test</Button>
        <Button variant="ghost">test</Button>
      </Stack>
    </main>
  );
}
