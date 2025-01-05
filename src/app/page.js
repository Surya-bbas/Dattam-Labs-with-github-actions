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
import { useEffect, useState } from 'react';

const menuItems = [
  { title: 'Introductions', link: '#introduction' },
  { title: 'Getting Started', link: '#getting-started' },
  { title: 'Advanced Topics', link: '#advanced-topics' },
  { title: 'Best Practices', link: '#best-practices' },
  { title: 'Conclusion', link: '#conclusion' },
];


export default function Home() {
  const [activeSection, setActiveSection] = useState("");
  useEffect(() => {
    const sections = document.querySelectorAll("section"); 
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id); 
          }
        });
      },      
      {
        root: null,
        threshold: 0.5, 
      }
    );
  
    sections.forEach((section) => observer.observe(section));
  
    return () => observer.disconnect();
  }, []);
  
  return (
    <Container maxWidth={false}  sx={{ minHeight: '400vh'}}>

    {Array.from({ length: 5 }, (_, index) => (
      <div key={index}>

        <Container  maxWidth={false} sx={{display:'flex', justifyContent:'center',alignItems:'tracked-section'}}>

          <Box sx={{ display: 'flex', gap: 4 }}>

            <Box sx={{ width: {xs:250 , lg:300}, display: { xs: 'none', md: 'block' } }}>
              <TableOfContents activeSection={activeSection}/>
            </Box>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
          
              
            >
              
              <section  id={menuItems[index].link}  style={{scrollMarginTop: "80px", }} >
                <h1 style={{textDecoration:"underline", color:"#26599b" , fontSize:"2.5rem"}}>
                  {menuItems[index].title}                
                </h1>
              </section>
              <ArticleGrid />
            </motion.div>
            
            

            <Box sx={{ width: {xs:250 , lg:300}, display: { xs: 'none', md: 'flex' }, flexDirection:"column" , justifyContent:'center' , position:'relative', minHeight:"100vh", paddingBottom:"200px",  }}>
              <ReadMoreArticle />
            </Box>

          
          </Box>
        </Container>


        <Image src="/bg.webp" width={5} height={5} alt='img' style={{
          height:"350px",
          width:"100%",
          marginTop:"50px"
        }}></Image>
      </div>
    ))}

    </Container>
  );
}
