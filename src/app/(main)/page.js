import Leftsidebar from "@/app/components/home/Leftsidebar";
import Rightsidebar from "@/app/components/home/Rightsidebar";

async function fetchData(params) {
  const res = await fetch("https://openapi.programming-hero.com/api/news/categories");
  const data = await res.json();
  return data.data;
}
async function getnewsbyCategory(category_id) {
  const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`);
  const data = await res.json();
  return data.data;
}


export default async function Home() {
  const data = await fetchData();
  const categories = await fetchData();
  const news = await getnewsbyCategory("01");
  

  return (
    <div className="max-w-7xl mx-auto flex flex-col flex-1 items-center font-sans w-full">
      <main className="grid grid-cols-12 items-start lg:gap-5 mt-14 justify-between w-full">
        <div className="col-span-3">
          <Leftsidebar categories={categories} activeId={"04"} />
        </div>
        <div className="col-span-7">
          <h2 className="text-xl font-semibold">Dragon news home</h2>
          {news.map(newss=> (
            <p key={newss.title}>{newss.title}</p>
          ))}
        </div>
        <div className="col-span-2">
          <Rightsidebar/>
        </div>
      </main>
    </div>
  );
}
