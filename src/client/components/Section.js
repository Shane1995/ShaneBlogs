export default function Section({ title, layout, children }) {
  return (
    <section>
      <h1 className='text-center mb-4 text-white text-4xl pt-4 font-mono'>{title}</h1>
      <div className={layout}>{children}</div>
    </section>
  )
}
