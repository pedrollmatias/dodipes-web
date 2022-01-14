import Button from 'react-bootstrap/Button';

import classes from './IconButton.module.scss';

const enumSize = {
  sm: '1rem',
  md: '1.4rem',
  lg: '2.1rem',
};

const IconButton = ({ className = '', variant = 'light', size = 'md', icon: Icon, onClick = () => {} }) => {
  return (
    <Button
      variant={variant}
      className={`${classes['icon-btn']} ${classes[`icon-btn--${size}`]} ${className}`}
      onClick={onClick}
    >
      <Icon size={enumSize[size]} />
    </Button>
  );
};

export default IconButton;
