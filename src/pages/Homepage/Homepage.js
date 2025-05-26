import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import CodeIcon from '@mui/icons-material/Code';
import CollectionsIcon from '@mui/icons-material/Collections';
import EmailIcon from '@mui/icons-material/Email';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import SendIcon from '@mui/icons-material/Send';
import StorageIcon from '@mui/icons-material/Storage';
import SubjectIcon from '@mui/icons-material/Subject';
import WebIcon from '@mui/icons-material/Web';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  Chip,
  Container,
  Divider,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
  Tooltip,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import React, { useContext, useEffect, useRef } from 'react';
import { ThemeContext } from '../../components/theme/ThemeContext';

// Main component for the homepage
const HomePage = () => {
  const { darkMode } = useContext(ThemeContext);
  const controls = useAnimation();
  const isMobile = useMediaQuery('(max-width:600px)');
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  // Animation to start on page load
  useEffect(() => {
    controls.start({
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    });
  }, [controls]);

  // Scroll to projects section
  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Scroll to contact section
  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Technical skills data
  const frontendSkills = [
    'React',
    'Angular',
    'JavaScript',
    'TypeScript',
    'HTML5',
    'CSS3',
    'Material UI',
    'Tailwind CSS',
  ];
  const backendSkills = [
    'Node.js',
    'Express',
    'Python',
    'Django',
    'Java',
    'Spring Boot',
    'RESTful APIs',
    'GraphQL',
  ];
  const databaseSkills = [
    'MongoDB',
    'PostgreSQL',
    'MySQL',
    'Firebase',
    'Redis',
    'AWS DynamoDB',
  ];

  // Project data
  const projects = [
    {
      title: 'Snapnets',
      description:
        'A full-stack social media with image bidding platform with payment integration and user authentication.',
      skills: ['React', 'Node.js', 'MongoDB', 'Express', 'Khalti'],
      icon: <WebIcon fontSize='large' />,
      link: 'https://github.com/AbhigyaShrestha2060/Snapnets-Frontend',
    },
    {
      title: 'Home Bike Service',
      description:
        'A full-stack web application for booking home bike services with user authentication, admin dashboard and mechanic dashbaord.',
      skills: ['React', 'Flutter', 'Express', 'Khalti', 'MongoDB', 'Node.js'],
      icon: <StorageIcon fontSize='large' />,
      link: 'https://github.com/AbhigyaShrestha2060/HomeBikeServiceAPI',
    },
    {
      title: 'Portfolio Website',
      description:
        'A responsive portfolio website with animated components and dark/light mode toggle.',
      skills: ['React', 'Material UI', 'Framer Motion', 'CSS3'],
      icon: <CodeIcon fontSize='large' />,
    },
  ];

  const openProjectLink = (link) => {
    window.open(link, '_blank');
  };

  return (
    <Box
      sx={{
        backgroundColor: darkMode ? '#282a36' : '#e4e9f0',
        minHeight: '100vh',
        overflow: 'hidden',
        pb: 8,
      }}>
      {/* Hero Section */}
      <Container maxWidth='lg'>
        <Grid
          container
          spacing={4}
          alignItems='center'
          sx={{ minHeight: '92vh' }}>
          <Grid
            item
            xs={12}
            md={6}>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={controls}>
              <Typography
                variant='h2'
                component='h1'
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  textShadow: darkMode
                    ? '0px 2px 10px rgba(139, 233, 253, 0.3)'
                    : 'none',
                  position: 'relative',
                }}>
                Hi, I'm{' '}
                <Box
                  component='span'
                  sx={{
                    color: darkMode ? '#8be9fd' : '#0277bd',
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      width: '100%',
                      height: '4px',
                      bottom: '-6px',
                      left: 0,
                      backgroundColor: darkMode ? '#bd93f9' : '#6a1b9a',
                      borderRadius: '2px',
                    },
                  }}>
                  Abhigya Shrestha
                </Box>
              </Typography>

              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}>
                <Typography
                  variant='h4'
                  sx={{
                    mb: 3,
                    color: darkMode ? '#abb2bf' : '#2d3748',
                    fontWeight: 500,
                  }}>
                  Full Stack Web Developer
                </Typography>
              </motion.div>

              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}>
                <Typography
                  variant='body1'
                  sx={{
                    mb: 4,
                    fontSize: '1.1rem',
                    lineHeight: 1.6,
                    maxWidth: '550px',
                  }}>
                  I craft robust web applications with modern technologies,
                  turning complex problems into elegant solutions. Passionate
                  about creating seamless user experiences backed by scalable
                  architecture.
                </Typography>
              </motion.div>

              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}>
                <Box sx={{ display: 'flex', gap: 2, mt: 2, flexWrap: 'wrap' }}>
                  <Button
                    variant='contained'
                    color='primary'
                    size='large'
                    onClick={scrollToProjects}
                    sx={{
                      px: 3,
                      py: 1,
                      position: 'relative',
                      overflow: 'hidden',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: '-100%',
                        width: '100%',
                        height: '100%',
                        background:
                          'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                        animation: 'shine 2s infinite',
                      },
                      '@keyframes shine': {
                        '0%': {
                          left: '-100%',
                        },
                        '100%': {
                          left: '100%',
                        },
                      },
                    }}>
                    View My Work
                  </Button>
                  <Button
                    variant='outlined'
                    color='secondary'
                    size='large'
                    onClick={scrollToContact}
                    sx={{ px: 3, py: 1 }}>
                    Contact Me
                  </Button>
                </Box>
              </motion.div>

              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}>
                <Box sx={{ display: 'flex', gap: 2, mt: 4 }}>
                  <IconButton
                    color='primary'
                    sx={{
                      border: `1px solid ${darkMode ? '#8be9fd' : '#0277bd'}`,
                      transition: 'transform 0.3s',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                      },
                    }}>
                    <GitHubIcon />
                  </IconButton>
                  <IconButton
                    color='primary'
                    sx={{
                      border: `1px solid ${darkMode ? '#8be9fd' : '#0277bd'}`,
                      transition: 'transform 0.3s',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                      },
                    }}>
                    <LinkedInIcon />
                  </IconButton>
                  <IconButton
                    color='primary'
                    sx={{
                      border: `1px solid ${darkMode ? '#8be9fd' : '#0277bd'}`,
                      transition: 'transform 0.3s',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                      },
                    }}>
                    <EmailIcon />
                  </IconButton>
                </Box>
              </motion.div>
            </motion.div>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: { xs: 'none', md: 'block' } }}>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}>
              <Box
                sx={{
                  position: 'relative',
                  height: '400px',
                  width: '100%',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  background: darkMode
                    ? 'linear-gradient(135deg, rgba(189,147,249,0.2) 0%, rgba(139,233,253,0.2) 100%)'
                    : 'linear-gradient(135deg, rgba(106,27,154,0.1) 0%, rgba(2,119,189,0.1) 100%)',
                  boxShadow: darkMode
                    ? '0 20px 80px rgba(0,0,0,0.3)'
                    : '0 10px 30px rgba(0,0,0,0.1)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                {/* Animated code symbols background */}
                <Box
                  sx={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    opacity: 0.1,
                  }}>
                  {Array.from({ length: 30 }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{
                        x: Math.random() * 400,
                        y: Math.random() * 400,
                        opacity: Math.random() * 0.7 + 0.3,
                      }}
                      animate={{
                        y: [Math.random() * 400, Math.random() * 400],
                        x: [Math.random() * 400, Math.random() * 400],
                        opacity: [
                          Math.random() * 0.5 + 0.2,
                          Math.random() * 0.8 + 0.2,
                        ],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: Math.random() * 10 + 15,
                        ease: 'linear',
                      }}
                      style={{
                        position: 'absolute',
                        fontSize: `${Math.random() * 20 + 10}px`,
                        color: darkMode ? '#bd93f9' : '#6a1b9a',
                      }}>
                      {
                        [
                          '{ }',
                          '[ ]',
                          '( )',
                          '</>',
                          '//',
                          '/*',
                          '*/',
                          '=>',
                          '&&',
                          '||',
                        ][Math.floor(Math.random() * 10)]
                      }
                    </motion.div>
                  ))}
                </Box>

                {/* Developer illustration placeholder */}
                <Box
                  sx={{
                    width: '80%',
                    height: '80%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 2,
                    position: 'relative',
                  }}>
                  <Avatar
                    sx={{
                      width: 350,
                      height: 350,
                      mb: 3,
                      border: `4px solid ${darkMode ? '#8be9fd' : '#0277bd'}`,
                      boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
                    }}>
                    <img
                      src='/assets/images/me.jpg'
                      alt='Abhigya Shrestha'
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />{' '}
                  </Avatar>
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mt: -6,
            mb: 8,
            cursor: 'pointer',
          }}
          onClick={scrollToProjects}>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}>
            <IconButton
              size='large'
              sx={{
                color: darkMode ? '#8be9fd' : '#0277bd',
                border: `2px solid ${darkMode ? '#8be9fd' : '#0277bd'}`,
                borderRadius: '50%',
                p: 1,
              }}>
              <ArrowDownwardIcon fontSize='medium' />
            </IconButton>
          </motion.div>
        </Box>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}>
          <Typography
            variant='h3'
            sx={{
              textAlign: 'center',
              mb: 5,
              fontWeight: 600,
              position: 'relative',
              display: 'inline-block',
              left: '50%',
              transform: 'translateX(-50%)',
              '&::after': {
                content: '""',
                position: 'absolute',
                width: '60px',
                height: '4px',
                bottom: '-10px',
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: darkMode ? '#bd93f9' : '#6a1b9a',
                borderRadius: '2px',
              },
            }}>
            Technical Skills
          </Typography>

          <Grid
            container
            direction='column'
            spacing={4}>
            <Grid
              item
              xs={12}>
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}>
                <Card
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: darkMode
                        ? '0 15px 30px rgba(0,0,0,0.4)'
                        : '0 10px 25px rgba(0,0,0,0.15)',
                    },
                  }}>
                  <CardContent>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mb: 2,
                        gap: 1,
                      }}>
                      <WebIcon
                        fontSize='large'
                        sx={{ color: darkMode ? '#8be9fd' : '#0277bd' }}
                      />
                      <Typography
                        variant='h5'
                        sx={{ fontWeight: 600 }}>
                        Frontend
                      </Typography>
                    </Box>
                    <Divider sx={{ mb: 2 }} />
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {frontendSkills.map((skill) => (
                        <Chip
                          key={skill}
                          label={skill}
                          sx={{
                            background: darkMode
                              ? 'linear-gradient(90deg, rgba(139,233,253,0.1), rgba(139,233,253,0.2))'
                              : 'linear-gradient(90deg, rgba(2,119,189,0.1), rgba(2,119,189,0.2))',
                            border: `1px solid ${
                              darkMode
                                ? 'rgba(139,233,253,0.3)'
                                : 'rgba(2,119,189,0.3)'
                            }`,
                            margin: '4px',
                            transition: 'all 0.3s',
                            '&:hover': {
                              transform: 'translateY(-3px)',
                              background: darkMode
                                ? 'linear-gradient(90deg, rgba(139,233,253,0.2), rgba(139,233,253,0.3))'
                                : 'linear-gradient(90deg, rgba(2,119,189,0.2), rgba(2,119,189,0.3))',
                            },
                          }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>

            <Grid
              item
              xs={12}>
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}>
                <Card
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: darkMode
                        ? '0 15px 30px rgba(0,0,0,0.4)'
                        : '0 10px 25px rgba(0,0,0,0.15)',
                    },
                  }}>
                  <CardContent>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mb: 2,
                        gap: 1,
                      }}>
                      <CodeIcon
                        fontSize='large'
                        sx={{ color: darkMode ? '#bd93f9' : '#6a1b9a' }}
                      />
                      <Typography
                        variant='h5'
                        sx={{ fontWeight: 600 }}>
                        Backend
                      </Typography>
                    </Box>
                    <Divider sx={{ mb: 2 }} />
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {backendSkills.map((skill) => (
                        <Chip
                          key={skill}
                          label={skill}
                          sx={{
                            background: darkMode
                              ? 'linear-gradient(90deg, rgba(189,147,249,0.1), rgba(189,147,249,0.2))'
                              : 'linear-gradient(90deg, rgba(106,27,154,0.1), rgba(106,27,154,0.2))',
                            border: `1px solid ${
                              darkMode
                                ? 'rgba(189,147,249,0.3)'
                                : 'rgba(106,27,154,0.3)'
                            }`,
                            margin: '4px',
                            transition: 'all 0.3s',
                            '&:hover': {
                              transform: 'translateY(-3px)',
                              background: darkMode
                                ? 'linear-gradient(90deg, rgba(189,147,249,0.2), rgba(189,147,249,0.3))'
                                : 'linear-gradient(90deg, rgba(106,27,154,0.2), rgba(106,27,154,0.3))',
                            },
                          }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>

            <Grid
              item
              xs={12}>
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}>
                <Card
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: darkMode
                        ? '0 15px 30px rgba(0,0,0,0.4)'
                        : '0 10px 25px rgba(0,0,0,0.15)',
                    },
                  }}>
                  <CardContent>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mb: 2,
                        gap: 1,
                      }}>
                      <StorageIcon
                        fontSize='large'
                        sx={{ color: darkMode ? '#50fa7b' : '#2e7d32' }}
                      />
                      <Typography
                        variant='h5'
                        sx={{ fontWeight: 600 }}>
                        Database
                      </Typography>
                    </Box>
                    <Divider sx={{ mb: 2 }} />
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {databaseSkills.map((skill) => (
                        <Chip
                          key={skill}
                          label={skill}
                          sx={{
                            background: darkMode
                              ? 'linear-gradient(90deg, rgba(80,250,123,0.1), rgba(80,250,123,0.2))'
                              : 'linear-gradient(90deg, rgba(46,125,50,0.1), rgba(46,125,50,0.2))',
                            border: `1px solid ${
                              darkMode
                                ? 'rgba(80,250,123,0.3)'
                                : 'rgba(46,125,50,0.3)'
                            }`,
                            margin: '4px',
                            transition: 'all 0.3s',
                            '&:hover': {
                              transform: 'translateY(-3px)',
                              background: darkMode
                                ? 'linear-gradient(90deg, rgba(80,250,123,0.2), rgba(80,250,123,0.3))'
                                : 'linear-gradient(90deg, rgba(46,125,50,0.2), rgba(46,125,50,0.3))',
                            },
                          }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>

        {/* Projects Section */}
        <Box
          ref={projectsRef}
          sx={{ mt: 12, px: { xs: 2, md: 4 } }}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}>
            <Typography
              variant='h3'
              sx={{
                textAlign: 'center',
                mb: 6,
                fontWeight: 700,
                position: 'relative',
                display: 'inline-block',
                left: '50%',
                transform: 'translateX(-50%)',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  width: '80px',
                  height: '4px',
                  bottom: '-12px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  backgroundColor: darkMode ? '#bd93f9' : '#6a1b9a',
                  borderRadius: '2px',
                },
              }}>
              Featured Projects
            </Typography>

            <Grid
              container
              direction='column'
              spacing={5}>
              {projects.map((project, index) => (
                <Grid
                  item
                  xs={12}
                  key={index}>
                  <motion.div
                    initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}>
                    <Card
                      sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        transition: 'transform 0.3s, box-shadow 0.3s',
                        position: 'relative',
                        overflow: 'hidden',
                        borderRadius: '12px',
                        '&:hover': {
                          transform: 'translateY(-8px)',
                          boxShadow: darkMode
                            ? '0 15px 30px rgba(0,0,0,0.4)'
                            : '0 10px 25px rgba(0,0,0,0.15)',
                        },
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '4px',
                          height: '100%',
                          background: darkMode
                            ? `linear-gradient(to bottom, #8be9fd, ${
                                index % 3 === 0
                                  ? '#bd93f9'
                                  : index % 3 === 1
                                  ? '#50fa7b'
                                  : '#ff79c6'
                              })`
                            : `linear-gradient(to bottom, #0277bd, ${
                                index % 3 === 0
                                  ? '#6a1b9a'
                                  : index % 3 === 1
                                  ? '#2e7d32'
                                  : '#c2185b'
                              })`,
                        },
                      }}>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          p: 3,
                          minWidth: { sm: '150px' },
                          backgroundColor: darkMode
                            ? 'rgba(40, 42, 54, 0.6)'
                            : 'rgba(245, 245, 245, 0.7)',
                        }}>
                        <Box
                          sx={{
                            width: '80px',
                            height: '80px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '50%',
                            backgroundColor: darkMode
                              ? 'rgba(189, 147, 249, 0.15)'
                              : 'rgba(106, 27, 154, 0.1)',
                            boxShadow: darkMode
                              ? '0 8px 16px rgba(0,0,0,0.3)'
                              : '0 6px 12px rgba(0,0,0,0.1)',
                          }}>
                          {React.cloneElement(project.icon, {
                            style: {
                              fontSize: '42px',
                              color: darkMode ? '#bd93f9' : '#6a1b9a',
                            },
                          })}
                        </Box>
                      </Box>

                      <CardContent
                        sx={{
                          flexGrow: 1,
                          p: 3,
                          pl: { sm: 4 },
                          display: 'flex',
                          flexDirection: 'column',
                        }}>
                        <Typography
                          variant='h5'
                          sx={{
                            fontWeight: 700,
                            mb: 2,
                            background: darkMode
                              ? 'linear-gradient(90deg, #bd93f9, #8be9fd)'
                              : 'linear-gradient(90deg, #6a1b9a, #0277bd)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                          }}>
                          {project.title}
                        </Typography>

                        <Typography
                          variant='body1'
                          sx={{
                            mb: 3,
                            lineHeight: 1.7,
                            color: darkMode
                              ? 'rgba(248, 248, 242, 0.85)'
                              : 'rgba(0, 0, 0, 0.7)',
                          }}>
                          {project.description}
                        </Typography>

                        <Box
                          sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: 1,
                            mt: 'auto',
                            mb: 2,
                          }}>
                          {project.skills.map((skill) => (
                            <Chip
                              key={skill}
                              label={skill}
                              size='small'
                              sx={{
                                fontSize: '0.75rem',
                                height: '26px',
                                fontWeight: 500,
                                background: darkMode
                                  ? 'rgba(139, 233, 253, 0.1)'
                                  : 'rgba(2, 119, 189, 0.1)',
                                border: `1px solid ${
                                  darkMode
                                    ? 'rgba(139, 233, 253, 0.3)'
                                    : 'rgba(2, 119, 189, 0.3)'
                                }`,
                                borderRadius: '16px',
                                transition: 'all 0.2s',
                                '&:hover': {
                                  transform: 'translateY(-2px)',
                                  background: darkMode
                                    ? 'rgba(139, 233, 253, 0.2)'
                                    : 'rgba(2, 119, 189, 0.2)',
                                },
                              }}
                            />
                          ))}
                        </Box>

                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            mt: 'auto',
                          }}>
                          <Button
                            variant='outlined'
                            color='primary'
                            size='medium'
                            endIcon={<ArrowForwardIcon />}
                            onClick={() => openProjectLink(project.link)}
                            sx={{
                              textTransform: 'none',
                              fontWeight: 600,
                              borderRadius: '8px',
                              px: 3,
                              py: 0.75,
                              position: 'relative',
                              overflow: 'hidden',
                              borderWidth: '1.5px',
                              '&::before': {
                                content: '""',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                background: darkMode
                                  ? 'linear-gradient(90deg, rgba(139, 233, 253, 0.1), rgba(189, 147, 249, 0.1))'
                                  : 'linear-gradient(90deg, rgba(2, 119, 189, 0.05), rgba(106, 27, 154, 0.05))',
                                transform: 'translateX(-100%)',
                                transition: 'transform 0.3s ease',
                              },
                              '&:hover::before': {
                                transform: 'translateX(0)',
                              },
                              '& .MuiButton-endIcon': {
                                transition: 'transform 0.2s ease',
                              },
                              '&:hover .MuiButton-endIcon': {
                                transform: 'translateX(4px)',
                              },
                            }}>
                            View Project
                          </Button>
                        </Box>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>

            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 8 }}>
              <Button
                variant='contained'
                color='secondary'
                size='large'
                endIcon={<CollectionsIcon />}
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: '30px',
                  fontWeight: 600,
                  textTransform: 'none',
                  fontSize: '1rem',
                  boxShadow: darkMode
                    ? '0 8px 16px rgba(189, 147, 249, 0.3)'
                    : '0 8px 16px rgba(106, 27, 154, 0.2)',
                  position: 'relative',
                  overflow: 'hidden',
                  background: darkMode
                    ? 'linear-gradient(45deg, rgba(189, 147, 249, 0.9), rgba(139, 233, 253, 0.9))'
                    : 'linear-gradient(45deg, rgba(106, 27, 154, 0.9), rgba(2, 119, 189, 0.9))',
                  '&:hover': {
                    background: darkMode
                      ? 'linear-gradient(45deg, rgba(189, 147, 249, 1), rgba(139, 233, 253, 1))'
                      : 'linear-gradient(45deg, rgba(106, 27, 154, 1), rgba(2, 119, 189, 1))',
                    boxShadow: darkMode
                      ? '0 10px 20px rgba(189, 147, 249, 0.4)'
                      : '0 10px 20px rgba(106, 27, 154, 0.3)',
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    width: '30%',
                    height: '100%',
                    top: 0,
                    left: '-100%',
                    background: 'rgba(255, 255, 255, 0.2)',
                    transform: 'skewX(-25deg)',
                    transition: 'all 0.7s ease',
                  },
                  '&:hover::after': {
                    left: '100%',
                  },
                }}>
                View All Projects
              </Button>
            </Box>
          </motion.div>
        </Box>

        {/* Contact Section */}
        <Box
          ref={contactRef}
          sx={{ mt: 12 }}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}>
            <Typography
              variant='h3'
              sx={{
                textAlign: 'center',
                mb: 5,
                fontWeight: 600,
                position: 'relative',
                display: 'inline-block',
                left: '50%',
                transform: 'translateX(-50%)',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  width: '60px',
                  height: '4px',
                  bottom: '-10px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  backgroundColor: darkMode ? '#bd93f9' : '#6a1b9a',
                  borderRadius: '2px',
                },
              }}>
              Get In Touch
            </Typography>

            <Grid
              container
              spacing={4}
              sx={{ mt: 2 }}>
              <Grid
                item
                xs={12}
                md={5}>
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}>
                  <Typography
                    variant='h4'
                    sx={{ mb: 3, fontWeight: 600 }}>
                    Let's Collaborate
                  </Typography>

                  <Typography
                    variant='body1'
                    sx={{ mb: 4, fontSize: '1.1rem', lineHeight: 1.6 }}>
                    Have a project in mind or want to discuss potential
                    opportunities? I'm always open to new challenges and
                    exciting collaborations. Feel free to reach out using the
                    form or contact details.
                  </Typography>

                  <Box
                    sx={{
                      mb: 3,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                    }}>
                    <IconButton
                      sx={{
                        backgroundColor: darkMode
                          ? 'rgba(139,233,253,0.1)'
                          : 'rgba(2,119,189,0.1)',
                        '&:hover': {
                          backgroundColor: darkMode
                            ? 'rgba(139,233,253,0.2)'
                            : 'rgba(2,119,189,0.2)',
                        },
                      }}>
                      <EmailIcon color='primary' />
                    </IconButton>

                    <Typography variant='body1'>
                      abhigyashrestha730@gmail.com
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      mb: 3,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                    }}>
                    <IconButton
                      sx={{
                        backgroundColor: darkMode
                          ? 'rgba(189,147,249,0.1)'
                          : 'rgba(106,27,154,0.1)',
                        '&:hover': {
                          backgroundColor: darkMode
                            ? 'rgba(189,147,249,0.2)'
                            : 'rgba(106,27,154,0.2)',
                        },
                      }}>
                      <PhoneIcon color='secondary' />
                    </IconButton>

                    <Typography variant='body1'>+977 9844642649</Typography>
                  </Box>

                  <Box
                    sx={{
                      mb: 4,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                    }}>
                    <IconButton
                      sx={{
                        backgroundColor: darkMode
                          ? 'rgba(80,250,123,0.1)'
                          : 'rgba(46,125,50,0.1)',
                        '&:hover': {
                          backgroundColor: darkMode
                            ? 'rgba(80,250,123,0.2)'
                            : 'rgba(46,125,50,0.2)',
                        },
                      }}>
                      <LocationOnIcon
                        sx={{ color: darkMode ? '#50fa7b' : '#2e7d32' }}
                      />
                    </IconButton>

                    <Typography variant='body1'>Biratnagr, Nepal</Typography>
                  </Box>

                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      borderRadius: 2,
                      backgroundColor: darkMode
                        ? 'rgba(189,147,249,0.1)'
                        : 'rgba(106,27,154,0.05)',
                      border: `1px solid ${
                        darkMode
                          ? 'rgba(189,147,249,0.2)'
                          : 'rgba(106,27,154,0.1)'
                      }`,
                    }}>
                    <Typography
                      variant='h6'
                      sx={{
                        fontWeight: 600,
                        mb: 1,
                        color: darkMode ? '#bd93f9' : '#6a1b9a',
                      }}>
                      Available for Freelance
                    </Typography>

                    <Typography variant='body2'>
                      Currently accepting new projects and freelance
                      opportunities. Let's work together to bring your ideas to
                      life.
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>

              <Grid
                item
                xs={12}>
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}>
                  <Card
                    sx={{
                      p: { xs: 3, sm: 4 },
                      borderRadius: '16px',
                      boxShadow: darkMode
                        ? '0 20px 40px rgba(0,0,0,0.4)'
                        : '0 15px 35px rgba(0,0,0,0.15)',
                      background: darkMode
                        ? 'linear-gradient(145deg, rgba(40,42,54,0.85) 0%, rgba(28,29,38,0.95) 100%)'
                        : 'linear-gradient(145deg, rgba(255,255,255,0.95) 0%, rgba(240,245,255,0.95) 100%)',
                      position: 'relative',
                      overflow: 'hidden',
                      backdropFilter: 'blur(10px)',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '6px',
                        background: darkMode
                          ? 'linear-gradient(90deg, #8be9fd, #bd93f9, #ff79c6)'
                          : 'linear-gradient(90deg, #0277bd, #6a1b9a, #c2185b)',
                      },
                    }}>
                    <Box sx={{ mb: 4, position: 'relative' }}>
                      <Typography
                        variant='h4'
                        sx={{
                          fontWeight: 700,
                          mb: 1,
                          background: darkMode
                            ? 'linear-gradient(90deg, #bd93f9, #8be9fd)'
                            : 'linear-gradient(90deg, #6a1b9a, #0277bd)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          display: 'inline-block',
                        }}>
                        Get In Touch
                      </Typography>
                      <Typography
                        variant='body1'
                        sx={{
                          color: darkMode
                            ? 'rgba(248, 248, 242, 0.7)'
                            : 'rgba(0, 0, 0, 0.6)',
                          maxWidth: '90%',
                        }}>
                        Have a question or want to work together? Send me a
                        message below.
                      </Typography>
                      <Box
                        sx={{
                          position: 'absolute',
                          top: { xs: '-10px', md: '0' },
                          right: { xs: '-10px', md: '0' },
                          opacity: 0.8,
                        }}>
                        <MailOutlineIcon
                          sx={{
                            fontSize: { xs: '35px', md: '45px' },
                            color: darkMode
                              ? 'rgba(139, 233, 253, 0.3)'
                              : 'rgba(2, 119, 189, 0.2)',
                          }}
                        />
                      </Box>
                    </Box>

                    <Grid
                      container
                      spacing={3}>
                      <Grid
                        item
                        xs={12}
                        sm={6}>
                        <TextField
                          fullWidth
                          label='Full Name'
                          variant='outlined'
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position='start'>
                                <PersonOutlineIcon
                                  fontSize='small'
                                  color={darkMode ? 'info' : 'primary'}
                                />
                              </InputAdornment>
                            ),
                          }}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              borderRadius: '12px',
                              transition: 'all 0.3s',
                              '& fieldset': {
                                borderColor: darkMode
                                  ? 'rgba(139, 233, 253, 0.2)'
                                  : 'rgba(2, 119, 189, 0.2)',
                                transition: 'all 0.3s',
                              },
                              '&:hover fieldset': {
                                borderColor: darkMode
                                  ? 'rgba(139, 233, 253, 0.4)'
                                  : 'rgba(2, 119, 189, 0.4)',
                              },
                              '&.Mui-focused fieldset': {
                                borderColor: darkMode ? '#8be9fd' : '#0277bd',
                                borderWidth: '2px',
                              },
                            },
                            '& .MuiInputLabel-root': {
                              '&.Mui-focused': {
                                color: darkMode ? '#8be9fd' : '#0277bd',
                              },
                            },
                          }}
                        />
                      </Grid>

                      <Grid
                        item
                        xs={12}
                        sm={6}>
                        <TextField
                          fullWidth
                          label='Email Address'
                          type='email'
                          variant='outlined'
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position='start'>
                                <EmailOutlinedIcon
                                  fontSize='small'
                                  color={darkMode ? 'info' : 'primary'}
                                />
                              </InputAdornment>
                            ),
                          }}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              borderRadius: '12px',
                              transition: 'all 0.3s',
                              '& fieldset': {
                                borderColor: darkMode
                                  ? 'rgba(139, 233, 253, 0.2)'
                                  : 'rgba(2, 119, 189, 0.2)',
                                transition: 'all 0.3s',
                              },
                              '&:hover fieldset': {
                                borderColor: darkMode
                                  ? 'rgba(139, 233, 253, 0.4)'
                                  : 'rgba(2, 119, 189, 0.4)',
                              },
                              '&.Mui-focused fieldset': {
                                borderColor: darkMode ? '#8be9fd' : '#0277bd',
                                borderWidth: '2px',
                              },
                            },
                            '& .MuiInputLabel-root': {
                              '&.Mui-focused': {
                                color: darkMode ? '#8be9fd' : '#0277bd',
                              },
                            },
                          }}
                        />
                      </Grid>

                      <Grid
                        item
                        xs={12}>
                        <TextField
                          fullWidth
                          label='Subject'
                          variant='outlined'
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position='start'>
                                <SubjectIcon
                                  fontSize='small'
                                  color={darkMode ? 'info' : 'primary'}
                                />
                              </InputAdornment>
                            ),
                          }}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              borderRadius: '12px',
                              transition: 'all 0.3s',
                              '& fieldset': {
                                borderColor: darkMode
                                  ? 'rgba(139, 233, 253, 0.2)'
                                  : 'rgba(2, 119, 189, 0.2)',
                                transition: 'all 0.3s',
                              },
                              '&:hover fieldset': {
                                borderColor: darkMode
                                  ? 'rgba(139, 233, 253, 0.4)'
                                  : 'rgba(2, 119, 189, 0.4)',
                              },
                              '&.Mui-focused fieldset': {
                                borderColor: darkMode ? '#8be9fd' : '#0277bd',
                                borderWidth: '2px',
                              },
                            },
                            '& .MuiInputLabel-root': {
                              '&.Mui-focused': {
                                color: darkMode ? '#8be9fd' : '#0277bd',
                              },
                            },
                          }}
                        />
                      </Grid>

                      <Grid
                        item
                        xs={12}>
                        <TextField
                          fullWidth
                          label='Your Message'
                          multiline
                          rows={5}
                          variant='outlined'
                          InputProps={{
                            startAdornment: (
                              <InputAdornment
                                position='start'
                                sx={{ mt: '10px', alignSelf: 'flex-start' }}>
                                <ChatBubbleOutlineIcon
                                  fontSize='small'
                                  color={darkMode ? 'info' : 'primary'}
                                />
                              </InputAdornment>
                            ),
                          }}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              borderRadius: '12px',
                              transition: 'all 0.3s',
                              '& fieldset': {
                                borderColor: darkMode
                                  ? 'rgba(139, 233, 253, 0.2)'
                                  : 'rgba(2, 119, 189, 0.2)',
                                transition: 'all 0.3s',
                              },
                              '&:hover fieldset': {
                                borderColor: darkMode
                                  ? 'rgba(139, 233, 253, 0.4)'
                                  : 'rgba(2, 119, 189, 0.4)',
                              },
                              '&.Mui-focused fieldset': {
                                borderColor: darkMode ? '#8be9fd' : '#0277bd',
                                borderWidth: '2px',
                              },
                            },
                            '& .MuiInputLabel-root': {
                              '&.Mui-focused': {
                                color: darkMode ? '#8be9fd' : '#0277bd',
                              },
                            },
                          }}
                        />
                      </Grid>

                      <Grid
                        item
                        xs={12}>
                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flexDirection: { xs: 'column', sm: 'row' },
                            gap: { xs: 2, sm: 0 },
                          }}>
                          <FormControlLabel
                            control={
                              <Checkbox
                                sx={{
                                  color: darkMode
                                    ? 'rgba(139, 233, 253, 0.5)'
                                    : 'rgba(2, 119, 189, 0.5)',
                                  '&.Mui-checked': {
                                    color: darkMode ? '#8be9fd' : '#0277bd',
                                  },
                                }}
                              />
                            }
                            label={
                              <Typography
                                variant='body2'
                                sx={{
                                  color: darkMode
                                    ? 'rgba(248, 248, 242, 0.7)'
                                    : 'rgba(0, 0, 0, 0.6)',
                                }}>
                                Send me a copy of this message
                              </Typography>
                            }
                          />

                          <Button
                            variant='contained'
                            color='primary'
                            size='large'
                            sx={{
                              borderRadius: '30px',
                              py: 1.2,
                              px: 4,
                              fontWeight: 600,
                              textTransform: 'none',
                              fontSize: '1rem',
                              background: darkMode
                                ? 'linear-gradient(90deg, #8be9fd, #bd93f9)'
                                : 'linear-gradient(90deg, #0277bd, #6a1b9a)',
                              boxShadow: darkMode
                                ? '0 8px 16px rgba(139, 233, 253, 0.3)'
                                : '0 8px 16px rgba(2, 119, 189, 0.3)',
                              position: 'relative',
                              overflow: 'hidden',
                              transition: 'all 0.3s',
                              '&:hover': {
                                boxShadow: darkMode
                                  ? '0 12px 20px rgba(139, 233, 253, 0.4)'
                                  : '0 12px 20px rgba(2, 119, 189, 0.4)',
                                transform: 'translateY(-3px)',
                              },
                              '&::after': {
                                content: '""',
                                position: 'absolute',
                                top: 0,
                                left: '-100%',
                                width: '100%',
                                height: '100%',
                                background:
                                  'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                                transition: 'all 0.4s',
                              },
                              '&:hover::after': {
                                left: '100%',
                              },
                            }}
                            endIcon={<SendIcon />}>
                            Send Message
                          </Button>
                        </Box>
                      </Grid>
                    </Grid>

                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        mt: 4,
                        pt: 3,
                        borderTop: `1px solid ${
                          darkMode
                            ? 'rgba(139, 233, 253, 0.1)'
                            : 'rgba(2, 119, 189, 0.1)'
                        }`,
                      }}>
                      <Tooltip title='Call Me'>
                        <IconButton
                          sx={{
                            mx: 1.5,
                            color: darkMode ? '#bd93f9' : '#6a1b9a',
                            background: darkMode
                              ? 'rgba(189, 147, 249, 0.1)'
                              : 'rgba(106, 27, 154, 0.05)',
                            transition: 'all 0.3s',
                            '&:hover': {
                              transform: 'translateY(-4px)',
                              background: darkMode
                                ? 'rgba(189, 147, 249, 0.2)'
                                : 'rgba(106, 27, 154, 0.1)',
                            },
                          }}>
                          <PhoneIcon />
                        </IconButton>
                      </Tooltip>

                      <Tooltip title='Email Me'>
                        <IconButton
                          sx={{
                            mx: 1.5,
                            color: darkMode ? '#8be9fd' : '#0277bd',
                            background: darkMode
                              ? 'rgba(139, 233, 253, 0.1)'
                              : 'rgba(2, 119, 189, 0.05)',
                            transition: 'all 0.3s',
                            '&:hover': {
                              transform: 'translateY(-4px)',
                              background: darkMode
                                ? 'rgba(139, 233, 253, 0.2)'
                                : 'rgba(2, 119, 189, 0.1)',
                            },
                          }}>
                          <EmailIcon />
                        </IconButton>
                      </Tooltip>

                      <Tooltip title='LinkedIn'>
                        <IconButton
                          sx={{
                            mx: 1.5,
                            color: darkMode ? '#ff79c6' : '#c2185b',
                            background: darkMode
                              ? 'rgba(255, 121, 198, 0.1)'
                              : 'rgba(194, 24, 91, 0.05)',
                            transition: 'all 0.3s',
                            '&:hover': {
                              transform: 'translateY(-4px)',
                              background: darkMode
                                ? 'rgba(255, 121, 198, 0.2)'
                                : 'rgba(194, 24, 91, 0.1)',
                            },
                          }}>
                          <LinkedInIcon />
                        </IconButton>
                      </Tooltip>

                      <Tooltip title='GitHub'>
                        <IconButton
                          sx={{
                            mx: 1.5,
                            color: darkMode ? '#50fa7b' : '#2e7d32',
                            background: darkMode
                              ? 'rgba(80, 250, 123, 0.1)'
                              : 'rgba(46, 125, 50, 0.05)',
                            transition: 'all 0.3s',
                            '&:hover': {
                              transform: 'translateY(-4px)',
                              background: darkMode
                                ? 'rgba(80, 250, 123, 0.2)'
                                : 'rgba(46, 125, 50, 0.1)',
                            },
                          }}>
                          <GitHubIcon />
                        </IconButton>
                      </Tooltip>
                    </Box>
                  </Card>
                </motion.div>
              </Grid>
            </Grid>
          </motion.div>
        </Box>

        {/* Footer */}
        <Box
          component='footer'
          sx={{
            mt: 12,
            textAlign: 'center',
            position: 'relative',
            pt: 6,
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '150px',
              height: '2px',
              background: darkMode
                ? 'linear-gradient(90deg, transparent, #bd93f9, transparent)'
                : 'linear-gradient(90deg, transparent, #6a1b9a, transparent)',
            },
          }}>
          <Typography
            variant='h6'
            sx={{
              mb: 2,
              fontFamily: '"Fira Code", monospace',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1,
            }}>
            <Box
              component='span'
              sx={{ color: darkMode ? '#bd93f9' : '#6a1b9a' }}>
              {'{'}
            </Box>
            Abhigya Shrestha
            <Box
              component='span'
              sx={{ color: darkMode ? '#bd93f9' : '#6a1b9a' }}>
              {'}'}
            </Box>
          </Typography>

          <Box
            sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 2 }}>
            <IconButton
              color='primary'
              size='small'>
              <GitHubIcon />
            </IconButton>
            <IconButton
              color='primary'
              size='small'>
              <LinkedInIcon />
            </IconButton>
            <IconButton
              color='primary'
              size='small'>
              <EmailIcon />
            </IconButton>
          </Box>

          <Typography
            variant='body2'
            sx={{ opacity: 0.7, mb: 2 }}>
            &copy; {new Date().getFullYear()} Abhigya Shrestha. All rights
            reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default HomePage;
