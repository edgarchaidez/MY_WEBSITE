import React from 'react';

import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const Copyright = () => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <Typography variant="body1" color="textSecondary" align="center">
        {"Made with React"}
      </Typography>
      <Typography variant="subtitle2" color="textSecondary" align="center">
        {"© "}
        <Link color="inherit" href="/">
          EDGAR CHAIDEZ
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </div>
  );
};

export default Copyright;
