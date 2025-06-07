import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import remarkGfm from "remark-gfm";
import { FaGithub } from "react-icons/fa";

export default async function BlogDetail({ params }: { params: { slug: string[] } }) {
  const { slug } = params;

  try {
    const mdPath = path.join(process.cwd(), "app/blogs", ...slug, "index.md");
    const file = fs.readFileSync(mdPath, "utf-8");
    const { data, content } = matter(file);

    const processedContent = await remark()
      .use(remarkGfm)
      .use(html)
      .process(content);
    const contentHtml = processedContent.toString();

    return (
      <div className="max-w-4xl mx-auto p-8">

        <article>
          <header className="mb-8">
            <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              {data.title}
            </h1>

            {data.date && (
              <div className="text-gray-600 dark:text-gray-400 mb-2">
                Upload time: {data.date}
              </div>
            )}

            {data.tags?.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {data.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {data.repoURL && (
              <a
                href={data.repoURL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
              >
                <FaGithub className="text-lg" />
                Take a look at the code
              </a>
            )}
          </header>

          <div
            className="prose prose-lg dark:prose-invert max-w-none
              prose-headings:text-gray-900 dark:prose-headings:text-gray-100
              prose-p:text-gray-700 dark:prose-p:text-gray-300
              prose-a:text-blue-600 dark:prose-a:text-blue-400
              prose-a:no-underline hover:prose-a:underline
              prose-strong:text-gray-900 dark:prose-strong:text-gray-100
              prose-code:text-pink-600 dark:prose-code:text-pink-400
              prose-code:bg-gray-100 dark:prose-code:bg-gray-800
              prose-pre:bg-gray-900 dark:prose-pre:bg-gray-800
              prose-blockquote:border-blue-500 dark:prose-blockquote:border-blue-400
              prose-th:text-gray-900 dark:prose-th:text-gray-100
              prose-td:text-gray-700 dark:prose-td:text-gray-300"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </article>

      </div>
    );

  } catch (error: any) {
    return (
      <div className="max-w-4xl mx-auto p-8">
        <div className="bg-red-50 dark:bg-red-900 border border-red-200 dark:border-red-700 rounded-lg p-4">
          <h1 className="text-xl font-bold text-red-800 dark:text-red-200 mb-2">
            加载博客失败
          </h1>
          <div className="text-red-700 dark:text-red-300">
            <div><strong>Slug:</strong> {JSON.stringify(slug)}</div>
            <div><strong>错误:</strong> {error.message}</div>
          </div>
        </div>
      </div>
    );
  }
}
