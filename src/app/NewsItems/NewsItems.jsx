"use client"
import Context from "@/Context/Context";
import { useContext, useEffect } from "react";
const NewsItem = ({ article }) => {
  return (
    <div>
    <div className="max-w-[400px] h-[400px] hover:scale-105 duration-500 cursor-pointer ml-11 mt-11 mr-11 bg-white rounded-xl shadow-md overflow-hidden">
      <div>
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full object-cover bg-center bg-cover md:w-full"
            src={article.urlToImage || "https://placekitten.com/600/500"}
            alt="Card image"
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{article.source.name}</div>
          <a href={article.url} target="_blank" rel="noopener noreferrer" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline duration-700">
            {article.title}
          </a>
          <p className="mt-2 text-gray-500">{article.description}</p>
        </div>
      </div>
    </div>
    </div>
  );
};

const NewsItems = () => {
  const { data, setData ,category } = useContext(Context);

  async function getNews() {
    const res = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=a1e37b45bd1c48ad8ed8b09b965962a7`);
    const news = await res.json();
    setData(news.articles);
  }

  useEffect(() => {
    getNews();
  }, [category]);

  return (
    <div className="grid grid-cols-4 md:grid-cols-1">
      {data.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </div>
  );
};

export default NewsItems;
