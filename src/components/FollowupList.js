import React, { useState, useEffect } from 'react';

function FollowupList() {
    const [followups, setFollowups] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('/.netlify/functions/followup');
            const data = await response.json();
            setFollowups(data);
        }

        fetchData();
    }, []);

    return ( <
        div >
        <
        h2 > Seguimientos < /h2> <
        ul > {
            followups.map((followup) => ( <
                li key = { followup.id } > { followup.message } < /li>
            ))
        } <
        /ul> <
        /div>
    );
}

export default FollowupList;