import Header from './Header.jsx';
import Footer from './Footer.jsx';

function Dashboard(){
    return(
        <>
            <Header></Header>
            <main>
                <button>Add Card</button>
                <button>Edit Card</button>
            </main>
            <Footer></Footer>
        </>
    );
}

export default Dashboard