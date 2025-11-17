const itens = [
    { 
        img: "img/carbonara.webp", 
        title: "Macarrão Carbonara", 
        description: "Clássico italiano com ovos, queijo Pecorino, guanciale e pimenta do reino. Cremoso e saboroso.", 
        price: 23 
    },
    { 
        img: "img/hambuguer.webp", 
        title: "Hambúrguer Cheddar", 
        description: "Pão brioche, suculento blend de carne, queijo cheddar derretido e molho especial da casa.", 
        price: 30 
    },
    { 
        img: "img/pizza.webp", 
        title: "Pizza Marguerita", 
        description: "Massa fina, molho de tomate fresco, muçarela de búfala, manjericão e azeite extra virgem.", 
        price: 40 
    }
];

function CardFood({ img, title, description, price, isExpanded, onToggle }) {
    const cardClass = isExpanded ? "card expanded" : "card";

    return (
        <div className={cardClass} onClick={onToggle}>
            <div className="card-header">
                <img src={img} className="card-img" alt={title} />
            </div>
            <div className="card-main">
                <p className="card-content title">{title}</p>
                <p className="card-content price">R$: {price}</p>
            </div>
            <div className="card-footer">
                <p className="card-content">{description}</p>
            </div>
        </div>
    );
}

function App() {
    const [expandedCardIndex, setExpandedCardIndex] = React.useState(null);

    const handleCardToggle = (index) => {
        setExpandedCardIndex(expandedCardIndex === index ? null : index);
    };

    const everyFood = itens.map((item, index) => (
        <CardFood 
            key={item.title}
            img={item.img} 
            title={item.title} 
            description={item.description} 
            price={item.price} 
            isExpanded={expandedCardIndex === index}
            onToggle={() => handleCardToggle(index)}
        />
    ));

    return (
        <>
            <header>
                <h1>🍕 Menu Principal</h1>
                <p className="subtitle">Delícias preparadas com ingredientes frescos.</p>
            </header>
            <div className="main-card">
                {everyFood}
            </div>
        </>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));