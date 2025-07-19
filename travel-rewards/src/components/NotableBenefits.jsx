function NotableBenefits({cards}){
    
    const cardNotableBen = cards
    .filter(card => (card.notableBenefit !== ""))
    .map((card)=>(
        <li key={card.id}>
            <b>{card.cardName}:</b>
            <ul>
                <li><b><i>{card.notableBenefitTitle}: </i></b>  
                {card.notableBenefit}</li>
            </ul>
        </li>
    ))

    return(
        <div className="sideBySideCard">
            <h2>Notable Benefits</h2>
            <ul>
                {cardNotableBen}
            </ul>
        </div>
    );

}

export default NotableBenefits;