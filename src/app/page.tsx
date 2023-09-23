import Button from 'packages/components/Button';
import Stack from 'packages/components/Stack';

export default function Home() {
  return (
    <main>
      <Stack gap={5} p={10}>
        <div>
          <h3>Variants</h3>
          <div>
            Primary <Button>test</Button>
          </div>
          Ghost <Button variant="ghost">test</Button>
        </div>
        <div>
          <h3>Full Width</h3>
          <div>
            Primary <Button isFullWidth>test</Button>
          </div>
          Ghost
          <Button isFullWidth variant="ghost">
            test
          </Button>
        </div>
        <div>
          <h3>Disabled</h3>
          <div>
            Primary <Button disabled>test</Button>
          </div>
          Ghost
          <Button disabled variant="ghost">
            test
          </Button>
        </div>
      </Stack>
    </main>
  );
}
