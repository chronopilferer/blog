'use client';

import React from 'react';
import { Box, List, Stack, useTheme } from '@mui/material';
import UnderlineButton from '@components/ui/buttons/UnderlineButton';

const ContentList = ({ content, handleScrollTo }) => (
  <List>
    {content.length === 0 ? (
      <Box sx={{ textAlign: 'center', fontWeight: 'bold', fontSize: '18px', color: 'white' }}>
        No contents available
      </Box>
    ) : (
      content.map(({ id, title }) => (
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
          }}
        >
          {title}
        </UnderlineButton>
      ))
    )}
  </List>
);

const PostSidebar = ({ content }) => {
  const theme = useTheme();

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      console.warn(`Element with ID "${id}" not found`);
    }
  };

  const styles = {
    container: {
      position: 'fixed',
      top: '60%',
      right: '3%',
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
      <ContentList content={content} handleScrollTo={handleScrollTo} />
    </Stack>
  );
};

export default PostSidebar;
