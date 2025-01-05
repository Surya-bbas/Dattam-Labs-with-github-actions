import * as React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';

const ReadMoreArticle = () => {
  const { scrollY } = useScroll();
  
  const y = useTransform(scrollY, 
    [0, 500], 
    [0, -420]   
  );

  const menuItems = [
    { title: 'Lorem Ipsum Dolor Labore', author: 'Author One' },
    { title: 'Sit Amet Consectetur Sed', author: 'Author Two' },
    { title: 'Adipiscing Elit Sed', author: 'Author Three' },
    { title: 'Do Eiusmod Tempor Ut', author: 'Author Four' },
    { title: 'Incididunt Ut Labore Eiusmod', author: 'Author Five' }
  ];

  return (
    <motion.div
      style={{
        y,
        position: 'sticky',
        top: 500, 
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
          Similar articles
        </Typography>
        <List component="nav" sx={{ p: 0 }}>
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div
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
                <Typography variant='subtitle2' >{item.title}</Typography>
                <Typography variant='body' component='p' color='textSecondary' sx={{marginRight:2}} >{item.author}</Typography>        
                <Typography variant='body'  color='warning' style={{ cursor: 'pointer' }}  > {"Read More ->"}</Typography>      



              </div>
            </motion.div>
          ))}
        </List>
      </Box>
    </motion.div>
  );
};

export default ReadMoreArticle;
