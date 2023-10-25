import { useState } from 'react'

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
    <h2>Almaty, Kazhakhstan</h2>
    <panel
    title="About"
    isActive={activeIndex === 0}
    onShow={() => setActiveIndex(0)}
    >
      With a population of about 2million, Almaty is kazhakhstan's largest city. From 1929 to 1997, it was its capital city
    </panel>
    <panel
    title="Etymology"
    isActive={activeIndex === 1}
    onShow={() => setActiveIndex(1)}
    >
      The name comes from <span lang="kk-KZ">a^Ma</span>, the Kazhakh word for "apple" and is often translated as "full of apples". In fact the region sorrounding the almaty is thought to be the ancestrial home of the apple, and the wild <i lang="la">Malus Seiversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.
    </panel>
    </>
  );
}

function Panel({
  title,
  children,
  isActive,
  onShow
}) {
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={onShow}>
          Show
        </button>
      )}
    </section>
  );
}