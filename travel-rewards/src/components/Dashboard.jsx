import Header from './Header.jsx';
import Footer from './Footer.jsx';
import PointsTable from './PointsTable.jsx';
import AddCard from './AddCard.jsx';

function Dashboard({cards}){

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
                <PointsTable cards={cards}></PointsTable>
            </main>
            <Footer></Footer>
        </>
    );
}

export default Dashboard