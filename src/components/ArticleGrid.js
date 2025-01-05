import * as React from 'react';
import { Box, Typography, Avatar, Grid, Container } from '@mui/material';
import Link from '@mui/material/Link';

const articleData = {
  title: 'Lorem Ipsum Signals the Next Frontier in Technology',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  author: 'John Smith',
  authorRole: 'is a partner at Technology Ventures',
  followText: 'FOLLOW',
  followLinks: [
    { href: '#', color: 'success.main', text: 'X' },
    { href: '#', color: 'primary.main', text: 'LinkedIn' }
  ]
};


const ArticleCard = () => {
  return (
    <Box sx={{ mb: 6,  maxWidth:{md:500,lg:700}}}>
        <Typography 
            variant="h4" 
            component="h2" 
            sx={{ 
            mb: 2,
            fontWeight: 'bold',
            '&:hover': {
                color: '#666',
                cursor: 'pointer'
            }
            }}
        >
            {articleData.title}
        </Typography>
        
        <Typography variant="body1" sx={{ mb: 3, color: '#4a4a4a' }}>
            {articleData.content}
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Avatar 
            src="/avatar.jpg" 
            sx={{ width: 80, height: 80 }}
            />
            <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                {articleData.author}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {articleData.authorRole}
                </Typography>
            </Box>
            <Box sx={{ mt: 0.5 }}>
                <Typography 
                variant="subtitle2" 
                sx={{ 
                    color: '#666',
                    textTransform: 'uppercase',
                    letterSpacing: 0.5,
                    fontWeight: 'bold'
                }}
                >
                {articleData.followText}
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, mt: 0.5 }}>
                    <Link>
                        X
                    </Link>
                    <Typography>|</Typography>
                    <Link>
                        Linkedin
                    </Link>
                </Box>
            </Box>
            </Box>
        </Box>
    </Box>
  );
};

export default function ArticleGrid() {
  return (
    <Container maxWidth={false} sx={{ py: 4 }}>
        <div>
            {[...Array(10)].map((_, index) => (
                <div  key={index} style={{display:'flex',justifyContent:'center'}}>
                    <ArticleCard />
                </div>
            ))}
        </div>
    </Container>
  );
} 