function MenuSection({ title, subtitle, items }) {
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

const antipasti = [
  {
    name: 'Caponata Siciliana',
    price: '$13',
    description:
      'Traditional Sicilian eggplant dish with fried eggplant, onions, tomatoes, olives, and capers in marinara sauce, served with garlic bread.'
  },
  {
    name: 'Mussels alla Diavola',
    price: '$16',
    description:
      'Fresh mussels sautéed with garlic, tomatoes, and olive oil in a white wine arrabbiata sauce, served with garlic bread.'
  },
  {
    name: 'Calamari Fritti',
    price: '$14',
    description:
      'Lightly breaded calamari fried until crispy and served with marinara and lemon.'
  },
  {
    name: 'Rhode Island Calamari',
    price: '$16',
    description:
      'Calamari lightly sautéed with banana peppers, capers in a lemon-wine arrabbiata sauce.'
  }
]

const primiPiatti = [
  {
    name: 'Gnocchi alla Toscana*',
    price: '$17',
    description:
      'Potato gnocchi with Italian sausage, spinach, roasted garlic, and cherry tomatoes in a creamy Parmesan sauce.'
  },
  {
    name: 'Pappardelle Bolognese*',
    price: '$21',
    description:
      'Wide ribbon pappardelle pasta with beef ragù sauce finished with Parmesan.'
  },
  {
    name: 'Tortellini Carbonara',
    price: '$23',
    description:
      'Cheese tortellini with bacon, egg yolk, Pecorino Romano, and black pepper cream.'
  },
  {
    name: 'Pollo Piccata*',
    price: '$22',
    description:
      'Chicken breast cutlet sautéed with lemon, capers, butter, herbs, and white wine over linguine.'
  },
  {
    name: 'Pasta Primavera*',
    price: '$18',
    description:
      'Seasonal vegetables sautéed with garlic, olive oil, and herbs over pasta.'
  },
  {
    name: 'Pollo or Melanzane Parmigiana',
    price: '$22',
    description: 'Chicken or eggplant parmigiana served with linguine.'
  },
  {
    name: 'Orecchiette con Salsiccia*',
    price: '$17',
    description:
      'Orecchiette pasta with Italian sausage and kale in a garlic white wine sauce.'
  }
]

const fruttiDiMare = [
  {
    name: 'Pan-Seared Cajun Tuna',
    price: '$22',
    description:
      '8 oz. fresh Cajun-seared tuna served over vegetable risotto with tomatoes, spinach, asparagus, lemon, and fresh basil.'
  },
  {
    name: 'Gamberoni alla Diavola',
    price: '$24',
    description:
      'Large shrimp sautéed with garlic, tomatoes, olive oil in a white wine arrabbiata sauce.'
  },
  {
    name: 'Gamberoni al Aglio',
    price: '$24',
    description:
      'Shrimp sautéed with cherry tomatoes, garlic, butter, lemon, parsley, and white wine.'
  },
  {
    name: 'Lobster Ravioli',
    price: '$27',
    description:
      'Lobster ravioli tossed in a creamy sauce with spinach, tomatoes, and lobster meat.'
  },
  {
    name: 'Baked Haddock',
    price: '$27',
    description:
      'Fresh baked haddock and asparagus, served with a lemon cream risotto.'
  }
]

const insalata = [
  {
    name: 'Caesar Salad',
    price: '$15',
    description:
      'Crisp romaine lettuce, Parmesan cheese, garlic croutons, and classic Caesar dressing.'
  },
  {
    name: 'Caprese',
    price: '$14',
    description:
      'Fresh mozzarella, vine-ripened tomatoes, basil, olive oil, and balsamic glaze.'
  },
  {
    name: 'Rocket Salad',
    price: '$14',
    description:
      'Peppery arugula with shaved Parmesan, cherry tomatoes, candied walnuts, and pears in a lemon vinaigrette.'
  },
  {
    name: 'Add Protein',
    price: '',
    description:
      'Grilled Chicken +8 | Steak +10 | Shrimp +9 | Pan-Seared Cajun Tuna +9'
  },
  {
    name: 'Soup of the Day',
    price: '',
    description: ''
  }
]

const piattiDiCarne = [
  {
    name: 'Steak Tips',
    price: '$22',
    description:
      'Marinated grilled steak tips finished with herbs served with mashed potatoes and broccoli.'
  },
  {
    name: 'Ribeye Steak',
    price: '$34',
    description:
      '14oz. grilled ribeye steak with sea salt, cracked pepper, and herb butter served with mashed potatoes and broccoli.'
  },
  {
    name: 'Surf & Turf',
    price: '$42',
    description:
      'Grilled steak paired with sautéed shrimp, lobster meat and a creamy risotto.'
  }
]

const burgers = [
  {
    name: 'House Burger',
    price: '$16',
    description:
      '2 beef smash burger patties with lettuce, tomato, onion, cheddar cheese, and house sauce.'
  }
]

const calzoni = [
  { name: 'Cheese', price: '$16.25', description: '' },
  { name: 'Meatball', price: '$19.95', description: '' },
  {
    name: 'Chicken Broccoli Alfredo',
    price: '$21.50',
    description: ''
  }
]

const kidsMenu = [
  {
    name: 'Pasta with Butter',
    price: '$8',
    description: 'Spaghetti tossed with butter and Parmesan.'
  },
  {
    name: 'Spaghetti & Meatballs',
    price: '$11',
    description: 'Classic spaghetti with marinara and homemade meatballs.'
  },
  {
    name: 'Chicken & Broccoli Alfredo',
    price: '$12',
    description:
      'Grilled chicken and broccoli tossed with fettuccine in Alfredo sauce.'
  },
  {
    name: 'Chicken Fingers & Fries',
    price: '$12',
    description: 'Crispy breaded chicken tenders served with fries.'
  }
]

const dolci = [
  {
    name: 'Tiramisu',
    price: '$12',
    description:
      'Espresso-soaked ladyfingers layered with mascarpone cream and cocoa.'
  },
  {
    name: 'The Big Chocolate Chip Cookie',
    price: '$12.50',
    description:
      'Share-worthy warm chocolate chip cookie with vanilla or chocolate ice cream, drizzled with caramel and chocolate.'
  }
]

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

const beverages = [
  { name: 'Assorted Soft Drinks', price: '', description: '' },
  { name: 'Coffee', price: '', description: '' },
  { name: 'Espresso', price: '', description: '' },
  { name: 'Tea', price: '', description: '' }
]

export default function FullMenu() {
  return (
    <div className="menu-page">
      <section className="section-card section-spacing">
        <div className="hero-eyebrow">Pecorino&apos;s</div>
        <h1 className="page-title">Full Menu</h1>
        <p className="page-copy">
          A complete look at Pecorino&apos;s menu, from antipasti and pasta to artisan
          pizza, calzoni, desserts, and beverages.
        </p>
      </section>

      <MenuSection title="Antipasti" items={antipasti} />
      <MenuSection title="Primi Piatti" items={primiPiatti} />
      <MenuSection title="Frutti di Mare" items={fruttiDiMare} />
      <MenuSection title="Insalata" items={insalata} />
      <MenuSection title="Piatti di Carne" items={piattiDiCarne} />
      <MenuSection title="Burgers" items={burgers} />
      <MenuSection title="Calzoni" items={calzoni} />
      <MenuSection title="Per i Bambini" items={kidsMenu} />
      <MenuSection title="Il Dolce" items={dolci} />
      <MenuSection
        title="Artisan Pizza"
        subtitle="Personal or Large • Gluten-free dough available."
        items={artisanPizza}
      />
      <MenuSection title="Beverages" items={beverages} />

      <p className="menu-footnote">
        Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs
        may increase your risk of food-borne illness. Please notify your server
        of any food allergies or dietary restrictions before ordering. While we
        take care in preparing your meal, our kitchen handles ingredients that
        may contain common allergens, and cross-contact may occur.
      </p>

      <p className="menu-footnote">
        *Items marked with an asterisk are available gluten-free upon request.
      </p>
    </div>
  )
}