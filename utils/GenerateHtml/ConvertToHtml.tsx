import React from "react";
import DOMPurify from "dompurify";
type Props = {
  rawContent: string;
};

const ConvertToHtml = ({ rawContent }: Props) => {
  // Replace newlines with <br /> (handle formatting for text areas, paragraphs, etc.)
  const formattedContent = rawContent.replace(/\n/g, "<br />");

  const cleanContent = DOMPurify.sanitize(formattedContent);
  return (
    <div
      className={`text-base mt-2  lg:leading-10 md:leading-4 `}
      // Rendering the sanitized HTML string
      dangerouslySetInnerHTML={{ __html: cleanContent }}
    />
  );
};

export default ConvertToHtml;
