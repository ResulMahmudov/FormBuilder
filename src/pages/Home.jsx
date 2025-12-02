import Modul from '../components/Modul';
import Setting from '../components/Setting';

const Home = () => {
  return (

    <div className='flex w-full h-[calc(100vh-64px)] '>
      <section className="flex-1  flex items-center  justify-center bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] bg-white">
        <Modul />
      </section>

      <section className="w-80 h-full border-l border-gray-200 bg-white flex flex-col items-center justify-center text-gray-400 text-sm ">
        <Setting />
      </section>
    </div>
  )
}

export default Home;