import React from "react";
import { render, screen } from "@testing-library/react";

import DatasourcePage from "../DatasourcePage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders datasource page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <DatasourcePage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("datasource-datatable")).toBeInTheDocument();
    expect(screen.getByRole("datasource-add-button")).toBeInTheDocument();
});
