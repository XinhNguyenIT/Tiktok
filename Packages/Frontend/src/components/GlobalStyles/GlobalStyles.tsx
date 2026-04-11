// src/components/GlobalStyles/index.tsx
import React from 'react';
import './GlobalStyles.scss'; // Import file CSS vừa tạo

interface Props {
    children: React.ReactElement;
}

function GlobalStyles({ children }: Props) {
    // Trả về con của nó (là App) sau khi đã được "ngấm" CSS global
    return children;
}

export default GlobalStyles;