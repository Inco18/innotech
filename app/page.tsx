import Unbox from "@/components/homePage/Unbox";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center mb-10 lg:px-5 xl:px-32 px-2 max-w-[110rem] py-5">
      <section className="border-b-2 w-full grid grid-cols-1 lg:grid-cols-[30%_70%] 2xl:grid-cols-[25%_75%]">
        <Unbox />
        <div>
          <h2>We recommend</h2>
        </div>
      </section>
    </main>
  );
}
