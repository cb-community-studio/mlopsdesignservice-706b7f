import React from "react";
import { render, screen } from "@testing-library/react";

import ModelselectionEditDialogComponent from "../ModelselectionEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders modelselection edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <ModelselectionEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("modelselection-edit-dialog-component")).toBeInTheDocument();
});
