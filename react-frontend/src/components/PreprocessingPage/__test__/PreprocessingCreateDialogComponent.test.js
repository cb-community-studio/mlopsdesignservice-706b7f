import React from "react";
import { render, screen } from "@testing-library/react";

import PreprocessingCreateDialogComponent from "../PreprocessingCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders preprocessing create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <PreprocessingCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("preprocessing-create-dialog-component")).toBeInTheDocument();
});
