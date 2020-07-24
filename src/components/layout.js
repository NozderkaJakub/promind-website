import React from "react";
import Header from "./header";

export default function Layout({ children }) {
    return (
        <>
            <Header siteName='PROmind' />
            <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
                <header style={{ background: `pink`, marginBottom: `1.5rem` }}>
                </header>
                {children}
            </div>
        </>
    );
};