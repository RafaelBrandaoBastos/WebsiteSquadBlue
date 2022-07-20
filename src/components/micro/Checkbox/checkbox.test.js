/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import React from 'react';
import {screen, render} from "@testing-library/react";
import Checkbox from "./Checkbox.jsx";


describe("Checkbox Render Testing", () => { 
    it("should render", () => {
        render(
            <Checkbox
            type='checkbox'
            name='checkbox'
            />
        );
        const checkbox = screen.getByRole("checkbox", { hidden: true });
        const label = screen.getByText('I accept the terms and privacy');
        expect(checkbox).toBeInTheDocument();
        expect(label).toBeInTheDocument();
        })
    })
