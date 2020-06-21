import React from 'react';

import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const Copyright = () => {
  return (
      <div style={{marginTop: "20px", marginBottom: "20px"}}>
    <Typography variant="body2" color="textSecondary" align="center">
      <Typography variant="subtitle2" color="textSecondary" align="center" >
          {"Made with React"}
      </Typography>
      {"© "}
      <Link color="inherit" href="">
        EDGAR CHAIDEZ
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
    </div>
  );
};

export default Copyright;
