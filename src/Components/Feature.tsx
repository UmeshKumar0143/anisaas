import EcosystemSvg from '../assets/icons/ecosystem.svg'


export default function Feature({title, desc,index}:{title: string, desc: string,index:number}) {
  return <div
    className=" sm:flex-1 relative border mt-6 flex flex-col gap-6 py-6 rounded-xl px-4 "
    key={index}
    >
    <div style={{
      WebkitMaskImage:
        "radial-gradient(100px 100px at 0px 0px ,black , transparent)",
      maskImage:"radial-gradient(100px 100px at 0px 0px ,black ,transparent)"}} className='absolute inset-0 rounded-xl border-2 border-purple-400'></div>
    <div className="flex  justify-center">
      <div className="bg-white w-14 h-14 inline-flex  rounded-xl justify-center items-center">
        <EcosystemSvg className="w-5 h-5 text-black" />
      </div>
    </div>
    <h1 className="text-center text-2xl font-bold ">{title}</h1>
    <p className="text-xl  text-white/70 text-center">{desc}</p>
  </div>;
}
