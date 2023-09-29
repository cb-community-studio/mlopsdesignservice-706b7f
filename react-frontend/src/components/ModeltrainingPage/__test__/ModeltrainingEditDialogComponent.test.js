import React from "react";
import { render, screen } from "@testing-library/react";

import ModeltrainingEditDialogComponent from "../ModeltrainingEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders modeltraining edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <ModeltrainingEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("modeltraining-edit-dialog-component")).toBeInTheDocument();
});
