interface PostContentProps {
  content: string
}

export default function PostContent({ content }: PostContentProps) {
  return (
    <div className="prose prose-lg prose-primary max-w-none">
      {/* For a real blog, we would use a markdown parser here like react-markdown or contentlayer */}
      {/* For this demo, we'll just render it as white-space preserved text or simple HTML if needed */}
      <div 
        className="whitespace-pre-wrap text-gray-700 leading-relaxed"
      >
        {content}
      </div>
    </div>
  )
}
