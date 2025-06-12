'use client';

import { useEffect, useState } from 'react';
import { Box, List, Stack, useTheme } from '@mui/material';
import UnderlineButton from '@components/ui/buttons/UnderlineButton';
import slugify from 'slugify';

const PostSidebar = () => {
  const theme = useTheme();
  const [contentList, setContentList] = useState([]);

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll('h1, h2'));
    const headings = [];
    let headingCount = 0;

    nodes.forEach((el) => {
      let id = el.id;
      if (!id) {
        id = slugify(el.textContent || '') + '-' + headingCount++;
        el.id = id;
      }

      const level = el.tagName === 'H2' ? 2 : 1;
      headings.push({ id, title: el.textContent, level });
    });

    setContentList(headings);
  }, []);

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const styles = {
    container: {
      position: 'fixed',
      top: '60%',
      right: '4%',
      transform: 'translateY(-50%)',
      zIndex: theme.zIndex.drawer + 1,
      width: '200px',
      padding: '10px',
      borderRadius: '8px',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    title: {
      ...theme.typography.h6,
      marginBottom: '10px',
      color: 'white',
    },
  };

  return (
    <Stack sx={styles.container}>
      <Box sx={styles.title}>Contents</Box>
      <List>
        {contentList.map(({ id, title, level }) => (
          <UnderlineButton
            key={id}
            title={title}
            onClick={() => handleScrollTo(id)}
            sx={{
              color: 'white',
              backgroundColor: 'transparent',
              padding: '8px',
              width: '100%',
              textAlign: 'left',
              justifyContent: 'flex-start',
              textTransform: 'none',
              wordBreak: 'break-word',
              pl: level === 2 ? 2 : 0,
            }}
          >
            {title}
          </UnderlineButton>
        ))}
      </List>
    </Stack>
  );
};

export default PostSidebar;
