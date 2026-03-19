function PizzaSection({ title, subtitle, items }) {
  return (
    <section className="menu-section section-card section-spacing">
      <div className="menu-section-heading">
        <h2 className="menu-section-title">{title}</h2>
        {subtitle ? <p className="menu-section-subtitle">{subtitle}</p> : null}
      </div>

      <div className="menu-item-list">
        {items.map((item) => (
          <article key={item.name} className="menu-item">
            <div className="menu-item-header">
              <h3 className="menu-item-name">{item.name}</h3>
              {item.price ? (
                <span className="menu-item-price">{item.price}</span>
              ) : null}
            </div>

            {item.description ? (
              <p className="menu-item-description">{item.description}</p>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  )
}

const artisanPizza = [
  {
    name: 'Plain Pizza*',
    price: '$12.95 / $17.95',
    description: 'Tomato sauce and mozzarella.'
  },
  {
    name: 'Pesto Pizza*',
    price: '$16.95 / $21.95',
    description:
      'Pesto, fresh mozzarella, tomatoes, and grilled chicken.'
  },
  {
    name: 'Greek Pizza*',
    price: '$16.95 / $21.95',
    description: 'Spinach, garlic, tomatoes, and feta.'
  },
  {
    name: 'Mexican Pizza*',
    price: '$15.95 / $21.95',
    description:
      'Onions, ground beef, black olives, and jalapeños topped with Big Mac sauce.'
  },
  {
    name: 'Hawaiian Pizza*',
    price: '$15.50 / $20.95',
    description: 'Ham, pineapple, and jalapeños.'
  },
  {
    name: 'Veggie Pizza*',
    price: '$16.95 / $21.95',
    description:
      'Onions, mushrooms, peppers, broccoli, spinach, tomatoes, and black olives.'
  },
  {
    name: 'Chicken Broccoli Alfredo Pizza*',
    price: '$16.95 / $21.95',
    description: 'Grilled chicken, broccoli, and Alfredo sauce.'
  },
  {
    name: 'Pecorino’s Siciliano',
    price: '$18.95',
    description:
      'Thick Sicilian dough topped with sausage and roasted peppers.'
  }
]

const calzoni = [
  {
    name: 'Cheese',
    price: '$16.25',
    description: ''
  },
  {
    name: 'Meatball',
    price: '$19.95',
    description: ''
  },
  {
    name: 'Chicken Broccoli Alfredo',
    price: '$21.50',
    description: ''
  }
]

export default function PizzaCalzoni() {
  return (
    <div className="menu-page">
      <section className="section-card section-spacing">
        <div className="hero-eyebrow">Pecorino&apos;s</div>
        <h1 className="page-title">Artisan Pizza &amp; Calzoni</h1>
        <p className="page-copy">
          House pizzas and calzoni served in a classic Italian style.
        </p>
      </section>

      <PizzaSection
        title="Artisan Pizza"
        subtitle="Personal or Large • Gluten-free dough available."
        items={artisanPizza}
      />

      <PizzaSection title="Calzoni" items={calzoni} />

      <p className="menu-footnote">
        *Items marked with an asterisk are available gluten-free upon request.
      </p>
    </div>
  )
}