import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

export default function AcademicList() {
  const dir = path.join(process.cwd(), "app/blogs/Academic");
  const folders = fs.readdirSync(dir).filter(name => {
    const fullPath = path.join(dir, name);
    return fs.statSync(fullPath).isDirectory();
  });

  type BlogMeta = {
    slug: string;
    title?: string;
    language?: string;
    tags?: string[];
    summary?: string;
    draft?: boolean;
  };

  const blogs: BlogMeta[] = folders
    .map(folder => {
      const mdPath = path.join(dir, folder, "index.md");
      const file = fs.readFileSync(mdPath, "utf-8");
      const { data, content } = matter(file);
      const summary = data.summary || content.split('\n').slice(0, 3).join('\n');
      const draft = data.draft
      return {
        slug: folder,
        ...data,
        draft,
        summary,
      };
    })
    .filter(blogs => blogs.draft!== true); // ✨ 过滤草稿博客

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-8">学术与技术博客/Academic & Tech Share</h1>
      <ul>
        {blogs.map(blog => (
          <li key={blog.slug} className="mb-8 border-b pb-4">
            <Link href={`/blogs/Academic/${blog.slug}`}>
              <div className="text-xl font-semibold hover:underline">{blog.title}</div>
              <div className="text-gray-500">{blog.language}</div>
              <div className="flex gap-2 mt-1 mb-2">
                {blog.tags && blog.tags.map((tag: string) => (
                  <span key={tag} className="px-2 py-0.5 rounded text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 transition-colors duration-200">{tag}</span>
                ))}
              </div>
              {blog.summary && (
                <div className="prose prose-sm dark:prose-invert">
                  <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
                    {blog.summary}
                  </ReactMarkdown>
                </div>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
