/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import React, {useContext, useEffect, useState} from 'react';
import {screen, render} from "@testing-library/react";
import Title from "./Title.jsx";
import {TabsProvider, TabsContext} from '../../../contexts/TabsProvider'

describe("Input Testing", () => { 
    it("should render", () => {  
    render(
        <TabsContext.Provider value="0">
            <Title/>
        </TabsContext.Provider>
    );
    const title = screen.queryByText('Team Sign Up');
    expect(title).toBeInTheDocument();
})
});


/*
describe("Title Render Testing", () => { 
    it("should render", () => {
        render(
            <TabsContext.Provider value={new selectedTab()}>
                <Title/>
            </TabsContext.Provider>  
        );
        const selectElement = screen.getByText("Team Sign Up");
        expect(selectElement).toBeInTheDocument();
        })
    })*/
