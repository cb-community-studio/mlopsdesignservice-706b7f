import React from "react";
import { render, screen } from "@testing-library/react";

import PreprocessingEditDialogComponent from "../PreprocessingEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders preprocessing edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <PreprocessingEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("preprocessing-edit-dialog-component")).toBeInTheDocument();
});
