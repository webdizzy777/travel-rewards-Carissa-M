function FinancialSnapshot({cards}){

    //function to format date if input from the date picker
    function formatDate(date){
        let formattedDate = "";
        if(/^\d{4}-\d{2}-\d{2}$/.test(date)){
            const [year, month, day] = date.split("-");
            formattedDate = `${month}/${day}/${year}`;
            return formattedDate;
        }else{
            formattedDate = date;
            return formattedDate;
        }
    }

    //create a function to format numbers as currency
    function formatCurrency(num){
        let formatted = new Intl.NumberFormat('en-US',{
            style: 'currency',
            currency: 'USD',
        }).format(num);

        return formatted;
    }

    //function to format due date
    function formatDueDate(dueDate){
        if(dueDate == 1 || dueDate == 21 || dueDate == 31){
            return `${dueDate}st`;
        }else if(dueDate == 2 || dueDate == 22){
            return `${dueDate}nd`;
        }else if(dueDate == 3 || dueDate == 23){
            return `${dueDate}rd`;
        }else if((dueDate >= 4 && dueDate <= 20) || (dueDate >= 24 && dueDate <= 30)){
            return `${dueDate}th`;
        }else{
            return dueDate
        }
    }

    //find lowest APR
    const aprs = cards.map((c)=>c.apr);
    const lowestApr = Math.min(...aprs);

    //fill out the table
    //red style if utilization above threshold
    const cardNameF = cards.map((c) => {
        const utilization = ((c.balance / c.creditLimit).toFixed(2))*100;
        return (
            <tr key={c.id}>
            <td>{c.cardName}</td>
            <td>${c.fee}</td>
            <td>{formatDate(c.dateOpened)}</td>
            <td>{c.apr === lowestApr
                ? <span className="green"><b>{c.apr}%</b></span>
                : `${c.apr}%`
                }</td>
            <td>{formatCurrency(c.creditLimit)}</td>
            <td>{formatCurrency(c.balance)}</td>
            <td>
                {utilization > 30
                ? <span className="red">{utilization}%</span>
                : `${utilization}%`}
            </td>
            <td>{formatDueDate(c.dueDate)}</td>
            </tr>
        );
    });


    return(
        <>
            <div className="card">
                <table>
                    <thead>
                        <tr>
                            <th>Card Name</th>
                            <th>Fee</th>
                            <th>Date Opened</th>
                            <th>APR</th>
                            <th>Credit Limit</th>
                            <th>Balance</th>
                            <th>Utilization</th>
                            <th>Due Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cardNameF}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default FinancialSnapshot;