"use client";

import React from "react";

interface SectionHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeader({
  title,
  description,
  className,
}: SectionHeaderProps) {
  return (
    <div className={`max-w-xl ${className || ""}`}>
      <h2 className="text-2xl font-semibold tracking-tight text-foreground">
        {title}
      </h2>

      {description && (
        <p className="text-muted-foreground mt-1 text-sm">{description}</p>
      )}
    </div>
  );
}
