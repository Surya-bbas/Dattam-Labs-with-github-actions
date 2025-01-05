import * as React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';

const TableOfContents = () => {
  const { scrollY } = useScroll();
  

  const y = useTransform(scrollY, 
    [0, 500], 
    [40, 30]   
  );

  const menuItems = [
    { title: 'Introduction', link: '#introduction' },
    { title: 'Getting Started', link: '#getting-started' },
    { title: 'Advanced Topics', link: '#advanced-topics' },
    { title: 'Best Practices', link: '#best-practices' },
    { title: 'Conclusion', link: '#conclusion' }
  ];

  return (
    <motion.div
      style={{
        y,
        position: 'sticky',
        top: 40, 
        width: '100%'
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box 
        sx={{ 
          width: '100%',
          bgcolor: 'background.paper',
          borderRadius: 2,
          boxShadow: '0 0 10px rgba(0,0,0,0.1)',
          p: 2
        }}
      >
        <Typography
          variant="h6"
          component="h2"
          sx={{
            fontWeight: 'bold',
            mb: 2,
            borderBottom: '2px solid #eaeaea',
            pb: 1
          }}
        >
          Table of Contents
        </Typography>
        <List component="nav" sx={{ p: 0 }}>
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <ListItem
                component="a"
                href={item.link}
                sx={{
                  p: 1,
                  '&:hover': {
                    bgcolor: 'rgba(0, 0, 0, 0.04)',
                    borderRadius: 1
                  },
                  textDecoration: 'none',
                  color: 'inherit'
                }}
              >
                <ListItemText primary={item.title} />
              </ListItem>
            </motion.div>
          ))}
        </List>
      </Box>
    </motion.div>
  );
};

export default TableOfContents;
