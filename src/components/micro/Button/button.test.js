/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import React from 'react';
import {screen, render} from "@testing-library/react";
import Button from "./Button.jsx";

describe("Button Render Testing", () => { 
    it("should render", () => {
        render(
            <Button
            name='Next' 
            type='submit'
            />
        );
        const button= screen.getByRole("button");
        const label = screen.getByText("Next");
        expect(button).toBeInTheDocument();
        expect(label).toBeInTheDocument();
        })
    })
