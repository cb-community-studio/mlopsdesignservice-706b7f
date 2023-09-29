import React from "react";
import { render, screen } from "@testing-library/react";

import DeploymodelEditDialogComponent from "../DeploymodelEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders deploymodel edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <DeploymodelEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("deploymodel-edit-dialog-component")).toBeInTheDocument();
});
