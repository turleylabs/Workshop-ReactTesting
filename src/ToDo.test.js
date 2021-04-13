import React from "react";
import { render, screen, getDefaultNormalizer, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ToDo } from "./ToDo";


// TEST 1
test("should have an add button", () => {
    render(<ToDo />);
});

// TEST 2
xtest("list should start out with no items", () => {
    render(<ToDo />);
});

// TEST 3
xtest("list contains initial items", () => {
    const items = ["brush teeth", "eat breakfast"];
    render(<ToDo items={items} />);
});

// TEST 4
xtest("adding items to the list", () => {
    render(<ToDo />);

    // query for the textbox
    // const toDoInput = ??;

    // Type something in the textbox

    // query for the add button
    // const button = ??;

    // Click the button

    // expect to see the todo item in the list
});

