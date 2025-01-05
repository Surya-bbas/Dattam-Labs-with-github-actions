"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { motion, useScroll, useSpring} from "framer-motion";

export default function Navbar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    
  })

  return (
    <>
        <AppBar
        position="fixed"
        elevation={0}
        sx={{
            background: "white", 
            borderBottom: "1px solid #eaeaea",
        }}
        >
            <Toolbar>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center", 
                        flexGrow:1,                        
                        gap: 2,
                        padding: "0.5rem 1rem",
                    }}
                >
                    {/* Logo Circle */}
                    <Box
                        sx={{
                            width: 40,
                            height: 40,
                            borderRadius: "50%",
                            background:
                            "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Typography
                            variant="h6"
                            sx={{
                                color: "white",
                                fontWeight: "bold",
                            }}
                        >
                            D
                        </Typography>
                    </Box>

                    {/* Company Name */}
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{
                        color: "#333",
                        fontWeight: 600,
                        letterSpacing: "0.5px",
                        }}
                    >
                        Dattam Labs
                    </Typography>

                </Box>
            </Toolbar>
            <motion.div
                style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: 4,
                    background: "#2196F3",                    
                    originX: 0,
                    scaleX
                }}                

            />
        </AppBar>        
        <Toolbar />
    </>
  );
}
