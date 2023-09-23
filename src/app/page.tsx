import Button from 'packages/components/Button';
import Stack from 'packages/components/Stack';
import Heading from '@components/Heading';

export default function Home() {
  return (
    <main>
      <Stack gap={5} p={10}>
        <div>
          <Heading is="h3">Variants</Heading>
          <div>
            Primary <Button>test</Button>
          </div>
          Ghost <Button variant="ghost">test</Button>
        </div>
        <div>
          <Heading is="h3">Full Width</Heading>
          <div>
            Primary <Button isFullWidth>test</Button>
          </div>
          Ghost
          <Button isFullWidth variant="ghost">
            test
          </Button>
        </div>
        <div>
          <Heading is="h3">Disabled</Heading>
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
