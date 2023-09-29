import React from "react";
import { render, screen } from "@testing-library/react";

import DatasourceCreateDialogComponent from "../DatasourceCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders datasource create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <DatasourceCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("datasource-create-dialog-component")).toBeInTheDocument();
});
