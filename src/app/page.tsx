import Button from '../components/Button';
import Stack from '../components/Stack';
import Heading from '../components/Heading';
import { Sidebar, SidebarWrapper, SidebarContent } from '../components/Sidebar';
import Link from 'next/link';

export default function Home() {
  console.log(Sidebar.Content);
  return (
    <SidebarWrapper>
      
      <Sidebar>
        <Stack gap={1}>
          <Button is={Link} href="/">
            Home
          </Button>
          <Heading>Components</Heading>
          <Button is={Link} href="/button">
            Button
          </Button>
          <Button is={Link} href="/heading">
            Heading
          </Button>
          <Button is={Link} href="/stack">
            StackInView
          </Button>
          <Button is={Link} href="/sidebar">
            Sidebar
          </Button>
        </Stack>
      </Sidebar>
      <SidebarContent is="main">
        <Stack></Stack>
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
      </SidebarContent>
    </SidebarWrapper>
  );
}
