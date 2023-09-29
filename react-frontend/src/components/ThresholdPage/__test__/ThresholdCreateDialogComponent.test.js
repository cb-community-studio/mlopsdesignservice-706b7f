import React from "react";
import { render, screen } from "@testing-library/react";

import ThresholdCreateDialogComponent from "../ThresholdCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders threshold create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <ThresholdCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("threshold-create-dialog-component")).toBeInTheDocument();
});
