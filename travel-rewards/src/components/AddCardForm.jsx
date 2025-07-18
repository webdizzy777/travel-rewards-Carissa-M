import Footer from "./Footer.jsx"
import Header from "./Header.jsx"
import { useState } from "react";
import { Link } from "react-router";

function AddCardForm({cards, setCards}){

    // Creating a new card array in App.jsx with the initial card array passed into useState and passing it as a prop to get updated here, as well as a prop to the dashboard to display. Creating a getter variable and a setter function to capture the values entered as input to the form, using e.target.value to set the variables on each input change. On click of the Add Card button, setting the cards variable using the spread operator to keep the original array intact and append the new card object that contains the set variables as values for the keys.

    const [cardNm, setCardNm] = useState("");
    const [cardGs, setCardGs] = useState();
    const [cardRs, setCardRs] = useState();
    const [cardSp, setCardSp] = useState();
    const [cardDs, setCardDs] = useState();
    const [cardWh, setCardWh] = useState();
    const [cardOn, setCardOs] = useState();
    const [cardUt, setCardUt] = useState();
    const [cardIn, setCardIn] = useState();
    const [cardPh, setCardPh] = useState();
    const [cardTr, setCardTr] = useState();
    const [cardOh, setCardOh] = useState();
    const [cardExp, setCardExp] = useState();
    const [cardExD, setCardExD] = useState();
 
    function handleAddCard(){
        const idN = (cards.length) + 1;
        const newCard = {
            id: idN,
            cardName: cardNm,
            gas: cardGs,
            restaurant: cardRs,
            supermarket: cardSp,
            discount: cardDs,
            wholesale: cardWh,
            onlineShopping: cardOn,
            utilities: cardUt,
            internet: cardIn,
            phone: cardPh,
            travel: cardTr,
            other: cardOh,
            expiringRewards: cardExp,
            expiringDate: cardExD
        }
        setCards([...cards, newCard]);
    }

    function handleAddName(e){
        setCardNm(e.target.value);
    }

    function handleAddGas(e){
        setCardGs(e.target.value);
    }

    function handleAddRestaurant(e){
        setCardRs(e.target.value);
    }

    function handleAddSupermarket(e){
        setCardSp(e.target.value);
    }

    function handleAddDiscount(e){
        setCardDs(e.target.value);
    }

    function handleAddWholesale(e){
        setCardWh(e.target.value);
    }

    function handleAddOnlineShopping(e){
        setCardOs(e.target.value);
    }

    function handleAddUtilities(e){
        setCardUt(e.target.value);
    }

    function handleAddInternet(e){
        setCardIn(e.target.value);
    }

    function handleAddPhone(e){
        setCardPh(e.target.value);
    }

    function handleAddTravel(e){
        setCardTr(e.target.value);
    }

    function handleAddOther(e){
        setCardOh(e.target.value);
    }

    function handleAddExpiringRewards(e){
        setCardExp(e.target.value);
    }

    function handleAddExpiringDate(e){
        setCardExD(e.target.value);
    }

    return(
        <>
            <Header></Header>
            <main>
                <div className="card">
                    <label htmlFor="cardName"><span classNameName=""><b>Card Name</b></span>
                        <br />
                        <input type="text" className="addCardInput" value={cardNm} onChange={handleAddName} required />
                    </label>
                    <br />
                    <label htmlFor="gas"><span classNameName=""><b>Gas Points</b></span>
                        <br />
                        <input type="number" className="addCardInput" value={cardGs} onChange={handleAddGas} required />
                    </label>
                    <label htmlFor="restaurant"><span classNameName=""><b>Restaurant Points</b></span>
                        <br />
                        <input type="number" className="addCardInput" value={cardRs} onChange={handleAddRestaurant} required />
                    </label>
                    <br />
                    <label htmlFor="supermarket"><span classNameName=""><b>Supermarket Points</b></span>
                        <br />
                        <input type="number" className="addCardInput" value={cardSp} onChange={handleAddSupermarket} />
                    </label>
                    <label htmlFor="discount"><span classNameName=""><b>Discount Store Points</b></span>
                        <br />
                        <input type="number" className="addCardInput" value={cardDs} onChange={handleAddDiscount} />
                    </label>
                    <label htmlFor="wholesale"><span classNameName=""><b>Wholesale Store Points</b></span>
                        <br />
                        <input type="number" className="addCardInput" value={cardWh} onChange={handleAddWholesale} />
                    </label>
                    <label htmlFor="online"><span classNameName=""><b>Online Shopping Points</b></span>
                        <br />
                        <input type="number" className="addCardInput" value={cardDs} onChange={handleAddOnlineShopping} />
                    </label>
                    <label htmlFor="utilities"><span classNameName=""><b>Utility Points</b></span>
                        <br />
                        <input type="number" className="addCardInput" value={cardUt} onChange={handleAddUtilities} />
                    </label>
                    <label htmlFor="internet"><span classNameName=""><b>Internet Points</b></span>
                        <br />
                        <input type="number" className="addCardInput" value={cardIn} onChange={handleAddInternet} />
                    </label>
                    <label htmlFor="phone"><span classNameName=""><b>Phone Points</b></span>
                        <br />
                        <input type="number" className="addCardInput" value={cardPh} onChange={handleAddPhone} />
                    </label>
                    <label htmlFor="travel"><span classNameName=""><b>Travel Points</b></span>
                        <br />
                        <input type="number" className="addCardInput" value={cardTr} onChange={handleAddTravel} />
                    </label>
                    <label htmlFor="other"><span classNameName=""><b>Other Spend Points</b></span>
                        <br />
                        <input type="number" className="addCardInput" value={cardOh} onChange={handleAddOther} />
                    </label>
                    <label htmlFor="expiring"><span classNameName=""><b>Rewards That Expire</b></span>
                        <br />
                        <input type="text" className="addCardInput" value={cardExp} onChange={handleAddExpiringRewards} />
                    </label>
                    <label htmlFor="expDate"><span classNameName=""><b>Use By Date</b></span>
                        <br />
                        <input type="date" className="addCardInput" value={cardExD} onChange={handleAddExpiringDate} />
                    </label>
                    <br /><br />
                    <Link to="/dashboard"><button onClick={handleAddCard}>Add Card</button></Link>
                </div>
            </main>
            <Footer></Footer>
        </>
    )
}

export default AddCardForm;