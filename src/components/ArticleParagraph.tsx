import React from "react";

interface ArticleParagraphProps {
  children: string;
  className?: string;
}

/**
 * Renders a paragraph with support for <em> and <strong> HTML tags
 * Converts HTML tags to React elements for proper rendering
 */
function ArticleParagraph({ children, className }: ArticleParagraphProps) {
  // Split by HTML tags and create React elements
  const parts: React.ReactNode[] = [];
  const regex = /(<em>.*?<\/em>|<strong>.*?<\/strong>)/g;
  let lastIndex = 0;
  let match;
  let keyCounter = 0;

  while ((match = regex.exec(children)) !== null) {
    // Add text before the tag
    if (match.index > lastIndex) {
      parts.push(
        <React.Fragment key={`text-${keyCounter++}`}>
          {children.substring(lastIndex, match.index)}
        </React.Fragment>
      );
    }

    // Process the tag
    const tagContent = match[0];
    if (tagContent.startsWith("<em>")) {
      const text = tagContent.replace(/<\/?em>/g, "");
      parts.push(<em key={`em-${keyCounter++}`}>{text}</em>);
    } else if (tagContent.startsWith("<strong>")) {
      const text = tagContent.replace(/<\/?strong>/g, "");
      parts.push(<strong key={`strong-${keyCounter++}`}>{text}</strong>);
    }

    lastIndex = regex.lastIndex;
  }

  // Add remaining text
  if (lastIndex < children.length) {
    parts.push(
      <React.Fragment key={`text-${keyCounter++}`}>
        {children.substring(lastIndex)}
      </React.Fragment>
    );
  }

  // If no tags were found, return the text as-is
  if (parts.length === 0) {
    return <>{children}</>;
  }

  return <span className={className}>{parts}</span>;
}

export default ArticleParagraph;

