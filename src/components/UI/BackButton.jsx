import { MdKeyboardArrowLeft } from 'react-icons/md';
import { useHistory } from 'react-router-dom';
import IconButton from './IconButton';

const BackButton = ({ className }) => {
  const history = useHistory();

  const goBack = () => history.goBack();

  return <IconButton className={className} icon={MdKeyboardArrowLeft} onClick={goBack} />;
};

export default BackButton;
