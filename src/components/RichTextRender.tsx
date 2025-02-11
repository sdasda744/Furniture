import DOMPurify from "dompurify";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  content: string;
}

const RichTextRender = ({ content, className }: Props) => {
  const sanitizedContent = DOMPurify.sanitize(content);
  return (
    <div dangerouslySetInnerHTML={{ __html: sanitizedContent}} className={className}>
    </div>
  );
};
export default RichTextRender;
