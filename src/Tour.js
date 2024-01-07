import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';

const Tour = ({ id,name,info,price,image }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleDescription = () => {
    setShowMore(!showMore);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Box
        component="img"
        src={image}
        alt='not found'
        sx={{ width: 150, height: 150, objectFit: 'cover', marginBottom: 2, borderRadius: 4 }}
      />
      <Typography variant="h6" gutterBottom>
        {name}
      </Typography>
      <Typography variant="body1" paragraph>
        {showMore ? info : `${info.slice(0, 100)}...`}
      </Typography>
      {info.length > 100 && (
        <Button color="primary" onClick={toggleDescription}>
          {showMore ? 'Show Less' : 'Read More'}
        </Button>
      )}
      <Typography variant="h5">
        Price: {price}
      </Typography>
    </Box>
  );
};

export default Tour;
