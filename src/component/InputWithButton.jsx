import Button from "./Button";
import InputBox from "./Input";

export const InputWithButton = ({
  label,
  inputProps = {}, // InputBox 관련 props
  buttonProps = {}, // Button 관련 props
}) => (
  <div>
    <label>{label}</label>
    <div className="flex items-center gap-[10px]">
      <InputBox {...inputProps} />
      <Button {...buttonProps} />
    </div>
  </div>
);