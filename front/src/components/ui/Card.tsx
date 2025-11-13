import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  title?: string;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  title, 
  className = "",
  ...props 
}) => {
  const baseStyles = "bg-white shadow rounded-lg";
  const combinedClassName = `${baseStyles} ${className}`.trim();

  return (
    <div className={combinedClassName} {...props}>
      {title && (
        <div className="px-4 py-3 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        </div>
      )}
      {children}
    </div>
  );
};

export default Card;
