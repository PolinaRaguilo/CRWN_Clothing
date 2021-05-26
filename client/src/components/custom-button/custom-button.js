import { CustomButtonContainer } from './custom-button.style';

const CustomButton = (props) => {
  return (
    <CustomButtonContainer {...props}>{props.children}</CustomButtonContainer>
  );
};

export default CustomButton;
