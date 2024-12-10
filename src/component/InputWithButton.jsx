import { StyledButton } from "./StyledButton";
import { StyledInput } from "./StyledInput";

export const InputWithButton = ({
  label,
  inputProps = {}, // InputBox 관련 props
  buttonProps = {}, // Button 관련 props
}) => (
  <div>
    <label>{label}</label>
    <div className="flex items-center gap-[10px]">
      <StyledInput {...inputProps} />
      <StyledButton {...buttonProps} />
    </div>
  </div>
);
