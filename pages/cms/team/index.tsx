import { TeamQuery } from '@/customHooks/cms.query.hooks';
import { Box, Card, CardContent, CardMedia, Grid, IconButton, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import React from 'react'

const Team = () => {
    const { data, isPending } = TeamQuery();
  const TeamData = data?.TeamMember || [];
  console.log('data', data);
  return (
    <>
    <div>
        <Typography variant='h3' gutterBottom textAlign={'center'}>Team Members</Typography>
        <Grid container spacing={2} mt={2}>
            {
                Array.isArray(TeamData) && TeamData.map((teamMember) => (
                    <Grid item xs={12} md={3} lg={3} xl={3} alignItems={'center'} justifyContent={'center'}>
                        <div key={teamMember._id}>
                            <Card sx={{ maxWidth: 320, boxShadow: 2, borderRadius: 2, backgroundColor: '#fff' }}>
                                <CardMedia
                                component="img"
                                height="140"
                                image={`https://avatar.iran.liara.run/public/boy?username=${teamMember.slug}`}
                                alt={teamMember.name}
                                sx={{ objectFit: 'contain', mt: 2 }}
                                />
                                <CardContent>
                                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
                                    {teamMember.name}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" sx={{ marginBottom: 2 }}>
                                    {teamMember.possession}
                                </Typography>

                        
                                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                                    <IconButton sx={{ color: '#3b5998' }}>
                                        <FacebookIcon />
                                    </IconButton>
                                    <IconButton sx={{ color: '#00acee' }}>
                                        <XIcon />
                                    </IconButton>
                                    <IconButton sx={{ color: '#0077b5' }}>
                                        <LinkedInIcon />
                                    </IconButton>
                                    <IconButton sx={{ color: '#D44638' }}>
                                        <MailIcon />
                                    </IconButton>
                                </Box>
                                </CardContent>
                            </Card>
                        </div>
                    </Grid>
                ))
            }
        </Grid>
    </div>
        </>
  )
}

export default Team