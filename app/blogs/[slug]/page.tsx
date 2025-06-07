import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export default async function BlogDetail({ params }: { params: { slug: string } }) {
  const mdPath = path.join(process.cwd(), "app/blogs", params.slug, "index.md");
  const file = fs.readFileSync(mdPath, "utf-8");
  const { data, content } = matter(file);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">{data.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </div>
  );
} 