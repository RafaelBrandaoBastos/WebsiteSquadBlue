/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import React from 'react';
import {screen, render} from "@testing-library/react";
import Input from "./Input.jsx";

describe("Input Testing", () => { 
    it("should start with values", () => {
        render(
            <Input
            label='Full Name'
            type='text'
            placeholder='Foo Bar'
            />
        );
        expect(screen.queryByText('Full Name')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Foo Bar')).toBeInTheDocument();
        })
    })
