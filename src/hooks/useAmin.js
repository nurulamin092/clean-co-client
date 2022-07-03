import React from 'react';
import { useState } from 'react';

const useAmin = () => {
    const [admin, setAdmin] = useState(true);
    return [admin, setAdmin];
};

export default useAmin;