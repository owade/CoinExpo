import { ChainList } from "components/Platforms/ChainList";
import { useState } from "react";

export default function Chain() {

    const [view, setView] = useState('grid');

    return (
        <>           
            <ChainList view={view} setView={setView} />
        </>

    )
}


