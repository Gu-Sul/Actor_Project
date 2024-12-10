import { cva } from "class-variance-authority";
import { cn } from "../util/cn";

const ButtonVariants = cva(
  ` flex justify-center items-center active:scale-95 rounded-xl 
    font-bold text-slate-100 transition-all shadow-md
     duration-200 tracking-[.01em] p-[3px] ease-in-out
    `,
  {
    variants: {
      variant: {
        default: "active:scale-100 bg-[#041F32]",
        orange: "bg-[#E96C32]",
        lightgray: "bg-[#D9D9D9] text-[#4C4C4C]",
      },
      size: {
        default: "w-[6rem] h-[3rem] text-[0.875rem] hover:scale-105",
        xxs: "w-[2.7rem] h-[1.3rem] text-[0.775rem] hover:none",
        xs: "w-[4rem] h-[1.7rem] text-[0.775rem] hover:none",
        sm: "w-[3.5rem] h-[2.375rem] text-[0.775rem] tracking-[.17em] hover:scale-105",
        md: "w-[6.875rem] h-[2.375rem] text-[0.775rem] rounded-lg hover:scale-105",
        wlg: "w-[8.5rem] h-[2.375rem] text-[0.775rem] hover:scale-105",
      },
      isActive: {
        true: "bg-[#E96C32]",
        false: "bg-[#D9D9D9]",
      },
      isLogin: {
        true: "",
      },
      cusor: {
        default: "cursor-default",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export const StyledButton = ({
  variant,
  size,
  isActive,
  label,
  isLogin,
  cusor,
  ...props
}) => {
  return (
    <button
      className={cn(
        ButtonVariants({ variant, size, isActive, isLogin, cusor })
      )}
      {...props}
    >
      {label}
    </button>
  );
};
