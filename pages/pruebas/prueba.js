import React, { useEffect, useState } from 'react';

import dynamic from 'next/dynamic';

const ComponentUE = dynamic(() => import('../../components/dinamic/useEffectCompHight'), {
    ssr: false,
});     

export default function useEffectAdvancedPage() {    

    return (
        <>
            <ComponentUE/>
            
        </>
    )
}