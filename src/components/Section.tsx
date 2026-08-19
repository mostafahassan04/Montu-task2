import React from "react";

interface SectionProps {
  id: string;
  title?: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({
  id,
  title,
  description,
  className = "",
  children,
}) => {
  return (
    <section
      id={id}
      className={`min-h-screen flex flex-col items-center justify-center p-8 ${className}`}
    >
      {(title || description) && (
        <div className="max-w-3xl text-center mb-6">
          {title && <h2 className="text-4xl font-extrabold mb-4">{title}</h2>}
          {description && (
            <p className="text-lg opacity-80 leading-relaxed">{description}</p>
          )}
        </div>
      )}
      {children}
    </section>
  );
};