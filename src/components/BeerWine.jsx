const cocktails = [
  {
    name: 'Raspberry French Gimlet',
    price: '15',
    description:
      'Pearl raspberry vodka, elderflower tonic, splash of lime juice.'
  },
  {
    name: 'Blue Lemon Drop Martini',
    price: '15',
    description:
      'Pearl blueberry vodka, lemon juice, simple syrup with a sugar rim.'
  },
  {
    name: 'French 75',
    price: '15',
    description:
      'Bombay Sapphire, lemon juice, simple syrup, topped with prosecco.'
  },
  {
    name: 'Espresso Martini',
    price: '16',
    description:
      'Pearl Vanilla Bean vodka with Borghetti espresso liqueur.'
  },
  {
    name: 'Italian Margarita',
    price: '15',
    description:
      'House tequila, Aperol, orange juice, lime juice.'
  },
  {
    name: 'Italian Old Fashioned',
    price: '17',
    description:
      'Woodford, drop of bourbon-soaked cherry juice, bitters.'
  },
  {
    name: "Pecorino's Paloma",
    price: '17',
    description:
      'Patrón, grapefruit juice, lime juice, soda, and fresh citrus.'
  },
  {
    name: 'White Sangria',
    price: '16',
    description:
      'Pinot Grigio, Pearl Pomegranate vodka, lemon juice, fresh strawberry slices.'
  },
  {
    name: 'Cheesecake Martini',
    price: '15',
    description:
      'Pearl Vanilla Bean vodka, cherry juice, splash of cherry juice.'
  },
  {
    name: 'Whiskey Sour',
    price: '16',
    description:
      'Jameson Orange, lemon juice, simple syrup, splash of soda.'
  }
]

const redWines = [
  'Woodbridge Pinot Noir',
  'Woodbridge Cabernet Sauvignon',
  'Woodbridge Merlot',
  'Ruffino Chianti',
  'Camila Malbec'
]

const whiteWines = [
  'Woodbridge Pinot Grigio',
  'Woodbridge Sauvignon Blanc',
  'Woodbridge Chardonnay'
]

const blushWines = ['Woodbridge Rosé']

const beers = [
  'Budweiser',
  'Bud Light',
  'Coors Light',
  'Michelob Ultra',
  'Miller Lite',
  'Corona Extra',
  'Blue Moon',
  'Guinness',
  "Litherman's Misguided Angel",
  'Miller High Life',
  'Sam Adams Cold Snap',
  'Sun Cruiser',
  'Nütrl — Blueberry, Peach, Cranberry, Orange',
  'Stella',
  'Leffe',
  'Birra Moretti',
  'Stoneface IPA',
  'Deciduous Easy Operator',
  'Citizen Unified Press',
  'Citizen Wits Up'
]

const nonAlcoholic = ['Michelob Ultra Zero', 'Stella Zero']

const draftBeer = ['Michelob Ultra', 'Stoneface Sunday Sauce']

function WineList({ title, items }) {
  return (
    <div className="beverage-subsection">
      <h3 className="beverage-subtitle">{title}</h3>
      <ul className="beverage-simple-list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default function BeerWine() {
  return (
    <div className="beverage-page">
      <section className="section-card section-spacing beverage-hero-card">
        <div className="hero-eyebrow">Pecorino&apos;s</div>
        <h1 className="page-title beverage-main-title">Beer and Wine List</h1>
        <p className="page-copy beverage-intro">
          A classic selection of cocktails, wines, beer, and draft pours curated
          to complement the warm Italian dining experience at Pecorino&apos;s.
        </p>
      </section>

      <section className="section-card section-spacing">
        <div className="beverage-section-header">
          <span className="beverage-kicker">Signature Cocktails</span>
          <h2 className="page-title">Cocktails</h2>
        </div>

        <div className="cocktail-list">
          {cocktails.map((cocktail) => (
            <article className="cocktail-item" key={cocktail.name}>
              <div className="cocktail-heading-row">
                <h3 className="cocktail-name">{cocktail.name}</h3>
                <span className="cocktail-price">${cocktail.price}</span>
              </div>
              <p className="cocktail-description">{cocktail.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-card section-spacing">
        <div className="beverage-section-header">
          <span className="beverage-kicker">Wine Selection</span>
          <h2 className="page-title">Wines</h2>
        </div>

        <div className="beverage-grid">
          <WineList title="Reds" items={redWines} />
          <WineList title="Whites" items={whiteWines} />
          <WineList title="Blush" items={blushWines} />
        </div>
      </section>

      <section className="section-card section-spacing">
        <div className="beverage-section-header">
          <span className="beverage-kicker">Bottle, Can, and Draft</span>
          <h2 className="page-title">Beer</h2>
        </div>

        <div className="beverage-grid">
          <div className="beverage-subsection beverage-subsection-wide">
            <h3 className="beverage-subtitle">Beer Selection</h3>
            <ul className="beverage-simple-list beverage-columns">
              {beers.map((beer) => (
                <li key={beer}>{beer}</li>
              ))}
            </ul>
          </div>

          <WineList title="Non Alcoholic" items={nonAlcoholic} />
          <WineList title="Draft" items={draftBeer} />
        </div>
      </section>
    </div>
  )
}