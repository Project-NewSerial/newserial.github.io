const deviceSizes = {
    mobile: 480,
    laptop: 1281,
  };
  
  const device = {
    mobile: `screen and (max-width: ${deviceSizes.mobile}px)`,
    laptop: `screen and (max-width: ${deviceSizes.laptop}px)`,
  };
  
  const theme = {
    device
  };
  
  export default theme;