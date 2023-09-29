import React from "react";
import { render, screen } from "@testing-library/react";

import ModeltrainingCreateDialogComponent from "../ModeltrainingCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders modeltraining create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <ModeltrainingCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("modeltraining-create-dialog-component")).toBeInTheDocument();
});
