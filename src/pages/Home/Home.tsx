import { Box } from '@mui/material';
import ActivityBar from './components/ActivityBar';
import Explorer from './components/Explorer';

export default function Home() {
  return (
    <Box display="flex">
      <ActivityBar />
      <Explorer />
    </Box>
  );
}
