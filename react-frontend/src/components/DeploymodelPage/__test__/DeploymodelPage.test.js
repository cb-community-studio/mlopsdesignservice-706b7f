import React from "react";
import { render, screen } from "@testing-library/react";

import DeploymodelPage from "../DeploymodelPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders deploymodel page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <DeploymodelPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("deploymodel-datatable")).toBeInTheDocument();
    expect(screen.getByRole("deploymodel-add-button")).toBeInTheDocument();
});
