import React from "'react'";
import React from 'react'
import SvgIcon from 'material-ui/SvgIcon'

const iconStyles = {
  height: 20,
  display: 'block',
  position: 'absolute',
  top: 0,
  left: 4,
  margin: 12,
  color: '#757575'
};

const DriverSvgIcon = (props) => (
  <SvgIcon {...props}>
    <svg x="0px" y="0px" viewBox="0 0 1000 1000">
      <g><path d="M500,440.6c110.9,0,201.1-96.6,201.1-215.3C701.1,106.6,610.9,10,500,10c-110.9,0-201.1,96.6-201.1,215.3C298.9,344,389.1,440.6,500,440.6z"/><path d="M476.7,754.9L662,491.8c-40.3-10.4-95.9-21.1-161.2-21.1c-4.4,0-118.2-9-236.3,45.1c0,0-15,1.5-44.4,46.9c-45,73.2-114,179.9-134.4,215.4c-14.2,23.3-50.2,70.2-26.8,119.4c25.7,49,47.7,86.2,56.2,92.5c26.5,0,77.4,0,111.1,0C224.1,905.8,302.3,767.5,476.7,754.9z"/><path d="M915,779.3c-34.2-58.7-110.3-177.8-116.4-188.5c-8-14-33-67.8-79.8-82.2c-5-1.5-11.5-3.6-19.2-6L522.1,754.7c169.6,10.2,253.5,142.4,253.5,235.2l101.7,0.2c0,0,10.8,1.1,63.9-95.2C960.9,844.2,939.3,822.3,915,779.3z"/><path d="M499.9,817.2c-117,0-211.9,75.9-211.9,172.8c149.2,0,246.4,0,423.8,0C711.8,893.1,616.9,817.2,499.9,817.2z"/></g>
    </svg>
  </SvgIcon>
);

const StyledDriverSvgIcon = () => (
  <div>
    <DriverSvgIcon style={iconStyles} />
  </div>
);

export default StyledDriverSvgIcon;
