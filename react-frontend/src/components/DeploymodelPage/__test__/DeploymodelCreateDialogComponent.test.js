import React from "react";
import { render, screen } from "@testing-library/react";

import DeploymodelCreateDialogComponent from "../DeploymodelCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders deploymodel create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <DeploymodelCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("deploymodel-create-dialog-component")).toBeInTheDocument();
});
