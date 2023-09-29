import React from "react";
import { render, screen } from "@testing-library/react";

import ModelselectionPage from "../ModelselectionPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders modelselection page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <ModelselectionPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("modelselection-datatable")).toBeInTheDocument();
    expect(screen.getByRole("modelselection-add-button")).toBeInTheDocument();
});
