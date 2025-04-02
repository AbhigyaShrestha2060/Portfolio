import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import CodeIcon from '@mui/icons-material/Code';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import SendIcon from '@mui/icons-material/Send';
import StorageIcon from '@mui/icons-material/Storage';
import WebIcon from '@mui/icons-material/Web';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  Grid,
  IconButton,
  Paper,
  TextField,
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
      title: 'E-Commerce Platform',
      description:
        'A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.',
      skills: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux'],
      icon: <WebIcon fontSize='large' />,
    },
    {
      title: 'Task Management System',
      description:
        'A collaborative project management tool with real-time updates and team collaboration features.',
      skills: ['Angular', 'Firebase', 'TypeScript', 'Material UI'],
      icon: <StorageIcon fontSize='large' />,
    },
    {
      title: 'Portfolio Website',
      description:
        'A responsive portfolio website with animated components and dark/light mode toggle.',
      skills: ['React', 'Material UI', 'Framer Motion', 'CSS3'],
      icon: <CodeIcon fontSize='large' />,
    },
  ];

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
                      width: 150,
                      height: 150,
                      mb: 3,
                      border: `4px solid ${darkMode ? '#8be9fd' : '#0277bd'}`,
                      boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
                    }}>
                    <Typography variant='h2'>AS</Typography>
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
            spacing={4}>
            <Grid
              item
              xs={12}
              md={4}>
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}>
                <Card
                  sx={{
                    height: '100%',
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
              xs={12}
              md={4}>
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}>
                <Card
                  sx={{
                    height: '100%',
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
              xs={12}
              md={4}>
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}>
                <Card
                  sx={{
                    height: '100%',
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
              Featured Projects
            </Typography>

            <Grid
              container
              spacing={4}>
              {projects.map((project, index) => (
                <Grid
                  item
                  xs={12}
                  md={4}
                  key={index}>
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}>
                    <Card
                      sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        transition: 'transform 0.3s, box-shadow 0.3s',
                        position: 'relative',
                        overflow: 'hidden',
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
                            ? 'linear-gradient(to bottom, #8be9fd, #bd93f9)'
                            : 'linear-gradient(to bottom, #0277bd, #6a1b9a)',
                        },
                      }}>
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            mb: 2,
                            gap: 1,
                          }}>
                          {project.icon}
                          <Typography
                            variant='h5'
                            sx={{ fontWeight: 600 }}>
                            {project.title}
                          </Typography>
                        </Box>
                        <Typography
                          variant='body1'
                          sx={{ mb: 2 }}>
                          {project.description}
                        </Typography>
                        <Box
                          sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: 1,
                            mt: 2,
                          }}>
                          {project.skills.map((skill) => (
                            <Chip
                              key={skill}
                              label={skill}
                              size='small'
                              sx={{
                                fontSize: '0.7rem',
                                height: '24px',
                                background: darkMode
                                  ? 'rgba(139,233,253,0.1)'
                                  : 'rgba(2,119,189,0.1)',
                                border: `1px solid ${
                                  darkMode
                                    ? 'rgba(139,233,253,0.2)'
                                    : 'rgba(2,119,189,0.2)'
                                }`,
                                margin: '2px',
                              }}
                            />
                          ))}
                        </Box>
                      </CardContent>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'flex-end',
                          p: 1,
                        }}>
                        <Button
                          color='primary'
                          size='small'
                          sx={{
                            textTransform: 'none',
                            fontWeight: 500,
                            position: 'relative',
                            '&::after': {
                              content: '""',
                              position: 'absolute',
                              width: '0',
                              height: '2px',
                              bottom: 0,
                              left: '50%',
                              transform: 'translateX(-50%)',
                              backgroundColor: darkMode ? '#8be9fd' : '#0277bd',
                              transition: 'width 0.3s',
                            },
                            '&:hover::after': {
                              width: '80%',
                            },
                          }}>
                          View Project
                        </Button>
                      </Box>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>

            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
              <Button
                variant='outlined'
                color='secondary'
                size='large'
                sx={{
                  px: 4,
                  position: 'relative',
                  overflow: 'hidden',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    top: 0,
                    left: '-100%',
                    background: darkMode
                      ? 'linear-gradient(90deg, rgba(189,147,249,0), rgba(189,147,249,0.1), rgba(189,147,249,0))'
                      : 'linear-gradient(90deg, rgba(106,27,154,0), rgba(106,27,154,0.1), rgba(106,27,154,0))',
                    animation: 'slide 2s infinite',
                  },
                  '@keyframes slide': {
                    '0%': {
                      left: '-100%',
                    },
                    '100%': {
                      left: '100%',
                    },
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
                xs={12}
                md={7}>
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}>
                  <Card
                    sx={{
                      p: 3,
                      boxShadow: darkMode
                        ? '0 15px 30px rgba(0,0,0,0.3)'
                        : '0 10px 25px rgba(0,0,0,0.1)',
                      background: darkMode
                        ? 'linear-gradient(135deg, rgba(40,42,54,0.8) 0%, rgba(30,31,41,0.9) 100%)'
                        : 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(240,245,255,0.9) 100%)',
                      position: 'relative',
                      overflow: 'hidden',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '5px',
                        background: darkMode
                          ? 'linear-gradient(90deg, #8be9fd, #bd93f9)'
                          : 'linear-gradient(90deg, #0277bd, #6a1b9a)',
                      },
                    }}>
                    <Typography
                      variant='h5'
                      sx={{ mb: 3, fontWeight: 600 }}>
                      Send Me a Message
                    </Typography>

                    <Grid
                      container
                      spacing={3}>
                      <Grid
                        item
                        xs={12}
                        sm={6}>
                        <TextField
                          fullWidth
                          label='Your Name'
                          variant='outlined'
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              '&.Mui-focused fieldset': {
                                borderColor: darkMode ? '#8be9fd' : '#0277bd',
                                borderWidth: '2px',
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
                          label='Your Email'
                          type='email'
                          variant='outlined'
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              '&.Mui-focused fieldset': {
                                borderColor: darkMode ? '#8be9fd' : '#0277bd',
                                borderWidth: '2px',
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
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              '&.Mui-focused fieldset': {
                                borderColor: darkMode ? '#8be9fd' : '#0277bd',
                                borderWidth: '2px',
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
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              '&.Mui-focused fieldset': {
                                borderColor: darkMode ? '#8be9fd' : '#0277bd',
                                borderWidth: '2px',
                              },
                            },
                          }}
                        />
                      </Grid>

                      <Grid
                        item
                        xs={12}>
                        <Button
                          variant='contained'
                          color='primary'
                          fullWidth
                          size='large'
                          sx={{
                            mt: 1,
                            py: 1.5,
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
                          }}
                          endIcon={<SendIcon />}>
                          Send Message
                        </Button>
                      </Grid>
                    </Grid>
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
