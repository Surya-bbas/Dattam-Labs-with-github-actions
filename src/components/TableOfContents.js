import * as React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import { motion } from 'framer-motion';

const TableOfContents = ({activeSection}) => {
  
  


  const menuItems = [
    { title: 'Introductions', link: '#introduction' },
    { title: 'Getting Started', link: '#getting-started' },
    { title: 'Advanced Topics', link: '#advanced-topics' },
    { title: 'Best Practices', link: '#best-practices' },
    { title: 'Conclusion', link: '#conclusion' },

  ];

  return (
    <motion.div
      style={{        
        position: 'sticky',
        top: 80, 
        width: '100%'
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box 
        sx={{ 
          width: '100%',          
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
                onClick={() => document.getElementById(item.link).scrollIntoView({ behavior: "smooth" })}
                sx={{
                  p: 1,
                  '&:hover': {                    
                    borderRadius: 1
                  },
                  textDecoration: 'none',
                  color: 'inherit'
                }}
              >
                <ListItemText 
                  primary={item.title} 
                  sx={{ 
                    backgroundColor: activeSection === item.link ? 'primary.main' : '', 
                    color: activeSection === item.link ? 'white' : '', 
                    borderRadius: 1, 
                    p: 1, 
                    transition: 'background-color 0.3s ease' 
                  }} 
                />
              </ListItem>
            </motion.div>
          ))}
        </List>
      </Box>
    </motion.div>
  );
};

export default TableOfContents;
