export default function Section({ title, layout, children }) {
  return (
    <section className='bg-[#061b24] px-4 py-4 border-2 border-[#061b24] shadow-md rounded'>
      <h1 className=' mb-4 tracking-tighter leading-tight font-bold text-blue-400 text-4xl  font-mono'>{title}</h1>
      <div className={layout}>{children}</div>
    </section>
  )
}
