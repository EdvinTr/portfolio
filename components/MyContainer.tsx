import React from "react";

interface MyContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

export const MyContainer: React.FC<MyContainerProps> = ({
  children,
  ...props
}) => {
  return (
    <div {...props} className={"max-w-5xl mx-auto px-4 " + props.className}>
      {children}
    </div>
  );
};
