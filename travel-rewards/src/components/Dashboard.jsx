import Header from './Header.jsx';
import Footer from './Footer.jsx';
import AddCard from './AddCard.jsx';

function Dashboard({cards}){

    const cardNames = cards.map((cardN)=>(
        <td key={cardN.id}>{cardN.cardName}</td>
    ));

    const cardGas = cards.map((cardG)=>(
        <td key={cardG.id}>{cardG.gas}</td>
    ))

    const cardRestaurant = cards.map((cardR) => (
        <td key={cardR.id}>{cardR.restaurant}</td>
    ));

    const cardSupermarket = cards.map((cardS)=>(
        <td key={cardS.id}>{cardS.supermarket}</td>
    ));

    const cardDiscount = cards.map((cardD)=>(
        <td key={cardD.id}>{cardD.supermarket}</td>
    ));

    const cardWholesale = cards.map((cardW)=>(
        <td key={cardW.id}>{cardW.wholesale}</td>
    ));

    const cardOShopping = cards.map((cardO)=>(
        <td key={cardO.onlineShopping}>{cardO.onlineShopping}</td>
    ));

    const cardUtilities = cards.map((cardU)=>(
        <td key={cardU.utilities}>{cardU.utilities}</td>
    ));

    const cardInternet = cards.map((cardI)=>(
        <td key={cardI.internet}>{cardI.internet}</td>
    ));

    const cardPhone = cards.map((cardP)=>(
        <td key={cardP.phone}>{cardP.phone}</td>
    ));

    const cardTravel = cards.map((cardT)=>(
        <td key={cardT.travel}>{cardT.travel}</td>
    ));

    const cardOther = cards.map((cardOt)=>(
        <td key={cardOt.other}>{cardOt.other}</td>
    ));
    
    // const cardExpiringRewards = cards.map((cardER)=>(
    //     <td key={cardER.expiringRewards}>{cardER.expiringRewards}</td>
    // ));

    // const cardExpiringDate = cards.map((cardED)=>(
    //     <td key={cardED.expiringDate}>{cardED.expiringDate}</td>
    // ));

    return(
        <>
            <Header></Header>
            <main>
                <div className='center'>
                    <AddCard></AddCard>
                    <button>Edit Card</button>
                </div>
                <div className="card">
                    <table>
                        <tr>
                            <th>Card Name</th>
                            {cardNames}
                        </tr>
                        <tr>
                            <th>Gas</th>
                            {cardGas}
                        </tr>
                        <tr>
                            <th>Restaurant</th>
                            {cardRestaurant}
                        </tr>
                        <tr>
                            <th>Supermarket</th>
                            {cardSupermarket}
                        </tr>
                        <tr>
                            <th>Discount</th>
                            {cardDiscount}
                        </tr>
                        <tr>
                            <th>Wholesale</th>
                            {cardWholesale}
                        </tr>
                        <tr>
                            <th>Online Shopping</th>
                            {cardOShopping}
                        </tr>
                        <tr>
                            <th>Utilities</th>
                            {cardUtilities}
                        </tr>
                        <tr>
                            <th>Internet</th>
                            {cardInternet}
                        </tr>
                        <tr>
                            <th>Phone</th>
                            {cardPhone}
                        </tr>
                        <tr>
                            <th>Travel</th>
                            {cardTravel}
                        </tr>
                        <tr>
                            <th>Other</th>
                            {cardOther}
                        </tr>
                    </table>
                </div>
            </main>
            <Footer></Footer>
        </>
    );
}

export default Dashboard