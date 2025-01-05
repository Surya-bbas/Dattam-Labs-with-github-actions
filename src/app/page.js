"use client"
import * as React from 'react';
import Container from '@mui/material/Container';
import ArticleGrid from '@/components/ArticleGrid';
import TableOfContents from '@/components/TableOfContents';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';
import "./global.css"
import ReadMoreArticle from '@/components/ReadMoreArticle';

export default function Home() {
  return (
    <Container maxWidth={false}  sx={{ minHeight: '400vh'}}>
      <Container maxWidth={false} sx={{display:'flex', justifyContent:'center',alignItems:'center'}}>

        <Box sx={{ display: 'flex', gap: 4 }}>

          <Box sx={{ width: {xs:250 , lg:300}, display: { xs: 'none', md: 'block' } }}>
            <TableOfContents />
          </Box>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        
            
          >
            <ArticleGrid />
          </motion.div>
          
          

          <Box sx={{ width: {xs:250 , lg:300}, display: { xs: 'none', md: 'block' } }}>
            <ReadMoreArticle />
          </Box>

        
        </Box>
      </Container>


      <Image src="/bg.webp" width={5} height={5} alt='img' style={{
        height:"350px",
        width:"100%",
        marginTop:"50px"
      }}></Image>

    </Container>
  );
}
