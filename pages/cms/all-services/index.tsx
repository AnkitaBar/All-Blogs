import { allServiceQuery } from '@/customHooks/cms.query.hooks';
import { Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react'

const AllService = () => {

    const [expanded, setExpanded] = useState<Record<string, boolean>>({});

    const truncateText = (text: string, limit: number) =>
      text.length > limit ? `${text.substring(0, limit)}...` : text;
  
    const toggleReadMore = (id: string) => {
      setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
    };
    const { data, isPending } = allServiceQuery();
    const allServiceData = data?.data || [];
    console.log('data', allServiceData);
  return (
    <div
    style={{
      marginTop: "4rem",
      marginBottom: "4rem",
      backgroundColor: "#f5f5f5",
      padding: "2rem",
      borderRadius: "10px"
    }}
>
    <Container maxWidth="lg">
      <Grid
        item
        xs={12}
        sm={6}
        md={6}
        lg={6}
        style={{ textAlign: "center", padding: "2rem" }}
      >
        <Typography
          variant="h6"
          gutterBottom
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            color: "#000"
          }}
        >
          All Services
        </Typography>
      </Grid>
      <Grid
        container
        spacing={1} // Increase the spacing value
        direction="row"
        justifyContent="center"
        // alignItems="center"
        style={{ marginTop: "20px" }}
      >
        {
            Array.isArray(allServiceData) && allServiceData.length > 0
            ? allServiceData.map((service) =>
                <Grid
                    className="card"
                    item
                    xs={12}
                    sm={4} // Corrected ms to sm
                    md={4}
                    key={service._id} // Corrected key to use item._id
                    style={{
                    gap: "20px"
                    }}
                >
                    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                        <Card sx={{ height: 'auto', width: '100%', marginBottom: '1rem' }}>
                            <CardContent>
                                <CardMedia
                                component="img"
                                height="140"
                                image="https://random.imagecdn.app/500/150"
                                alt="green iguana"
                                />
                                <Typography variant="h6" component="div" gutterBottom>
                                {service.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">

                                <div key={service._id} style={{ marginBottom: "1rem" }}>
                                    <p>
                                    {expanded[service._id] ? service.details : truncateText(service.details, 30)}
                                    </p>
                                    {service.details.length > 30 && (
                                    <button
                                    onClick={() => toggleReadMore(service._id)}
                                    style={{
                                        background: 'none',        // Remove button background
                                        border: 'none',            // Remove button border
                                        color: '#007bff',          // Link-like color
                                        textDecoration: 'underline', // Underline like a link
                                        fontSize: 'inherit',       // Inherit font size from parent
                                        cursor: 'pointer',        // Make it clickable
                                        padding: 0,                // Remove padding
                                        display: 'inline',         // Make it inline like a link
                                    }}
                                    >
                                    {expanded[service._id] ? 'Read Less' : 'Read More'}
                                    </button>
                                    )}
                                </div>
                                {/* {text.length > maxLength && (
                                    <button onClick={toggleReadMore} style={{ marginLeft: "5px", color: "blue", cursor: "pointer", background: "none", border: "none" }}>
                                    {isExpanded ? "Read Less" : "Read More"}
                                    </button> */}
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>
                </Grid>
                )
            : <p>No blogs available</p>
        }
      </Grid>
    </Container>
</div>
  )
}

export default AllService