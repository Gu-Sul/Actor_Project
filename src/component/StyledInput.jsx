import { cva } from 'class-variance-authority';
import { cn } from '../util/cn';

const inputVariants = cva(` flex block rounded-lg h-[2rem] p-2 `, {
  variants: {
    color: {
      default: 'bg-[#f4f4f4]',
    },
    size: {
      default: 'text-[1rem] w-[100%] h-[2.375rem]',
      sm: 'text-[0.8rem] w-[300px] h-[2.375rem]',
      xsm: 'text-[0.8rem] w-[30%] h-[2.375rem]',
      md: 'text-[1rem] w-[400px] h-[2.375rem]',
      lmd: 'text-[1rem] w-[400px] h-[3.125rem]',
    },
    disabled: {
      true: 'bg-gray-200 text-gray-500 cursor-not-allowed',
      false: '',
    },
    isValid: {
      true: 'border-green-500 focus:ring-2 focus:ring-inset focus:ring-green-500 focus:outline-none',
      false:
        'border border-solid border-red-500 bg-[black]  focus:ring-2 focus:ring-inset focus:ring-red-500 focus:outline-none',
    },
  },
  defaultVariants: {
    color: 'default',
    size: 'small',
  },
});

export const StyledInput = ({
  color,
  size,
  disabled,
  isValid,
  className,
  ...props
}) => {
  return (
    <input
      className={cn(
        inputVariants({ color, size, disabled, isValid }),
        className
      )}
      {...props}
    />
  );
};
